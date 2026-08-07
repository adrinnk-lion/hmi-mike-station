import RoundBadge from '../Badge/RoundBadge';
import TestTypeBadge from '../Badge/TestTypeBadge';
import './Table.css';

/**
 * TableRow — matches the Figma "Table Row" component set.
 * Figma variant properties: State (Header/Content), Position (Top/Middle/Bottom).
 */
export default function TableRow({
  variant = 'content',       // 'header' | 'content'
  position = 'middle',       // 'top' | 'middle' | 'bottom'
  section = 'Section Header',
  serialNumber = 'SN-1234567-890',
  status = 'pass',           // 'pass' | 'fail'
  statusText,
  time = '01:58:10',
  testType = 'battery',
  testStatus = 'normal',
  content = 'Test Details |',
}) {
  const className = ['hmi-table-row', `hmi-table-row--${variant}`, `hmi-table-row--${position}`].join(' ');

  if (variant === 'header') {
    return (
      <div className={className}>
        <div className="hmi-table-row__header-info">
          <span className="hmi-table-row__section">{section}</span>
          <span className="hmi-table-row__serial">{serialNumber}</span>
        </div>
        <RoundBadge state={status} size="small" className="hmi-table-row__status">
          {statusText}
        </RoundBadge>
      </div>
    );
  }

  return (
    <div className={className}>
      <span className="hmi-table-row__time">{time}</span>
      <TestTypeBadge testType={testType} status={testStatus} />
      <span className="hmi-table-row__content">{content}</span>
    </div>
  );
}
