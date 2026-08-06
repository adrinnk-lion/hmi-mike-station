import Button from '../Button/Button';
import './ButtonGroup.css';

/**
 * ButtonGroup — matches the Figma "Buttons" component set (wizard footer nav).
 * Figma variant property "State": One | Two | Three | Done | Pages
 */
export default function ButtonGroup({
  variant = 'one',        // 'one' | 'two' | 'three' | 'done' | 'pages'
  backText = 'Button Text',
  nextText = 'Button Text',
  cancelText = 'Button Text',
  finishText = 'Button Text',
  onBack,
  onNext,
  onCancel,
  onFinish,
  page = 1,
  totalPages = 7,
}) {
  const className = ['hmi-button-group', `hmi-button-group--${variant}`].join(' ');

  if (variant === 'one') {
    return (
      <div className={className}>
        <Button size="regular" className="hmi-button-group__flex" onClick={onNext}>{nextText}</Button>
      </div>
    );
  }

  if (variant === 'two') {
    return (
      <div className={className}>
        <Button size="regular" state="secondary" onClick={onBack}>{backText}</Button>
        <Button size="regular" onClick={onNext}>{nextText}</Button>
      </div>
    );
  }

  if (variant === 'three') {
    return (
      <div className={className}>
        <Button size="regular" state="destructive" onClick={onCancel}>{cancelText}</Button>
        <div className="hmi-button-group__frame">
          <Button size="regular" state="secondary" onClick={onBack}>{backText}</Button>
          <Button size="regular" onClick={onNext}>{nextText}</Button>
        </div>
      </div>
    );
  }

  if (variant === 'done') {
    return (
      <div className={className}>
        <Button size="regular" state="secondary" onClick={onBack}>{backText}</Button>
        <Button size="regular" className="hmi-button-group__flex" onClick={onFinish}>{finishText}</Button>
      </div>
    );
  }

  // pages
  return (
    <div className={className}>
      <Button size="regular" state="secondary" onClick={onBack}>{backText}</Button>
      <span className="hmi-button-group__page">Page {page}/{totalPages}</span>
      <Button size="regular" onClick={onNext}>{nextText}</Button>
    </div>
  );
}
