import { BatterySolidIcon } from '../../icons';
import './NavBar.css';

/**
 * NavItem — matches the Figma "Nav" component set.
 * Figma variant property: State (boolean — selected vs. default).
 */
export default function NavItem({ selected = false, text = 'Navigation Text', icon, onClick }) {
  return (
    <button
      type="button"
      className={`hmi-nav-item ${selected ? 'hmi-nav-item--selected' : 'hmi-nav-item--default'}`}
      onClick={onClick}
    >
      <span className="hmi-nav-item__icon">{icon ?? <BatterySolidIcon size={24} />}</span>
      <span>{text}</span>
    </button>
  );
}
