import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { ClipboardListSolidIcon, PhoneSolidIcon, LogoutOutlineIcon } from '../../icons';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewShell.css';

const NAV_ITEMS = [
  { text: 'Run Test' },
  { text: 'System Details', icon: <ClipboardListSolidIcon size={24} /> },
  { text: 'Call Engineer', icon: <PhoneSolidIcon size={24} /> },
  { text: 'Log Out', icon: <LogoutOutlineIcon size={24} /> },
];

/**
 * TechViewShell — the sidebar + canvas frame shared by every Tech View
 * screen except Log In (which has no nav sidebar in the Figma flow).
 * Renders at a fixed 800x480 canvas, matching the real device's screen
 * resolution the Figma frames were designed at.
 */
export default function TechViewShell({ children, onLogOut, activeNavIndex = 0 }) {
  const navigate = useNavigate();

  return (
    <div className="tv-viewport">
      <div className="tv-screen">
        <NavBar
          stationName="Mike Station"
          items={NAV_ITEMS}
          selectedIndex={activeNavIndex}
          onSelect={(index) => {
            if (index === 0 && activeNavIndex !== 0) navigate(TECH_VIEW_ROUTES.scanSerialNumber);
            if (index === 1 && activeNavIndex !== 1) navigate(TECH_VIEW_ROUTES.engineerAccess);
            if (index === 3) onLogOut?.();
          }}
        />
        <div className="tv-screen__content">
          {children}
          <p className="tv-screen__timestamp">May 20th, 2026 | 9:21 AM</p>
        </div>
      </div>
    </div>
  );
}
