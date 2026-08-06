import { useEffect } from 'react';
import Button from '../Button/Button';
import './Modal.css';

/**
 * Modal — matches the Figma "Modal" component set (state: Modal).
 * The `icon` prop mirrors Figma's instance-swap property on the icon slot —
 * pass any icon element (e.g. ExclamationTriangleSolidIcon, CheckSolidIcon,
 * XSolidIcon) to swap it.
 *
 * `inline` renders the modal card directly in the page flow (no backdrop or
 * fixed positioning) for static display in a component gallery. Omit it to
 * use the modal as a real overlay dialog, gated by `open`/`onClose`.
 */
export default function Modal({
  open = true,
  onClose,
  inline = false,
  icon,
  title = 'Error, Warning, Info Modal',
  errorCode = 'Error Code: 000000',
  subtext = 'Subtext for errors, alerts, or other information relating to the modal.',
  cancelText = 'Okay',
  confirmText = 'Retest',
  onCancel,
  onConfirm,
}) {
  useEffect(() => {
    if (inline || !open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [inline, open, onClose]);

  if (!inline && !open) return null;

  const card = (
    <div
      className="hmi-modal"
      role="dialog"
      aria-modal={!inline || undefined}
      onClick={inline ? undefined : (e) => e.stopPropagation()}
    >
      <div className="hmi-modal__content">
        {icon && <div className="hmi-modal__icon">{icon}</div>}
        <div className="hmi-modal__text">
          <p className="hmi-modal__title">{title}</p>
          <p className="hmi-modal__error-code">{errorCode}</p>
          <p className="hmi-modal__subtext">{subtext}</p>
        </div>
      </div>
      <div className="hmi-modal__buttons">
        <Button state="secondary" size="regular" className="hmi-modal__button" onClick={onCancel ?? onClose}>
          {cancelText}
        </Button>
        <Button state="primary" size="regular" className="hmi-modal__button" onClick={onConfirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  );

  if (inline) return card;

  return (
    <div className="hmi-modal-backdrop" onClick={onClose}>
      {card}
    </div>
  );
}
