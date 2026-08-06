import './Badge.css';
import { CheckSolidIcon, XSolidIcon } from '../../icons';

/**
 * RectangleBadge — matches the Figma "Rectangle Badges" component set.
 * Figma variant property: State (Default/Pending/Success/Error).
 */
export default function RectangleBadge({ state = 'default', children = 'Text' }) {
  return (
    <div className={`hmi-badge hmi-badge--${state}`}>
      <span>{children}</span>
      {state === 'success' && <CheckSolidIcon size={25} />}
      {state === 'error' && <XSolidIcon size={25} />}
    </div>
  );
}
