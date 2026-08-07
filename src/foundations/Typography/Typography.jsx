import FoundationsBanner from '../FoundationsBanner';
import './Typography.css';

const SUBHEADINGS = [
  { name: 'Subheading 28 Semi Bold', className: 'hmi-type-subheading-28-semibold', size: '28px', lineHeight: 'Auto', weight: 'Semi Bold' },
  { name: 'Subheading 24 Semi Bold', className: 'hmi-type-subheading-24-semibold', size: '24px', lineHeight: '35px', weight: 'Semi Bold' },
  { name: 'Subheading 20 Semi Bold', className: 'hmi-type-subheading-20-semibold', size: '20px', lineHeight: '29px', weight: 'Semi Bold' },
  { name: 'Subheading 20 Regular', className: 'hmi-type-subheading-20-regular', size: '20px', lineHeight: '29px', weight: 'Regular' },
  { name: 'Subheading 18 Regular', className: 'hmi-type-subheading-18-regular', size: '18px', lineHeight: 'Auto', weight: 'Regular' },
];

const BODY = [
  { name: 'Body 16 Semi Bold', className: 'hmi-type-body-16-semibold', size: '16px', lineHeight: '24px', weight: 'Semi Bold' },
  { name: 'Body 16 Regular', className: 'hmi-type-body-16-regular', size: '16px', lineHeight: '24px', weight: 'Regular' },
  { name: 'Body 15 Semi Bold', className: 'hmi-type-body-15-semibold', size: '15px', lineHeight: '22px', weight: 'Semi Bold' },
  { name: 'Body 15 Regular', className: 'hmi-type-body-15-regular', size: '15px', lineHeight: '22px', weight: 'Regular' },
  { name: 'Body 14 Semi Bold', className: 'hmi-type-body-14-semibold', size: '14px', lineHeight: '21px', weight: 'Semi Bold' },
  { name: 'Body 14 Regular', className: 'hmi-type-body-14-regular', size: '14px', lineHeight: '21px', weight: 'Regular' },
  { name: 'Body 12 Semi Bold', className: 'hmi-type-body-12-semibold', size: '12px', lineHeight: '18px', weight: 'Semi Bold' },
  { name: 'Body 12 Regular', className: 'hmi-type-body-12-regular', size: '12px', lineHeight: '18px', weight: 'Regular' },
];

function TypeTable({ title, rows }) {
  return (
    <div className="hmi-type-table">
      <p className="hmi-type-table__group-label">{title}</p>
      <div className="hmi-type-table__rows">
        {rows.map((row) => (
          <div className="hmi-type-table__row" key={row.name}>
            <span className={row.className}>{row.name}</span>
            <span>{row.size}</span>
            <span>{row.lineHeight}</span>
            <span>{row.weight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Typography() {
  return (
    <div className="hmi-typography">
      <FoundationsBanner title="Fonts and Sizes" />

      <div className="hmi-typography__body">
        <div className="hmi-type-table__row hmi-type-table__row--header">
          <span />
          <span>Size</span>
          <span>Line Height</span>
          <span>Weight</span>
        </div>

        <TypeTable title="Subheadings" rows={SUBHEADINGS} />
        <TypeTable title="Body" rows={BODY} />
      </div>
    </div>
  );
}
