import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { resetTestRuns } from './useTestRun';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';

export default function UploadSuccess() {
  const navigate = useNavigate();

  return (
    <TechViewShell>
      <TechViewProgress currentStep={4} />
      <PageText
        status="pass"
        title="Upload Successful"
        text="Test has been uploaded successfully. Please remove the battery to continue testing."
        className="tv-mt-110"
      />
      <div className="tv-screen__footer">
        {/*
          Review Results flags the results as already uploaded, so Test Results
          offers "Done" instead of asking to upload them again.
        */}
        <ButtonGroup
          variant="done"
          backText="Review Results"
          finishText="Done"
          onBack={() => navigate(TECH_VIEW_ROUTES.testPass, { state: { uploaded: true } })}
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
