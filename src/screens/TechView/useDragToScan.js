import { useEffect, useRef, useState } from 'react';

const SCAN_DURATION_MS = 700;

/**
 * Drag-one-thing-onto-another-to-scan-it interaction, shared by the screens
 * that prototype scanning something real. The station's scanners are handheld,
 * so in practice the scanner is the draggable and the item being read (an ID
 * card, a battery) is the target.
 *
 * Attach `dragRef` + `dragHandlers` + `dragStyle` to the draggable and
 * `targetRef` to whatever it gets dragged onto. `onScan` fires once the scan
 * completes. Pass `disabled` to stop re-scanning something already read.
 */
export default function useDragToScan({ onScan, disabled = false }) {
  const dragRef = useRef(null);
  const targetRef = useRef(null);
  const dragStart = useRef(null);
  const scanTimer = useRef(null);
  const onScanRef = useRef(onScan);

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [armed, setArmed] = useState(false);
  const [scanning, setScanning] = useState(false);

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
    setScanning(true);
    scanTimer.current = setTimeout(() => {
      setScanning(false);
      onScanRef.current?.();
    }, SCAN_DURATION_MS);
  };

  const handlePointerDown = (e) => {
    if (scanning) return;
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
      setOffset({ x: 0, y: 0 });   // draggable springs back to its slot
      dragStart.current = null;
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
    dragStyle: { transform: `translate(${offset.x}px, ${offset.y}px)` },
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onKeyDown: handleKeyDown,
      role: 'button',
      tabIndex: 0,
    },
  };
}
