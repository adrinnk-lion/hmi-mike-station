import { useEffect, useRef, useState } from 'react';

const SCAN_DURATION_MS = 700;

/**
 * Drag-one-thing-onto-another interaction, shared by the screens that
 * prototype handling something physical. Mostly that's scanning — the
 * station's scanners are handheld, so the scanner is the draggable and the
 * item being read (an ID card, a battery) is the target — but it also drives
 * seating a battery into the station bay.
 *
 * Attach `dragRef` + `dragHandlers` + `dragStyle` to the draggable and
 * `targetRef` to whatever it gets dragged onto. `onScan` fires on a successful
 * drop. Pass `disabled` to stop re-triggering something already handled.
 *
 * `busyMs` is the delay before `onScan` fires, with `scanning` true throughout
 * (a barcode read; pass 0 to fire immediately). `lockOnDrop` seats the
 * draggable in the target and freezes it there instead of springing back.
 */
export default function useDragToScan({
  onScan,
  disabled = false,
  busyMs = SCAN_DURATION_MS,
  lockOnDrop = false,
}) {
  const dragRef = useRef(null);
  const targetRef = useRef(null);
  const dragStart = useRef(null);
  const scanTimer = useRef(null);
  const onScanRef = useRef(onScan);

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [armed, setArmed] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [locked, setLocked] = useState(false);

  /* Kept in a ref so the drag listeners never need re-subscribing (and can't
     capture a stale callback) just because the caller re-rendered. */
  onScanRef.current = onScan;

  useEffect(() => () => clearTimeout(scanTimer.current), []);

  /* Counts as "in range" once the two overlap at all, which reads more like
     waving a handheld scanner over a label than requiring the cursor itself
     to land inside the target. */
  const overlapsTarget = () => {
    const drag = dragRef.current?.getBoundingClientRect();
    const target = targetRef.current?.getBoundingClientRect();
    if (!drag || !target) return false;
    return (
      drag.left < target.right &&
      drag.right > target.left &&
      drag.top < target.bottom &&
      drag.bottom > target.top
    );
  };

  const runScan = () => {
    if (scanning || disabled) return;
    if (busyMs <= 0) {
      onScanRef.current?.();
      return;
    }
    setScanning(true);
    scanTimer.current = setTimeout(() => {
      setScanning(false);
      onScanRef.current?.();
    }, busyMs);
  };

  const handlePointerDown = (e) => {
    if (scanning || locked) return;
    dragStart.current = { px: e.clientX, py: e.clientY, ox: offset.x, oy: offset.y };
    setDragging(true);
  };

  /*
    Tracked on the window rather than the draggable itself so the drag survives
    the pointer outrunning it — which it will, since the draggable only catches
    up on the next render. Pointer capture would also cover that, but it throws
    if the pointer has already been released, so it isn't relied on here.
  */
  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e) => {
      if (!dragStart.current) return;
      const { px, py, ox, oy } = dragStart.current;
      setOffset({ x: ox + (e.clientX - px), y: oy + (e.clientY - py) });
      setArmed(overlapsTarget());
    };

    const handleUp = () => {
      const hit = overlapsTarget();
      setDragging(false);
      setArmed(false);
      dragStart.current = null;

      if (hit && lockOnDrop) {
        /* Seat it centred in the target and leave it there — a battery pushed
           into the station stays in the station. */
        const drag = dragRef.current?.getBoundingClientRect();
        const target = targetRef.current?.getBoundingClientRect();
        if (drag && target) {
          const dx = (target.left + target.width / 2) - (drag.left + drag.width / 2);
          const dy = (target.top + target.height / 2) - (drag.top + drag.height / 2);
          setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
        }
        setLocked(true);
      } else {
        setOffset({ x: 0, y: 0 });   // draggable springs back to its slot
      }

      if (hit) runScan();
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, [dragging]);   // eslint-disable-line react-hooks/exhaustive-deps

  /* Dragging is pointer-only, so give keyboard users a way to scan too. */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      runScan();
    }
  };

  return {
    dragRef,
    targetRef,
    dragging,
    armed,
    scanning,
    locked,
    dragStyle: { transform: `translate(${offset.x}px, ${offset.y}px)` },
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onKeyDown: handleKeyDown,
      role: 'button',
      tabIndex: 0,
    },
  };
}
