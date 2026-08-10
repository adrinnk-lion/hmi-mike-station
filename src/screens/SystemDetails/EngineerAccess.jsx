import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from '../TechView/TechViewShell';
import StationName from '../../components/StationName/StationName';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { IdentificationSolidIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from '../TechView/routes';
import './SystemDetails.css';

export default function EngineerAccess() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');

  return (
    <TechViewShell activeNavIndex={1}>
      <div className="tv-engineer-access__panel">
        <div className="tv-engineer-access__form">
          <StationName text="Engineer Access Only" />
          <div className="tv-engineer-access__scan">
            <p className="hmi-type-subheading-18-regular tv-engineer-access__prompt">Scan ID card to log in</p>
            <InputField
              labelText="Account"
              placeholderText="Scan your ID card"
              icon={<IdentificationSolidIcon size={20} />}
              description={false}
              onValueChange={setAccount}
            />
          </div>
        </div>
        <Button
          size="regular"
          className="tv-engineer-access__submit"
          disabled={!account}
          onClick={() => navigate(TECH_VIEW_ROUTES.systemDetails)}
        >
          Log In
        </Button>
      </div>
    </TechViewShell>
  );
}
