import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';

export default function UploadSuccess() {
  const navigate = useNavigate();

  return (
    <TechViewShell onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <TechViewProgress currentStep={4} />
      <PageText
        status="pass"
        title="Upload Successful"
        text="Test has been uploaded successfully. Please remove the battery to continue testing."
        className="tv-mt-110"
      />
      <div className="tv-screen__footer">
        <ButtonGroup
          variant="done"
          backText="Review Results"
          finishText="Done"
          onBack={() => navigate(TECH_VIEW_ROUTES.testPass)}
          onFinish={() => navigate(TECH_VIEW_ROUTES.login)}
        />
      </div>
    </TechViewShell>
  );
}
