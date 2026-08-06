import './PageProgress.css';

/**
 * PageProgress — matches the Figma "Page Progress" component set.
 * Figma variant property: State (boolean — active vs. inactive).
 */
export default function PageProgress({ active = false, text = '1. Page', onClick }) {
  return (
    <button
      type="button"
      className={`hmi-page-progress ${active ? 'hmi-page-progress--active' : 'hmi-page-progress--inactive'}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
