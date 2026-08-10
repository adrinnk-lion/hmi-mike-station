import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RoundBadge from '../../components/Badge/RoundBadge';
import StatusBar from '../../components/StatusBar/StatusBar';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './HipotTest.css';

export default function HipotTest() {
  const navigate = useNavigate();

  return (
    <TechViewShell onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <TechViewProgress currentStep={2} />
      <div className="tv-hipot">
        <PageText
          variant="pageTitle"
          title="HiPot Test"
          text="Status: 62% Complete"
          className="tv-hipot__title"
        />
        <div className="tv-row tv-row--gap-12 tv-hipot__meter">
          <ProgressBar state="warning" percent={62} />
          <RoundBadge state="error" size="small" />
        </div>
        <div className="tv-row tv-row--top tv-hipot__body">
          <div className="tv-block tv-block--gap-12 tv-hipot__testbars">
            <StatusBar state="success" text="Ramp" />
            <StatusBar state="success" text="Hold" />
            <StatusBar state="error" text="Discharge" button buttonText="Test Again" />
            <StatusBar state="default" text="Complete" />
          </div>
          <div className="tv-cards-column">
            <Card size="medium" header="SOC" value="84%" />
            <Card size="medium" header="Voltage" value="52.4 V" />
            <Card size="medium" header="Current" value="4.9 A" />
          </div>
        </div>
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          <Button state="destructive" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.login)}>
            Stop Test
          </Button>
          <div className="tv-row tv-row--gap-12">
            <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.batteryAnalyzerTest)}>
              Back
            </Button>
            <Button size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.testPass)}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </TechViewShell>
  );
}
