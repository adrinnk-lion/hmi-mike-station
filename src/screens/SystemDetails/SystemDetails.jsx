import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from '../TechView/TechViewShell';
import StatusCard from '../../components/StatusIndicator/StatusCard';
import StatusBar from '../../components/StatusBar/StatusBar';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { ExclamationTriangleSolidIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from '../TechView/routes';
import '../TechView/TechViewScreens.css';
import './SystemDetails.css';

export default function SystemDetails() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  return (
    <TechViewShell activeNavIndex={1}>
      <div className="tv-block tv-block--gap-8">
        <p className="hmi-type-body-15-semibold tv-label">SYSTEM DETAILS</p>
        <div className="tv-row tv-row--gap-12">
          <StatusCard header="PLC" state="success" status="Connected" />
          <StatusCard header="ANALYZER" state="success" status="Connected" />
          <StatusCard header="HIPOT" state="error" status="Error" />
          <StatusCard header="RS232" state="success" status="Healthy" />
          {/* Idle carries no status dot, matching the design's idle variant. */}
          <StatusCard header="NETSUITE" state="idle" status="Idle" dot={false} />
        </div>
      </div>
      <div className="tv-block tv-block--gap-12 tv-mt-32">
        <div className="tv-block tv-block--gap-2">
          <p className="hmi-type-body-15-semibold tv-label">CURRENT TEST</p>
          <p className="hmi-type-body-15-regular tv-label">Serial Number: 0120912349234</p>
        </div>
        {/*
          The failure sits on HiPot, matching the test flow — the analyzer
          passes and HiPot is the stage that gives out.
        */}
        <div className="tv-system-details__bars-grid">
          <StatusBar state="success" text="Door Closed" />
          <StatusBar
            state="error"
            text="HiPot Test"
            buttonText="Details"
            onButtonClick={() => setShowError(true)}
          />
          <StatusBar state="success" text="Battery Connected" />
          <StatusBar state="default" text="Upload Results" />
          <StatusBar state="success" text="Battery Analyzer" />
          <StatusBar state="default" text="Complete" />
        </div>
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          <Button state="destructive" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.emergencyStop)}>
            Stop Test
          </Button>
          <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.eventLog)}>
            Event Log
          </Button>
        </div>
      </div>
      <Modal
        open={showError}
        onClose={() => setShowError(false)}
        onCancel={() => setShowError(false)}
        onConfirm={() => setShowError(false)}
        className="tv-system-details__modal-backdrop"
        icon={<span style={{ color: 'var(--color-error-40)' }}><ExclamationTriangleSolidIcon size={85} /></span>}
        title="HiPot Test Error"
        errorCode="Error Code: HP-0412"
        subtext="Residual voltage of 212 V remained 5s after ramp-down, above the 60 V safe limit. Check the discharge relay and HiPot lead connections before retesting."
      />
    </TechViewShell>
  );
}
