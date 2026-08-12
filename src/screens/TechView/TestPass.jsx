import { useLocation, useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import Card from '../../components/Card/Card';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { resetTestRuns } from './useTestRun';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './TestPass.css';

export default function TestPass() {
  const navigate = useNavigate();
  const location = useLocation();

  /*
    Set when arriving here via Review Results from Upload Successful. The
    results are already filed at that point, so the forward action finishes the
    job and starts the next battery instead of uploading again. Upload Failed
    deliberately doesn't set it — from there, uploading again is the point.
  */
  const uploaded = Boolean(location.state?.uploaded);

  return (
    <TechViewShell>
      <TechViewProgress currentStep={3} />
      <PageText variant="results" title="Test Results" status="pass" className="tv-mt-40" />
      <div className="tv-row tv-row--gap-16 tv-testpass__cards">
        <Card size="small" header="Final SOC" value="91%" />
        <Card size="small" header="Voltage" value="52.4 V" />
        <Card size="small" header="HiPot Leakage" value="0.2 mA" />
        <Card size="small" header="Duration" value="04:12" />
      </div>
      <div className="tv-screen__footer">
        <ButtonGroup
          variant="two"
          backText="Back"
          nextText={uploaded ? 'Done' : 'Upload Results'}
          onBack={() => navigate(TECH_VIEW_ROUTES.hipotTest)}
          onNext={() => {
            if (!uploaded) {
              navigate(TECH_VIEW_ROUTES.uploadLoading);
              return;
            }
            /* This battery is done — clear the runs so the next one tests fresh. */
            resetTestRuns();
            navigate(TECH_VIEW_ROUTES.scanSerialNumber);
          }}
        />
      </div>
    </TechViewShell>
  );
}
