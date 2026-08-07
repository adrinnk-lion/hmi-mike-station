import { useState } from 'react';
import { UserSolidIcon, XSolidIcon } from '../../icons';
import './InputField.css';

/**
 * InputField — matches the Figma "Input Field" component set.
 * Figma variant property: State (Default/Active/Error/Disabled).
 */
export default function InputField({
  state = 'default',      // 'default' | 'active' | 'error' | 'disabled'
  label = true,
  labelText = 'Label',
  leftIcon = true,
  icon,                    // optional custom left icon element, defaults to UserSolidIcon
  rightIcon = true,
  placeholder = true,
  placeholderText = 'Placeholder Text',
  description = true,
  descriptionText = 'This section should be used to describe input',
}) {
  const [value, setValue] = useState('');
  const disabled = state === 'disabled';
  const className = ['hmi-input-field', `hmi-input-field--${state}`].join(' ');

  return (
    <div className={className}>
      {label && <label className="hmi-input-field__label">{labelText}</label>}
      <div className="hmi-input-field__box">
        {leftIcon && (
          <span className="hmi-input-field__icon">
            {icon ?? <UserSolidIcon size={20} />}
          </span>
        )}
        <input
          type="text"
          className="hmi-input-field__input"
          placeholder={placeholder ? placeholderText : undefined}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
        {rightIcon && (
          <button
            type="button"
            className="hmi-input-field__clear"
            onClick={() => setValue('')}
            disabled={disabled}
            aria-label="Clear input"
          >
            <XSolidIcon size={18} />
          </button>
        )}
      </div>
      {description && <p className="hmi-input-field__description">{descriptionText}</p>}
    </div>
  );
}
