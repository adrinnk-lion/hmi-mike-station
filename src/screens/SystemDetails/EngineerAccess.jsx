import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from '../TechView/TechViewShell';
import StationName from '../../components/StationName/StationName';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { IdentificationSolidIcon } from '../../icons';
import ScanRig, { BarcodeScanner, IdCard } from '../TechView/ScanRig';
import useDragToScan from '../TechView/useDragToScan';
import { TECH_VIEW_ROUTES } from '../TechView/routes';
import './SystemDetails.css';

/** The value this card's barcode "encodes" — a different badge to the technician's. */
const ENGINEER_ID = '8820-1147';
/** Long enough to see the card and scanner fade out before the screen changes. */
const LOGIN_EXIT_MS = 260;

export default function EngineerAccess() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const exitTimer = useRef(null);

  const scan = useDragToScan({
    onScan: () => setAccount(ENGINEER_ID),
    disabled: !!account,
  });

  useEffect(() => () => clearTimeout(exitTimer.current), []);

  const handleLogIn = () => {
    setLoggedIn(true);   // fades the card and scanner out first
    exitTimer.current = setTimeout(
      () => navigate(TECH_VIEW_ROUTES.systemDetails),
      LOGIN_EXIT_MS,
    );
  };

  const hint = account
    ? 'Card scanned — press Log In'
    : scan.scanning
      ? 'Scanning…'
      : 'Drag the scanner over the ID card';

  const rig = (
    <ScanRig hint={hint} hidden={loggedIn}>
      <IdCard ref={scan.targetRef} armed={scan.armed} role="Engineer" id={ENGINEER_ID} />
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
  );

  return (
    <TechViewShell activeNavIndex={1} rig={rig}>
      <div className="tv-engineer-access__panel">
        <div className="tv-engineer-access__form">
          <StationName text="Engineer Access Only" />
          <div className="tv-engineer-access__scan">
            <p className="hmi-type-subheading-18-regular tv-engineer-access__prompt">Scan ID card to log in</p>
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
          className="tv-engineer-access__submit"
          disabled={!account}
          onClick={handleLogIn}
        >
          Log In
        </Button>
      </div>
    </TechViewShell>
  );
}
