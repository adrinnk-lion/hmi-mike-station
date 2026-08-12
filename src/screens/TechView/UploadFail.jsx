import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { resetTestRuns } from './useTestRun';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';

export default function UploadFail() {
  const navigate = useNavigate();

  return (
    <TechViewShell>
      <TechViewProgress currentStep={4} />
      <PageText
        status="fail"
        title="Upload Failed"
        text="Test failed to upload. Please verify Netsuite connection or continue testing."
        className="tv-mt-110"
      />
      <div className="tv-screen__footer">
        <ButtonGroup
          variant="done"
          backText="Review Results"
          finishText="Done"
          onBack={() => navigate(TECH_VIEW_ROUTES.testPass)}
          onFinish={() => {
            /* Straight to the next battery — finishing a test doesn't end the
               operator's session, only logging out does. */
            resetTestRuns();
            navigate(TECH_VIEW_ROUTES.scanSerialNumber);
          }}
        />
      </div>
    </TechViewShell>
  );
}
