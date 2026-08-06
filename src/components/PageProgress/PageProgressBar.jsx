import { useState } from 'react';
import PageProgress from './PageProgress';
import './PageProgress.css';

/**
 * PageProgressBar — matches the Figma "Page Progress Bar" component set.
 * `steps` is an array of labels. Each step is pressable — clicking one makes
 * it the active page. Manages its own selection (defaulting to the first
 * step) unless `activeIndex`/`onSelect` are given.
 */
export default function PageProgressBar({
  steps = ['1. Page', '2. Page', '3. Page', '4. Page', '5. Page'],
  activeIndex,
  onSelect,
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const active = activeIndex ?? internalIndex;

  const handleSelect = (index) => {
    setInternalIndex(index);
    onSelect?.(index);
  };

  return (
    <div className="hmi-page-progress-bar">
      {steps.map((label, index) => (
        <PageProgress
          key={index}
          text={label}
          active={index === active}
          onClick={() => handleSelect(index)}
        />
      ))}
    </div>
  );
}
