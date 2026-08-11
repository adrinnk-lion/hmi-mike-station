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
          <StatusCard header="ANALYZER" state="error" status="Error" />
          <StatusCard header="HIPOT" state="idle" status="Idle" dot={false} />
          <StatusCard header="RS232" state="success" status="Healthy" />
          <StatusCard header="NETSUITE" state="success" status="Connected" />
        </div>
      </div>
      <div className="tv-block tv-block--gap-12 tv-mt-32">
        <div className="tv-block tv-block--gap-2">
          <p className="hmi-type-body-15-semibold tv-label">CURRENT TEST</p>
          <p className="hmi-type-body-15-regular tv-label">Serial Number: 0120912349234</p>
        </div>
        <div className="tv-system-details__bars-grid">
          <StatusBar state="success" text="Door Closed" />
          <StatusBar state="pending" text="HiPot Test" />
          <StatusBar state="success" text="Battery Connected" />
          <StatusBar state="default" text="Upload Results" />
          <StatusBar
            state="error"
            text="Battery Analyzer"
            buttonText="Details"
            onButtonClick={() => setShowError(true)}
          />
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
        title="Battery Analyzer Error"
        errorCode="Error Code: 000000"
        subtext="The following error has occurred with the connected cables. Please check cable connection before proceeding."
      />
    </TechViewShell>
  );
}
