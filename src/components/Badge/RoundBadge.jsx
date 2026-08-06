import './Badge.css';

const STATE_TEXT = {
  running: 'Running',
  pass: 'Pass',
  error: 'Error',
  fail: 'Fail',
  stopped: 'Test Stopped',
};

/**
 * RoundBadge — matches the Figma "Round Badges" component set.
 * Figma variant properties: State (Running/Pass/Error/Fail/Stopped), Size (Small/Regular).
 */
export default function RoundBadge({ state = 'running', size = 'regular', children }) {
  return (
    <div className={`hmi-round-badge hmi-round-badge--${state} hmi-round-badge--${size}`}>
      <span>{children ?? STATE_TEXT[state]}</span>
    </div>
  );
}
