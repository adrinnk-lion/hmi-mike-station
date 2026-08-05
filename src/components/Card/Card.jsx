import './Card.css';

/**
 * Card — matches the Figma "Card" component set.
 * Figma variant property: Size (Large/Medium/Small).
 */
export default function Card({ size = 'large', header = 'Header', value = 'Value' }) {
  return (
    <div className={`hmi-card hmi-card--${size}`}>
      <p className="hmi-card__header">{header}</p>
      <p className="hmi-card__value">{value}</p>
    </div>
  );
}
