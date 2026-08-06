import StatusDot from './StatusDot';
import './StatusIndicator.css';

/**
 * StatusLabel — matches the Figma "Status Label" component set.
 * Figma variant properties: State (Info/Success/Error/Warning/Idle), Dot (bool).
 */
export default function StatusLabel({ state = 'info', dot = true, children = 'Status' }) {
  return (
    <div className={`hmi-status-label hmi-status-label--${state}`}>
      {dot && <StatusDot state={state} />}
      <span>{children}</span>
    </div>
  );
}
