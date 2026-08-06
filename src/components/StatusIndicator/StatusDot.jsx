import './StatusIndicator.css';

/**
 * StatusDot — matches the Figma "Status Dot" component set.
 * Figma variant property: State (Info/Success/Error/Warning/Idle).
 */
export default function StatusDot({ state = 'info' }) {
  return <span className={`hmi-status-dot hmi-status-dot--${state}`} aria-hidden="true" />;
}
