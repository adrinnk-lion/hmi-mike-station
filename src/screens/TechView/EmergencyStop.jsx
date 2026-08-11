import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import Button from '../../components/Button/Button';
import { ExclamationCircleSolidIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';

export default function EmergencyStop() {
  const navigate = useNavigate();

  return (
    <TechViewShell activeNavIndex={0} showTimestamp={false}>
      <div className="tv-full-page-alert">
        <div className="tv-full-page-alert__content">
          <div className="tv-full-page-alert__text-content">
            <div className="tv-full-page-alert__icon">
              <ExclamationCircleSolidIcon size={85} />
            </div>
            <div className="tv-full-page-alert__text">
              <p className="tv-full-page-alert__title">Emergency Stop Enabled</p>
              <p className="tv-full-page-alert__body">The testing station has been stopped.</p>
              <p className="tv-full-page-alert__subtext">
                Subtext for errors, alerts, or other information relating to the modal.
              </p>
            </div>
          </div>
          <div className="tv-full-page-alert__buttons">
            <Button
              state="secondary"
              size="regular"
              className="tv-full-page-alert__button"
              onClick={() => navigate(TECH_VIEW_ROUTES.login)}
            >
              Okay
            </Button>
            <Button
              size="regular"
              className="tv-full-page-alert__button"
              onClick={() => navigate(TECH_VIEW_ROUTES.callEngineer)}
            >
              Call Engineer
            </Button>
          </div>
        </div>
      </div>
    </TechViewShell>
  );
}
