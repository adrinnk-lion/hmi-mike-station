import { LionLogoIcon } from '../../icons';
import './StationName.css';

/**
 * StationName — matches the Figma "Station Name" component set.
 */
export default function StationName({ text = 'Station Name' }) {
  return (
    <div className="hmi-station-name">
      <span className="hmi-station-name__icon-wrap">
        <LionLogoIcon size={36} />
      </span>
      <p className="hmi-station-name__text hmi-type-subheading-28-semibold">{text}</p>
    </div>
  );
}
