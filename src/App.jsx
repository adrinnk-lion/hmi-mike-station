import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import RectangleBadge from './components/Badge/RectangleBadge';
import RoundBadge from './components/Badge/RoundBadge';
import TestTypeBadge from './components/Badge/TestTypeBadge';
import StatusBar from './components/StatusBar/StatusBar';
import StatusDot from './components/StatusIndicator/StatusDot';
import StatusLabel from './components/StatusIndicator/StatusLabel';
import StatusCard from './components/StatusIndicator/StatusCard';
import InputField from './components/InputField/InputField';
import Modal from './components/Modal/Modal';
import NavItem from './components/NavBar/NavItem';
import NavBar from './components/NavBar/NavBar';
import PageProgress from './components/PageProgress/PageProgress';
import PageProgressBar from './components/PageProgress/PageProgressBar';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Card from './components/Card/Card';
import Alert from './components/Alert/Alert';
import {
  ExclamationTriangleSolidIcon,
  XCircleSolidIcon,
  ExclamationCircleSolidIcon,
  InformationCircleSolidIcon,
} from './icons';
import './App.css';

const MODAL_EXAMPLES = {
  alert: {
    icon: <ExclamationTriangleSolidIcon size={85} />,
    iconColor: 'var(--color-error-40)',
    title: 'Error or Alert Message',
    errorCode: 'Error Code: 000000',
    subtext: 'Subtext for errors, alerts, or other information relating to the modal.',
    cancelText: 'Cancel',
    confirmText: 'Retest',
  },
  error: {
    icon: <XCircleSolidIcon size={85} />,
    iconColor: 'var(--color-error-40)',
    title: 'Test Failed',
    errorCode: 'Error Code: 000000',
    subtext: 'A HiPot test failed on station 3. Retest required before continuing.',
    cancelText: 'Cancel',
    confirmText: 'Retest',
  },
  warning: {
    icon: <ExclamationCircleSolidIcon size={85} />,
    iconColor: 'var(--color-warning-40)',
    title: 'Connection Unstable',
    errorCode: 'Warning Code: 000000',
    subtext: 'Analyzer connection is unstable — readings may be inaccurate.',
    cancelText: 'Dismiss',
    confirmText: 'Continue',
  },
  info: {
    icon: <InformationCircleSolidIcon size={85} />,
    iconColor: 'var(--color-info-60)',
    title: 'Firmware Update Available',
    errorCode: 'Update ID: 000000',
    subtext: 'A new firmware update is ready to install for this test station.',
    cancelText: 'Later',
    confirmText: 'Install Now',
  },
};

const TYPOGRAPHY_STYLES = [
  { name: 'Subheading/28 Semibold', className: 'hmi-type-subheading-28-semibold' },
  { name: 'Subheading/24 Semi Bold', className: 'hmi-type-subheading-24-semibold' },
  { name: 'Subheading/20 Semi Bold', className: 'hmi-type-subheading-20-semibold' },
  { name: 'Subheading/20 Regular', className: 'hmi-type-subheading-20-regular' },
  { name: 'Subheading/18 Regular', className: 'hmi-type-subheading-18-regular' },
  { name: 'Body/16 Semi Bold', className: 'hmi-type-body-16-semibold' },
  { name: 'Body/16 Regular', className: 'hmi-type-body-16-regular' },
  { name: 'Body/15 Semi Bold', className: 'hmi-type-body-15-semibold' },
  { name: 'Body/15 Regular', className: 'hmi-type-body-15-regular' },
  { name: 'Body/14 Semi Bold', className: 'hmi-type-body-14-semibold' },
  { name: 'Body/14 Regular', className: 'hmi-type-body-14-regular' },
  { name: 'Body/12 Semi Bold', className: 'hmi-type-body-12-semibold' },
  { name: 'Body/12 Regular', className: 'hmi-type-body-12-regular' },
];

