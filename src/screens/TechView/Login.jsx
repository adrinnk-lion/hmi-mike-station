import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StationName from '../../components/StationName/StationName';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { IdentificationSolidIcon, LionLogoIcon, UserSolidIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewShell.css';
import './Login.css';

/** The value the card's barcode "encodes" — what lands in the Account field. */
const CARD_ID = '4471-0329';
const SCAN_DURATION_MS = 700;
/** Long enough to see the card and scanner fade out before the screen changes. */
const LOGIN_EXIT_MS = 260;

/*
  Alternating bar/space widths, starting with a bar. Hardcoded rather than
  generated so the barcode is identical on every render.
*/
const BARCODE_WIDTHS = [
  3, 1, 1, 2, 1, 3, 2, 1, 1, 1, 2, 2, 3, 1, 1, 2, 1, 1,
  3, 2, 1, 1, 2, 1, 3, 1, 2, 2, 1, 1, 2, 3, 1, 1, 2, 1,
];

function Barcode() {
  const bars = [];
  let x = 0;
  BARCODE_WIDTHS.forEach((width, i) => {
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={width} height="28" />);
    x += width;
  });
  return (
    <svg
      className="tv-login__barcode"
      viewBox={`0 0 ${x} 28`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {bars}
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');

  const cardRef = useRef(null);
  const scannerRef = useRef(null);
  const dragStart = useRef(null);
  const scanTimer = useRef(null);
  const exitTimer = useRef(null);

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [overScanner, setOverScanner] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => () => {
    clearTimeout(scanTimer.current);
    clearTimeout(exitTimer.current);
  }, []);

  /* Treats the card as "on the scanner" once the two overlap at all, which
     reads more like laying a physical card on a scanner than requiring the
     cursor itself to land inside the scan window. */
  const overlapsScanner = () => {
    const card = cardRef.current?.getBoundingClientRect();
    const scanner = scannerRef.current?.getBoundingClientRect();
    if (!card || !scanner) return false;
    return (
      card.left < scanner.right &&
      card.right > scanner.left &&
      card.top < scanner.bottom &&
      card.bottom > scanner.top
    );
  };

  const runScan = () => {
    if (scanning || account) return;
    setScanning(true);
    scanTimer.current = setTimeout(() => {
      setScanning(false);
      setAccount(CARD_ID);
    }, SCAN_DURATION_MS);
  };

  const handleLogIn = () => {
    setLoggedIn(true);   // fades the card and scanner out first
    exitTimer.current = setTimeout(
      () => navigate(TECH_VIEW_ROUTES.scanSerialNumber),
      LOGIN_EXIT_MS,
    );
  };

  const handlePointerDown = (e) => {
    if (scanning) return;
    dragStart.current = { px: e.clientX, py: e.clientY, ox: offset.x, oy: offset.y };
    setDragging(true);
  };

  /*
    Tracked on the window rather than the card itself so the drag survives the
    pointer outrunning the card — which it will, since the card only catches up
    on the next render. Pointer capture would also cover that, but it throws if
    the pointer has already been released, so it isn't relied on here.
  */
  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e) => {
      if (!dragStart.current) return;
      const { px, py, ox, oy } = dragStart.current;
      setOffset({ x: ox + (e.clientX - px), y: oy + (e.clientY - py) });
      setOverScanner(overlapsScanner());
    };

    const handleUp = () => {
      const hit = overlapsScanner();
      setDragging(false);
      setOverScanner(false);
      setOffset({ x: 0, y: 0 });   // card springs back to its slot
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

  const hint = account
    ? 'Card scanned — press Log In'
    : scanning
      ? 'Scanning…'
      : 'Drag the ID card onto the scanner';

  return (
    <div className="tv-viewport tv-login__stage">
      {/*
        Physical props (ID card + scanner) live outside the 800x480 canvas,
        which represents the device's own screen. They fade out on log in,
        having served their purpose.
      */}
      <div className={`tv-login__rig${loggedIn ? ' tv-login__rig--gone' : ''}`}>
        <div
          ref={cardRef}
          className={`tv-login__card${dragging ? ' tv-login__card--dragging' : ''}`}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`Employee ID card ${CARD_ID} — drag onto the scanner to scan`}
        >
          <div className="tv-login__card-header">
            <LionLogoIcon size={22} />
            <span className="tv-login__card-org">LION ENERGY</span>
          </div>
          <div className="tv-login__card-body">
            <div className="tv-login__card-photo">
              <UserSolidIcon size={26} />
            </div>
            <div className="tv-login__card-details">
              <span className="tv-login__card-name">Employee Name</span>
              <span className="tv-login__card-role">Technician</span>
            </div>
          </div>
          <div className="tv-login__card-strip">
            <Barcode />
            <span className="tv-login__card-number">{CARD_ID}</span>
          </div>
        </div>

        <div
          ref={scannerRef}
          className={[
            'tv-login__scanner',
            overScanner && 'tv-login__scanner--armed',
            scanning && 'tv-login__scanner--scanning',
          ].filter(Boolean).join(' ')}
        >
          <div className="tv-login__scanner-window">
            <span className="tv-login__scanner-beam" />
          </div>
          <span className="tv-login__scanner-label">Barcode Scanner</span>
        </div>

        <p className="tv-login__hint">{hint}</p>
      </div>

      <div className="tv-screen">
        <div className="tv-login__panel">
          <div className="tv-login__form">
            <StationName text="Mike Station" />
            <div className="tv-login__scan">
              <p className="hmi-type-subheading-18-regular tv-login__prompt">Scan ID card to log in</p>
              <InputField
                labelText="Account"
                placeholderText="Scan your ID card"
                icon={<IdentificationSolidIcon size={20} />}
                description={false}
                value={account}
                onValueChange={setAccount}
              />
            </div>
          </div>
          <Button
            size="regular"
            className="tv-login__submit"
            disabled={!account}
            onClick={handleLogIn}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
