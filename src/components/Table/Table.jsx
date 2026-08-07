import TableRow from './TableRow';
import './Table.css';

/**
 * Table — matches the Figma "Table" component set.
 * Composes a header TableRow with a list of content TableRows — the last
 * row automatically gets the rounded/bottom-bordered "bottom" position.
 */
export default function Table({
  section = 'Section Header',
  serialNumber = 'SN-1234567-890',
  status = 'pass',
  statusText,
  rows = [],
}) {
  return (
    <div className="hmi-table">
      <TableRow
        variant="header"
        position="top"
        section={section}
        serialNumber={serialNumber}
        status={status}
        statusText={statusText}
      />
      {rows.map((row, index) => (
        <TableRow
          key={index}
          variant="content"
          position={index === rows.length - 1 ? 'bottom' : 'middle'}
          {...row}
        />
      ))}
    </div>
  );
}
