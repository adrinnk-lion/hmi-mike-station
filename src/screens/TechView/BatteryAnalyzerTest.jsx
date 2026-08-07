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

export default function BatteryAnalyzerTest() {
  const navigate = useNavigate();

  return (
    <TechViewShell onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <TechViewProgress currentStep={1} />
      <div className="tv-block tv-block--gap-24">
        <div className="tv-row tv-row--gap-16">
          <ProgressBar state="success" percent={62} />
          <RoundBadge state="running" size="small" />
        </div>
        <PageText variant="pageTitle" title="Battery Analyzer Test" text="Status: 62% Complete" />
        <div className="tv-cards-grid">
          <Card size="large" header="SOC" value="84%" />
          <Card size="large" header="Voltage" value="52.4 V" />
          <Card size="large" header="Current" value="4.9 A" />
          <Card size="large" header="Time Elapsed" value="01:42" />
        </div>
      </div>
      <div className="tv-spacer" />
      <div className="tv-footer tv-footer--between">
        <Button state="destructive" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.login)}>
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
    </TechViewShell>
  );
}