function Section({ title, children }) {
  return (
    <section className="gallery-section">
      <h2>{title}</h2>
      <div className="gallery-row">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <main className="gallery">
      <h1>HMI Design System — component prototype</h1>
      <p className="gallery-intro">
        A live, clickable version of the core components from the Figma HMI Design System.
        Built for prototyping and stakeholder review — not the production HMI, which will be
        rebuilt manually in EasyBuilder Pro.
      </p>

      <Section title="Typography">
        <div className="type-ramp">
          {TYPOGRAPHY_STYLES.map((style) => (
            <div className="type-ramp__row" key={style.name}>
              <span className="type-ramp__label">{style.name}</span>
              <span className={style.className}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <Button state="primary">Primary</Button>
        <Button state="secondary">Secondary</Button>
        <Button state="destructive">Destructive</Button>
        <Button state="primary" size="regular">Regular</Button>
        <Button state="primary" size="small">Small</Button>
        <Button state="primary" disabled>Disabled</Button>
        <Button state="primary" pressed>Pressed</Button>
      </Section>

      <Section title="Button Groups — wizard footer nav">
        <ButtonGroup variant="one" nextText="Continue" />
        <ButtonGroup variant="two" backText="Back" nextText="Next" />
        <ButtonGroup variant="three" cancelText="Cancel" backText="Back" nextText="Next" />
        <ButtonGroup variant="done" backText="Back" finishText="Finish" />
        <ButtonGroup variant="pages" backText="Back" nextText="Next" page={1} totalPages={7} />
      </Section>

      <Section title="Badges — general">
        <RectangleBadge state="default">Default</RectangleBadge>
        <RectangleBadge state="pending">Pending</RectangleBadge>
        <RectangleBadge state="success">Complete</RectangleBadge>
        <RectangleBadge state="error">Failed</RectangleBadge>
      </Section>

      <Section title="Badges — round status (Regular)">
        <RoundBadge state="running" />
        <RoundBadge state="pass" />
        <RoundBadge state="error" />
        <RoundBadge state="fail" />
        <RoundBadge state="stopped" />
      </Section>

      <Section title="Badges — round status (Small)">
        <RoundBadge state="running" size="small" />
        <RoundBadge state="pass" size="small" />
        <RoundBadge state="error" size="small" />
        <RoundBadge state="fail" size="small" />
        <RoundBadge state="stopped" size="small" />
      </Section>

      <Section title="Badges — test station">
        <TestTypeBadge testType="battery" status="normal" />
        <TestTypeBadge testType="hipot" status="normal" />
        <TestTypeBadge testType="analyzer" status="normal" />
        <TestTypeBadge testType="battery" status="error" />
        <TestTypeBadge testType="hipot" status="error" />
        <TestTypeBadge testType="analyzer" status="error" />
      </Section>

      <Section title="Status Bars — short">
        <StatusBar state="default" size="short" text="Label" />
        <StatusBar state="pending" size="short" text="Label" />
        <StatusBar state="success" size="short" text="Label" />
        <StatusBar state="error" size="short" text="Label" />
      </Section>

      <Section title="Status Bars — long">
        <StatusBar state="default" size="long" text="Label" />
        <StatusBar state="pending" size="long" text="Label" />
        <StatusBar state="success" size="long" text="Label" />
        <StatusBar state="error" size="long" text="Label" />
      </Section>

      <Section title="Status Dots">
        <StatusDot state="info" />
        <StatusDot state="success" />
        <StatusDot state="error" />
        <StatusDot state="warning" />
        <StatusDot state="idle" />
      </Section>

      <Section title="Status Labels">
        <StatusLabel state="info">Info</StatusLabel>
        <StatusLabel state="success">Success</StatusLabel>
        <StatusLabel state="error">Error</StatusLabel>
        <StatusLabel state="warning">Warning</StatusLabel>
        <StatusLabel state="idle">Idle</StatusLabel>
      </Section>

      <Section title="Status Cards — by label state">
        <StatusCard header="Header Text" state="info" status="Info" />
        <StatusCard header="Header Text" state="success" status="Success" />
        <StatusCard header="Header Text" state="error" status="Error" />
        <StatusCard header="Header Text" state="warning" status="Warning" />
        <StatusCard header="Header Text" state="idle" status="Idle" dot={false} />
      </Section>

      <Section title="Input Fields">
        <InputField state="default" />
        <InputField state="active" />
        <InputField state="error" descriptionText="This field is required" />
        <InputField state="disabled" />
      </Section>

      <Section title="Modal — icon instance-swap examples">
        {Object.values(MODAL_EXAMPLES).map((example) => (
          <Modal
            key={example.title}
            inline
            icon={<span style={{ color: example.iconColor }}>{example.icon}</span>}
            title={example.title}
            errorCode={example.errorCode}
            subtext={example.subtext}
            cancelText={example.cancelText}
            confirmText={example.confirmText}
          />
        ))}
      </Section>

      <Section title="Nav Items">
        <NavItem text="Navigation Text" selected />
        <NavItem text="Navigation Text" />
      </Section>

      <Section title="Nav Bar">
        <NavBar />
      </Section>

      <Section title="Page Progress">
        <PageProgress text="1. Page" active />
        <PageProgress text="1. Page" />
      </Section>

      <Section title="Page Progress Bar">
        <PageProgressBar />
      </Section>

      <Section title="Progress Bar">
        <ProgressBar state="success" />
        <ProgressBar state="warning" />
        <ProgressBar state="error" />
      </Section>

      <Section title="Cards">
        <Card size="large" header="Voltage" value="12.6 V" />
        <Card size="medium" header="Current" value="4.2 A" />
        <Card size="small" header="Temp" value="34°C" />
      </Section>

      <Section title="Alerts">
        <Alert type="error">A HiPot test failed on station 3. Retest required before continuing.</Alert>
        <Alert type="success">Battery test completed successfully.</Alert>
        <Alert type="warning">Analyzer connection is unstable — readings may be inaccurate.</Alert>
        <Alert type="informational">Firmware update available for this test station.</Alert>
      </Section>
    </main>
  );
}
