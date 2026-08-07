import './Alert.css';
import {
  ExclamationCircleOutlineIcon,
  CheckCircleOutlineIcon,
  ExclamationOutlineIcon,
  InfoOutlineIcon,
} from '../../icons';

const ICONS = {
  error: ExclamationCircleOutlineIcon,
  success: CheckCircleOutlineIcon,
  warning: ExclamationOutlineIcon,
  informational: InfoOutlineIcon,
};

/**
 * Alert — matches the Figma "Alert" component set.
 * Figma variant property: Property 1 (Error/Success/Warning/Informational).
 * Note: the Figma property value was misspelled "Warnin" (missing the g) —
 * fixed here to "warning" for the code side; worth correcting in Figma too.
 */
export default function Alert({
  type = 'error',
  children = 'Hello there, put the alert message here. Adjust the icon to match the purpose of the alert.',
}) {
  const Icon = ICONS[type];
  return (
    <div className={`hmi-alert hmi-alert--${type}`}>
      <Icon size={24} />
      <p>{children}</p>
    </div>
  );
}
