import StatusDot from './StatusDot';
import './StatusIndicator.css';

/**
 * StatusCard — matches the Figma "Status Cards" component set.
 * Figma variant property: State (Default — Info only, per the design).
 */
export default function StatusCard({ header = 'Header Text', state = 'info', status = 'Status', dot = true }) {
  return (
    <div className="hmi-status-card">
      <p className="hmi-status-card__header">{header}</p>
      <div className={`hmi-status-card__status hmi-status-label hmi-status-label--${state}`}>
        {dot && <StatusDot state={state} />}
        <span>{status}</span>
      </div>
    </div>
  );
}
