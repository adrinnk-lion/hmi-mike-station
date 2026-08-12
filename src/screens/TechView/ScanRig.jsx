import './ScanRig.css';

/*
  Alternating bar/space widths, starting with a bar. Hardcoded rather than
  generated so a given barcode is identical on every render.
*/
const BARCODE_WIDTHS = [
  3, 1, 1, 2, 1, 3, 2, 1, 1, 1, 2, 2, 3, 1, 1, 2, 1, 1,
  3, 2, 1, 1, 2, 1, 3, 1, 2, 2, 1, 1, 2, 3, 1, 1, 2, 1,
];

/** Stretches to fill its container — size it with CSS, not props. */
export function Barcode() {
  const bars = [];
  let x = 0;
  BARCODE_WIDTHS.forEach((width, i) => {
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={width} height="28" />);
    x += width;
  });
  return (
    <svg
      className="tv-barcode"
      viewBox={`0 0 ${x} 28`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {bars}
    </svg>
  );
}

/**
 * The station's handheld barcode scanner — the draggable, since the real ones
 * are portable: you pick it up and pass it over a label. `armed` = it's over
 * something readable; `scanning` = mid-read.
 *
 * Extra props (style, pointer/key handlers, aria-label) are spread onto the
 * root so useDragToScan can drive it.
 */
export function BarcodeScanner({ ref, armed = false, scanning = false, dragging = false, ...rest }) {
  const className = [
    'tv-prop',
    'tv-scanner',
    dragging && 'tv-prop--dragging',
    armed && 'tv-scanner--armed',
    scanning && 'tv-scanner--scanning',
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={className} {...rest}>
      <div className="tv-scanner__window">
        <span className="tv-scanner__beam" />
      </div>
      <span className="tv-scanner__grip" />
      <span className="tv-scanner__label">Barcode Scanner</span>
    </div>
  );
}

/**
 * Holds the physical props (the handheld scanner + whatever it reads) beside
 * the device canvas. They sit OUTSIDE the 800x480 screen because that canvas
 * is the device's own display at Figma fidelity — real-world objects don't
 * belong inside it, so nothing here draws within it.
 *
 * `hidden` fades the whole rig out once the props have served their purpose.
 */
export default function ScanRig({ children, hint, hidden = false }) {
  return (
    <div className={`tv-rig${hidden ? ' tv-rig--gone' : ''}`}>
      {children}
      {hint && <p className="tv-rig__hint">{hint}</p>}
    </div>
  );
}
