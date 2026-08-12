import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import ScanRig, { Barcode, BarcodeScanner } from './ScanRig';
import useDragToScan from './useDragToScan';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './ScanSerialNumber.css';

/*
  The value the battery's barcode "encodes". Matches Battery 1 in the Event Log
  and System Details, so the scanned pack is the same one those screens report.
*/
const BATTERY_SERIAL = 'SN-1234567-890';

export default function ScanSerialNumber() {
  const navigate = useNavigate();
  const [serial, setSerial] = useState('');

  const scan = useDragToScan({
    onScan: () => setSerial(BATTERY_SERIAL),
    disabled: !!serial,
  });

  const hint = serial
    ? 'Serial scanned — press Next'
    : scan.scanning
      ? 'Scanning…'
      : 'Drag the scanner over the battery';

  const rig = (
    <ScanRig hint={hint}>
      <div
        ref={scan.targetRef}
        className={`tv-scan-target tv-battery${scan.armed ? ' tv-scan-target--armed' : ''}`}
      >
        <div className="tv-battery__terminals">
          <span className="tv-battery__terminal" />
          <span className="tv-battery__terminal" />
        </div>
        <div className="tv-battery__body">
          <span className="tv-battery__org">LION ENERGY</span>
          <span className="tv-battery__spec">LiFePO4 · 48V · 100Ah</span>
          <div className="tv-battery__strip">
            <Barcode />
            <span className="tv-battery__serial">{BATTERY_SERIAL}</span>
          </div>
        </div>
      </div>

      <BarcodeScanner
        ref={scan.dragRef}
        armed={scan.armed}
        scanning={scan.scanning}
        dragging={scan.dragging}
        style={scan.dragStyle}
        aria-label="Handheld barcode scanner — drag over the battery to scan it"
        {...scan.dragHandlers}
      />
    </ScanRig>
  );

  return (
    <TechViewShell rig={rig}>
      <TechViewProgress currentStep={0} />
      <div className="tv-block tv-block--gap-40 tv-mt-40">
        <PageText
          variant="pageTitle"
          title="Scan Serial Number"
          text="Scan the serial number on the battery to get started."
        />
        <div className="tv-scan__field">
          <InputField
            labelText="Serial Number:"
            placeholderText="Serial Number"
            leftIcon={false}
            description={false}
            value={serial}
            onValueChange={setSerial}
          />
        </div>
      </div>
      <div className="tv-screen__footer">
        <Button size="regular" className="tv-scan__submit" onClick={() => navigate(TECH_VIEW_ROUTES.loadBattery)}>
          Next
        </Button>
      </div>
    </TechViewShell>
  );
}
