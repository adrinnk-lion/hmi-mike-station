import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import Modal from '../../components/Modal/Modal';
import { ExclamationTriangleSolidIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from './routes';
import './AlertFullPage.css';

export default function AlertFullPage() {
  const navigate = useNavigate();

  return (
    <TechViewShell activeNavIndex={3} showTimestamp={false}>
      <div className="tv-alert-full-page">
        <Modal
          inline
          cardClassName="tv-alert-full-page__modal"
          icon={<span style={{ color: 'var(--color-error-40)' }}><ExclamationTriangleSolidIcon size={85} /></span>}
          title="Battery Analyzer Error"
          errorCode="Error Code: 000000"
          subtext="The following error has occurred with the connected cables. Please check cable connection before proceeding."
          confirmText="Call Engineer"
          onCancel={() => navigate(-1)}
          onConfirm={() => navigate(TECH_VIEW_ROUTES.callEngineer)}
        />
      </div>
    </TechViewShell>
  );
}
