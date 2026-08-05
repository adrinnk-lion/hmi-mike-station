import './Badge.css';

const LABELS = {
  battery: { normal: 'BATT', error: 'BATT ERROR' },
  hipot: { normal: 'HIPOT', error: 'HIPOT ERROR' },
  analyzer: { normal: 'ANLZR', error: 'ANLZR ERROR' },
};

/**
 * TestTypeBadge — matches the Figma "Badges" component set (test-station specific).
 * Figma variant properties: State (Battery/HiPot/Analyzer), Status (Normal/Error).
 */
export default function TestTypeBadge({ testType = 'battery', status = 'normal' }) {
  return (
    <div className={`hmi-badge hmi-badge--testtype hmi-badge--testtype-${status}`}>
      {LABELS[testType][status]}
    </div>
  );
}
