import './Badge.css';
import { CheckIcon, XIcon } from '../../icons';

/**
 * RectangleBadge — matches the Figma "Rectangle Badges" component set.
 * Figma variant property: State (Default/Pending/Success/Error).
 */
export default function RectangleBadge({ state = 'default', children = 'Text' }) {
  return (
    <div className={`hmi-badge hmi-badge--${state}`}>
      <span>{children}</span>
      {state === 'success' && <CheckIcon size={18} />}
      {state === 'error' && <XIcon size={18} />}
    </div>
  );
}
