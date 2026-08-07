import FoundationsBanner from '../FoundationsBanner';
import './Colors.css';

function Swatch({ varName, label, hex, note, bordered }) {
  return (
    <div className="hmi-color-swatch">
      <div
        className={`hmi-color-swatch__chip${bordered ? ' hmi-color-swatch__chip--bordered' : ''}`}
        style={{ background: `var(${varName})` }}
      />
      <p className="hmi-color-swatch__label">{label}</p>
      <p className="hmi-color-swatch__hex">{hex}</p>
      {note && <p className="hmi-color-swatch__hex">{note}</p>}
    </div>
  );
}

function ColorSection({ title, description, swatches, size = 'large' }) {
  return (
    <div className="hmi-color-section">
      <div className="hmi-color-section__heading">
        <p className={`hmi-color-section__title hmi-color-section__title--${size}`}>{title}</p>
        <p className="hmi-color-section__description">{description}</p>
      </div>
      <div className="hmi-color-row">
        {swatches.map((swatch) => (
          <Swatch key={swatch.label} {...swatch} />
        ))}
      </div>
    </div>
  );
}

const NEUTRAL = [
  { varName: '--color-neutral-0', label: 'White', hex: '#FFFFFF', bordered: true },
  { varName: '--color-neutral-10', label: '10', hex: '#F5F5F5' },
  { varName: '--color-neutral-20', label: '20', hex: '#F0F0F0' },
  { varName: '--color-neutral-30', label: '30', hex: '#E8E8E8' },
  { varName: '--color-neutral-40', label: '40', hex: '#DDDDDD' },
  { varName: '--color-neutral-50', label: '50', hex: '#C8C8C8' },
  { varName: '--color-neutral-60', label: '60', hex: '#919191' },
  { varName: '--color-neutral-70', label: '70', hex: '#686868' },
  { varName: '--color-neutral-80', label: '80', hex: '#3E3E3E' },
  { varName: '--color-neutral-90', label: '90', hex: '#1E1E1E' },
  { varName: '--color-neutral-100', label: 'Black', hex: '#000000' },
];

const BRAND = [
  { varName: '--color-brand-10', label: '10', hex: '#FFF5DC' },
  { varName: '--color-brand-20', label: '20', hex: '#FFECB9' },
  { varName: '--color-brand-30', label: '30', hex: '#FFE297' },
  { varName: '--color-brand-40', label: '40', hex: '#FFD974' },
  { varName: '--color-brand-50', label: '50', hex: '#FFD462' },
  { varName: '--color-brand-60', label: '60', hex: '#FFCF51', note: 'Lion Yellow' },
  { varName: '--color-brand-70', label: '70', hex: '#E6BA49' },
  { varName: '--color-brand-80', label: '80', hex: '#B39139' },
  { varName: '--color-brand-90', label: '90', hex: '#724B00' },
  { varName: '--color-brand-100', label: '100', hex: '#4C3E18' },
];

const SUCCESS = [
  { varName: '--color-success-10', label: '10', hex: '#E8FCF1' },
  { varName: '--color-success-40', label: '40', hex: '#419E6A' },
  { varName: '--color-success-60', label: '60', hex: '#00632B', note: 'Main' },
];

const INFO = [
  { varName: '--color-info-10', label: '10', hex: '#D3E1FE' },
  { varName: '--color-info-40', label: '40', hex: '#4D82F3' },
  { varName: '--color-info-60', label: '60', hex: '#2563EB', note: 'Main' },
];

const WARNING = [
  { varName: '--color-warning-10', label: '10', hex: '#FFF5D5' },
  { varName: '--color-warning-40', label: '40', hex: '#EFB008' },
  { varName: '--color-warning-60', label: '60', hex: '#976400', note: 'Main' },
  { varName: '--color-warning-80', label: '80', hex: '#724B00' },
];

const ERROR = [
  { varName: '--color-error-10', label: '10', hex: '#FFEBEB' },
  { varName: '--color-error-40', label: '40', hex: '#D83232' },
  { varName: '--color-error-60', label: '60', hex: '#B01212', note: 'Main' },
  { varName: '--color-error-80', label: '80', hex: '#8C0000' },
];

export default function Colors() {
  return (
    <div className="hmi-colors">
      <FoundationsBanner title="Colors" />

      <div className="hmi-colors__body">
        <ColorSection
          title="Neutral"
          description="Normally used for backgrounds, borders, texts and tertiary buttons and actions."
          swatches={NEUTRAL}
        />
        <ColorSection
          title="Brand"
          description="To be used sparingly and only to draw attention to accented design elements."
          swatches={BRAND}
        />

        <h2 className="hmi-colors__semantic-title">Semantic Colors</h2>

        <ColorSection
          size="small"
          title="Success"
          description="For success or confirmation messages and actions."
          swatches={SUCCESS}
        />
        <ColorSection
          size="small"
          title="Info"
          description="To draw users attention for system messages and status with an informative intention."
          swatches={INFO}
        />
        <ColorSection
          size="small"
          title="Warning"
          description="For critical information or warning messages."
          swatches={WARNING}
        />
        <ColorSection
          size="small"
          title="Error"
          description="For negative or destructive messages and actions."
          swatches={ERROR}
        />
      </div>
    </div>
  );
}
