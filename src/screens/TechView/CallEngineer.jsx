import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import PageText from '../../components/PageText/PageText';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './CallEngineer.css';

export default function CallEngineer() {
  const navigate = useNavigate();

  return (
    <TechViewShell activeNavIndex={2} onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <PageText
        variant="pageTitle"
        title="Call Engineer"
        text="Station having issues? Call an engineer for help using the button below."
        className="tv-call-engineer__title"
      />
      <div className="tv-screen__footer">
        <Button size="regular" className="tv-call-engineer__submit">
          Call Engineer
        </Button>
      </div>
    </TechViewShell>
  );
}
