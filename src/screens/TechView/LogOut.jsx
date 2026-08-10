import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import PageText from '../../components/PageText/PageText';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './LogOut.css';

export default function LogOut() {
  const navigate = useNavigate();

  return (
    <TechViewShell activeNavIndex={3}>
      <PageText
        variant="pageTitle"
        title="Employee Name"
        text="Are you sure you want to log out?"
        className="tv-log-out__title"
      />
      <div className="tv-screen__footer">
        <Button size="regular" className="tv-log-out__submit" onClick={() => navigate(TECH_VIEW_ROUTES.login)}>
          Log Out
        </Button>
      </div>
    </TechViewShell>
  );
}
