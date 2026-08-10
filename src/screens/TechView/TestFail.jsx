import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import StatusBar from '../../components/StatusBar/StatusBar';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './TestFail.css';

export default function TestFail() {
  const navigate = useNavigate();

  return (
    <TechViewShell onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <TechViewProgress currentStep={3} />
      <PageText variant="results" title="Test Results" status="fail" className="tv-mt-40" />
      <div className="tv-block tv-block--gap-12 tv-mt-40 tv-testfail__bars">
        <StatusBar state="success" text="Battery Analyzer" />
        <StatusBar state="error" text="HiPot Test" button={false} />
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          <Button state="secondary" size="regular">Review Results</Button>
          <div className="tv-row tv-row--gap-12">
            <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.hipotTest)}>
              Back
            </Button>
            <Button size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.uploadLoading)}>
              Upload Results
            </Button>
          </div>
        </div>
      </div>
    </TechViewShell>
  );
}
