import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import RectangleBadge from '../../components/Badge/RectangleBadge';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';

export default function LoadBattery() {
  const navigate = useNavigate();

  return (
    <TechViewShell>
      <TechViewProgress currentStep={0} />
      <div className="tv-block tv-block--gap-40 tv-mt-40">
        <PageText
          variant="pageTitle"
          title="Load Battery"
          text="Push battery fully into station until battery is connected. Then close door to start test."
        />
        <div className="tv-block tv-block--gap-8">
          <p className="hmi-type-body-16-semibold tv-label">Status:</p>
          <div className="tv-row tv-row--gap-16">
            <RectangleBadge state="success">Battery Loaded</RectangleBadge>
            <RectangleBadge state="pending">Contacts Connected</RectangleBadge>
            <RectangleBadge state="default">Door Closed</RectangleBadge>
          </div>
        </div>
      </div>
      <div className="tv-screen__footer">
        <ButtonGroup
          variant="two"
          backText="Back"
          nextText="Start Test"
          onBack={() => navigate(TECH_VIEW_ROUTES.scanSerialNumber)}
          onNext={() => navigate(TECH_VIEW_ROUTES.batteryAnalyzerTest)}
        />
      </div>
    </TechViewShell>
  );
}
