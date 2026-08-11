import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RoundBadge from '../../components/Badge/RoundBadge';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './BatteryAnalyzerTest.css';

export default function BatteryAnalyzerTest() {
  const navigate = useNavigate();

  return (
    <TechViewShell>
      <TechViewProgress currentStep={1} />
      <div className="tv-analyzer">
        <PageText
          variant="pageTitle"
          title="Battery Analyzer Test"
          text="Status: 62% Complete"
          className="tv-analyzer__title"
        />
        <div className="tv-row tv-row--gap-12 tv-analyzer__meter">
          <ProgressBar state="success" percent={62} />
          <RoundBadge state="running" size="small" />
        </div>
        <div className="tv-cards-grid tv-analyzer__cards">
          <Card size="large" header="SOC" value="84%" />
          <Card size="large" header="Voltage" value="52.4 V" />
          <Card size="large" header="Current" value="4.9 A" />
          <Card size="large" header="Time Elapsed" value="01:42" />
        </div>
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          <Button state="destructive" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.emergencyStop)}>
            Stop Test
          </Button>
          <div className="tv-row tv-row--gap-12">
            <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.loadBattery)}>
              Back
            </Button>
            <Button size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.hipotTest)}>
              Start HiPot Test
            </Button>
          </div>
        </div>
      </div>
    </TechViewShell>
  );
}
