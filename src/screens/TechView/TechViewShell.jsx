import { useEffect, useState } from 'react';
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

/** 1 -> "1st", 2 -> "2nd", 11 -> "11th", 21 -> "21st" — matches Figma's "May 20th" style. */
function ordinalDay(day) {
  if (day % 100 >= 11 && day % 100 <= 13) return `${day}th`;
  if (day % 10 === 1) return `${day}st`;
  if (day % 10 === 2) return `${day}nd`;
  if (day % 10 === 3) return `${day}rd`;
  return `${day}th`;
}

function formatTimestamp(date) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return `${month} ${ordinalDay(date.getDate())}, ${date.getFullYear()} | ${time}`;
}

/**
 * TechViewShell — the sidebar + canvas frame shared by every Tech View
 * screen except Log In (which has no nav sidebar in the Figma flow).
 * Renders at a fixed 800x480 canvas, matching the real device's screen
 * resolution the Figma frames were designed at.
 */
export default function TechViewShell({
  children,
  activeNavIndex = 0,
  showTimestamp = true,
  rig = null,   // optional physical props (see ScanRig) shown beside the canvas
}) {
  const navigate = useNavigate();
  const [timestamp, setTimestamp] = useState(() => formatTimestamp(new Date()));

  /*
    Ticks every second so the displayed minute flips promptly, rather than
    drifting up to a minute behind a 60s interval. Re-setting the same
    formatted string is a no-op in React, so this only re-renders when the
    minute actually changes.
  */
  useEffect(() => {
    const id = setInterval(() => setTimestamp(formatTimestamp(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`tv-viewport${rig ? ' tv-viewport--with-rig' : ''}`}>
      {rig}
      <div className="tv-screen">
        <NavBar
          stationName="Mike Station"
          items={NAV_ITEMS}
          selectedIndex={activeNavIndex}
          onSelect={(index) => {
            if (index === 0 && activeNavIndex !== 0) navigate(TECH_VIEW_ROUTES.scanSerialNumber);
            if (index === 1 && activeNavIndex !== 1) navigate(TECH_VIEW_ROUTES.engineerAccess);
            if (index === 2 && activeNavIndex !== 2) navigate(TECH_VIEW_ROUTES.callEngineer);
            if (index === 3 && activeNavIndex !== 3) navigate(TECH_VIEW_ROUTES.logOut);
          }}
        />
        <div className="tv-screen__content">
          {children}
          {showTimestamp && <p className="tv-screen__timestamp">{timestamp}</p>}
        </div>
      </div>
    </div>
  );
}
