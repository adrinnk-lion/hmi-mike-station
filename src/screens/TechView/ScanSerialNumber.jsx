import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './ScanSerialNumber.css';

export default function ScanSerialNumber() {
  const navigate = useNavigate();

  return (
    <TechViewShell onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <TechViewProgress currentStep={0} />
      <div className="tv-block tv-block--gap-40">
        <PageText
          variant="pageTitle"
          title="Scan Serial Number"
          text="Scan the serial number on the battery to get started."
        />
        <div className="tv-scan__field">
          <InputField labelText="Serial Number:" placeholderText="Serial Number" leftIcon={false} description={false} />
        </div>
      </div>
      <div className="tv-screen__footer">
        <Button size="regular" className="tv-scan__submit" onClick={() => navigate(TECH_VIEW_ROUTES.loadBattery)}>
          Next
        </Button>
      </div>
    </TechViewShell>
  );
}
