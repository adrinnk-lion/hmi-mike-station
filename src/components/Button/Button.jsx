import './Button.css';

/**
 * Button — matches the Figma "Button" component set.
 * Figma variant properties: State (Primary/Secondary/Destructive),
 * Size (Large/Regular/Small), Pressed (Off/On), Disabled (Off/On).
 */
export default function Button({
  state = 'primary',       // 'primary' | 'secondary' | 'destructive'
  size = 'large',          // 'large' | 'regular' | 'small'
  pressed = false,
  disabled = false,
  children = 'Button Text',
  onClick,
  ...rest
}) {
  const className = [
    'hmi-button',
    `hmi-button--${state}`,
    `hmi-button--${size}`,
    pressed && 'hmi-button--pressed',
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
