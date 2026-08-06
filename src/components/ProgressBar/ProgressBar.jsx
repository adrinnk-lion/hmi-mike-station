import './ProgressBar.css';

/**
 * ProgressBar — matches the Figma "Progress Bar" component set.
 * Figma variant property: State (Success/Warning/Error).
 */
export default function ProgressBar({ state = 'success', percent = 58 }) {
  return (
    <div className="hmi-progress-bar">
      <div
        className={`hmi-progress-bar__fill hmi-progress-bar__fill--${state}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
