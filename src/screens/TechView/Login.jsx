import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StationName from '../../components/StationName/StationName';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { IdentificationSolidIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewShell.css';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');

  return (
    <div className="tv-viewport">
      <div className="tv-screen">
        <div className="tv-login__panel">
          <div className="tv-login__form">
            <StationName text="Mike Station" />
            <div className="tv-login__scan">
              <p className="hmi-type-subheading-18-regular tv-login__prompt">Scan ID card to log in</p>
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
            className="tv-login__submit"
            disabled={!account}
            onClick={() => navigate(TECH_VIEW_ROUTES.scanSerialNumber)}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
