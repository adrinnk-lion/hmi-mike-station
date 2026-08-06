import { LionLogoIcon } from '../../icons';
import './NavBar.css';

/**
 * NavLogo — matches the Figma "Nav Logo" component set.
 */
export default function NavLogo({ text = 'Station Name' }) {
  return (
    <div className="hmi-nav-logo">
      <div className="hmi-nav-logo__inner">
        <span className="hmi-nav-logo__icon">
          <LionLogoIcon size={35} />
        </span>
        <p className="hmi-nav-logo__text">{text}</p>
      </div>
    </div>
  );
}
