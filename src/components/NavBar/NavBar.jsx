import { useState } from 'react';
import NavLogo from './NavLogo';
import NavItem from './NavItem';
import './NavBar.css';

/**
 * NavBar — matches the Figma "Nav Bar" component set.
 * `items` is an array of { text, icon? }. Manages its own selection state
 * (defaulting to the first item) unless `selectedIndex`/`onSelect` are given.
 */
export default function NavBar({
  stationName = 'Station Name',
  items = [
    { text: 'Navigation Text' },
    { text: 'Navigation Text' },
    { text: 'Navigation Text' },
    { text: 'Navigation Text' },
  ],
  selectedIndex,
  onSelect,
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = selectedIndex ?? internalIndex;

  const handleSelect = (index) => {
    setInternalIndex(index);
    onSelect?.(index);
  };

  return (
    <nav className="hmi-navbar">
      <NavLogo text={stationName} />
      <div className="hmi-navbar__items">
        {items.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            icon={item.icon}
            selected={index === activeIndex}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </nav>
  );
}
