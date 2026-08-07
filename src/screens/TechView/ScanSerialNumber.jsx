import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import InputField from '../../components/InputField/InputField';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';

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
        <InputField labelText="Serial Number:" placeholderText="Serial Number" leftIcon={false} description={false} />
      </div>
      <div className="tv-spacer" />
      <ButtonGroup variant="one" nextText="Next" onNext={() => navigate(TECH_VIEW_ROUTES.loadBattery)} />
    </TechViewShell>
  );
}
