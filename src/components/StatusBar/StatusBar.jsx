import Button from '../Button/Button';
import { CheckSolidIcon, XSolidIcon } from '../../icons';
import './StatusBar.css';

/**
 * StatusBar — matches the Figma "Status Bar" component set.
 * Figma variant properties: State (Default/Pending/Success/Error),
 * Size (Short/Long), Button (Error only).
 */
export default function StatusBar({
  state = 'default',      // 'default' | 'pending' | 'success' | 'error'
  size = 'short',         // 'short' | 'long'
  text = 'Label',
  button = true,
  buttonText = 'Button Text',
  onButtonClick,
}) {
  const className = ['hmi-status-bar', `hmi-status-bar--${state}`, `hmi-status-bar--${size}`].join(' ');

  if (state === 'success') {
    return (
      <div className={className}>
        <CheckSolidIcon size={21} />
        <span>{text}</span>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className={className}>
        <div className="hmi-status-bar__group">
          <XSolidIcon size={21} />
          <span>{text}</span>
        </div>
        {button && (
          <Button
            size="small"
            className={size === 'short' ? 'hmi-status-bar__button--auto' : undefined}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    );
  }

  // default | pending
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
}
