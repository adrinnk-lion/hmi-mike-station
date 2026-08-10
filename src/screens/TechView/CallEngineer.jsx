import TechViewShell from './TechViewShell';
import PageText from '../../components/PageText/PageText';
import Button from '../../components/Button/Button';
import './TechViewScreens.css';
import './CallEngineer.css';

export default function CallEngineer() {
  return (
    <TechViewShell activeNavIndex={2}>
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
