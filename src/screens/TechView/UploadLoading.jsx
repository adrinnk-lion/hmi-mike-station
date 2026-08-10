import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './UploadLoading.css';

/**
 * Upload Loading — a transient screen. In Figma this whole frame is wired
 * as a single hotspot to advance; reproduced here as an auto-advance after
 * a short simulated delay, plus click-anywhere to skip the wait.
 */
export default function UploadLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(TECH_VIEW_ROUTES.uploadSuccess), 1800);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <TechViewShell onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <TechViewProgress currentStep={3} />
      <div className="tv-upload-loading tv-upload-loading__title" onClick={() => navigate(TECH_VIEW_ROUTES.uploadSuccess)}>
        <PageText title="Uploading Test Results..." text="This may take a few minutes." />
      </div>
    </TechViewShell>
  );
}
