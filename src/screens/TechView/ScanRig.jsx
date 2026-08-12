import { LionLogoIcon, UserSolidIcon } from '../../icons';
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
 * An employee ID card — the thing the scanner reads on the log-in screens.
 * It's the drop target, so `armed` lights it up when the scanner is over it.
 */
export function IdCard({ ref, armed = false, name = 'Employee Name', role = 'Technician', id }) {
  return (
    <div
      ref={ref}
      className={`tv-scan-target tv-card${armed ? ' tv-scan-target--armed' : ''}`}
    >
      <div className="tv-card__header">
        <LionLogoIcon size={22} />
        <span className="tv-card__org">LION ENERGY</span>
      </div>
      <div className="tv-card__body">
        <div className="tv-card__photo">
          <UserSolidIcon size={26} />
        </div>
        <div className="tv-card__details">
          <span className="tv-card__name">{name}</span>
          <span className="tv-card__role">{role}</span>
        </div>
      </div>
      <div className="tv-card__strip">
        <Barcode />
        <span className="tv-card__number">{id}</span>
      </div>
    </div>
  );
}

/**
 * A battery pack. It's the scan target on Scan Serial Number and the draggable
 * on Load Battery, so pass `draggable` to switch which base class it carries.
 */
export function BatteryPack({
  ref,
  serial,
  draggable = false,
  armed = false,
  dragging = false,
  locked = false,
  ...rest
}) {
  const className = [
    draggable ? 'tv-prop' : 'tv-scan-target',
    'tv-battery',
    dragging && 'tv-prop--dragging',
    locked && 'tv-prop--locked',
    armed && 'tv-scan-target--armed',
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={className} {...rest}>
      <div className="tv-battery__terminals">
        <span className="tv-battery__terminal" />
        <span className="tv-battery__terminal" />
      </div>
      <div className="tv-battery__body">
        <span className="tv-battery__org">LION ENERGY</span>
        <span className="tv-battery__spec">LiFePO4 · 48V · 100Ah</span>
        <div className="tv-battery__strip">
          <Barcode />
          <span className="tv-battery__serial">{serial}</span>
        </div>
      </div>
    </div>
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
