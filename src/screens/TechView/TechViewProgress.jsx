import PageProgress from '../../components/PageProgress/PageProgress';

const STEPS = ['1. Scan/Load', '2. Analyzer', '3. HiPot', '4. Results', '5. Complete'];

/**
 * TechViewProgress — the 5-step progress row shown at the top of every
 * Tech View screen. Unlike the Components-tab PageProgressBar (exactly one
 * active step, tab-style), Figma's real Tech View screens fill every step
 * up to and including the current one — so this composes the atomic
 * PageProgress pill directly (reusing its existing wrapper class,
 * hmi-page-progress-bar, for the flex/gap layout) rather than reusing
 * PageProgressBar's single-active behavior.
 */
export default function TechViewProgress({ currentStep }) {
  return (
    <div className="hmi-page-progress-bar">
      {STEPS.map((label, index) => (
        <PageProgress key={label} text={label} active={index <= currentStep} />
      ))}
    </div>
  );
}
