import './FoundationsBanner.css';

export default function FoundationsBanner({ title }) {
  return (
    <div className="hmi-foundations-banner">
      <div className="hmi-foundations-banner__inner">
        <p className="hmi-foundations-banner__eyebrow">Foundations</p>
        <h1 className="hmi-foundations-banner__title">{title}</h1>
      </div>
    </div>
  );
}
