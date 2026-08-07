import { CheckCircleFilledIcon, XCircleFilledIcon } from '../../icons';
import './PageText.css';

/**
 * PageText — matches the Figma "Text" component set (Text Modules).
 * Figma variant property: State (Page Title/Results/Section).
 *
 * `status` ('pass' | 'fail') controls which single icon/text pair renders
 * for the Page Title and Results variants — Figma's own reference shows
 * both pass and fail at once purely to demo the two icon options; in real
 * use only the one matching the actual test status should show.
 */
export default function PageText({
  variant = 'pageTitle',   // 'pageTitle' | 'results' | 'section'
  title = 'Page Title',
  text = 'Page title text',
  status,                   // 'pass' | 'fail'
  passText = 'PASS',
  failText = 'FAIL',
  sectionText = 'Section Text',
  subText = 'Sub text for section text',
}) {
  if (variant === 'section') {
    return (
      <div className="hmi-page-text">
        <p className="hmi-page-text__section-title hmi-type-subheading-20-semibold">{sectionText}</p>
        <p className="hmi-page-text__section-sub hmi-type-subheading-18-regular">{subText}</p>
      </div>
    );
  }

  if (variant === 'results') {
    return (
      <div className="hmi-page-text">
        <p className="hmi-page-text__title hmi-type-subheading-24-semibold">{title}</p>
        <div className="hmi-page-text__results">
          {status === 'pass' && (
            <div className="hmi-page-text__result">
              <span className="hmi-page-text__result-text">{passText}</span>
              <span className="hmi-page-text__result-icon hmi-page-text__result-icon--pass">
                <CheckCircleFilledIcon size={55} />
              </span>
            </div>
          )}
          {status === 'fail' && (
            <div className="hmi-page-text__result">
              <span className="hmi-page-text__result-text">{failText}</span>
              <span className="hmi-page-text__result-icon hmi-page-text__result-icon--fail">
                <XCircleFilledIcon size={55} />
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // pageTitle
  return (
    <div className="hmi-page-text">
      <div className="hmi-page-text__title-row">
        <p className="hmi-page-text__title hmi-type-subheading-24-semibold">{title}</p>
        {status === 'pass' && (
          <span className="hmi-page-text__title-icon hmi-page-text__title-icon--pass">
            <CheckCircleFilledIcon size={35} />
          </span>
        )}
        {status === 'fail' && (
          <span className="hmi-page-text__title-icon hmi-page-text__title-icon--fail">
            <XCircleFilledIcon size={35} />
          </span>
        )}
      </div>
      <p className="hmi-page-text__subtext hmi-type-body-16-regular">{text}</p>
    </div>
  );
}
