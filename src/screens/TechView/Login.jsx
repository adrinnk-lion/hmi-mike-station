import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StationName from '../../components/StationName/StationName';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { IdentificationSolidIcon, LionLogoIcon, UserSolidIcon } from '../../icons';
import ScanRig, { Barcode, BarcodeScanner } from './ScanRig';
import useDragToScan from './useDragToScan';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewShell.css';
import './Login.css';

/** The value the card's barcode "encodes" — what lands in the Account field. */
const CARD_ID = '4471-0329';
/** Long enough to see the card and scanner fade out before the screen changes. */
const LOGIN_EXIT_MS = 260;

export default function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const exitTimer = useRef(null);

  const scan = useDragToScan({
    onScan: () => setAccount(CARD_ID),
    disabled: !!account,
  });

  useEffect(() => () => clearTimeout(exitTimer.current), []);

  const handleLogIn = () => {
    setLoggedIn(true);   // fades the card and scanner out first
    exitTimer.current = setTimeout(
      () => navigate(TECH_VIEW_ROUTES.scanSerialNumber),
      LOGIN_EXIT_MS,
    );
  };

  const hint = account
    ? 'Card scanned — press Log In'
    : scan.scanning
      ? 'Scanning…'
      : 'Drag the scanner over the ID card';

  return (
    <div className="tv-viewport tv-viewport--with-rig">
      <ScanRig hint={hint} hidden={loggedIn}>
        <div
          ref={scan.targetRef}
          className={`tv-scan-target tv-card${scan.armed ? ' tv-scan-target--armed' : ''}`}
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
              <span className="tv-card__name">Employee Name</span>
              <span className="tv-card__role">Technician</span>
            </div>
          </div>
          <div className="tv-card__strip">
            <Barcode />
            <span className="tv-card__number">{CARD_ID}</span>
          </div>
        </div>

        <BarcodeScanner
          ref={scan.dragRef}
          armed={scan.armed}
          scanning={scan.scanning}
          dragging={scan.dragging}
          style={scan.dragStyle}
          aria-label="Handheld barcode scanner — drag over the ID card to scan it"
          {...scan.dragHandlers}
        />
      </ScanRig>

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
