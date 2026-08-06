import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import RectangleBadge from './components/Badge/RectangleBadge';
import RoundBadge from './components/Badge/RoundBadge';
import TestTypeBadge from './components/Badge/TestTypeBadge';
import StatusBar from './components/StatusBar/StatusBar';
import StatusDot from './components/StatusIndicator/StatusDot';
import StatusLabel from './components/StatusIndicator/StatusLabel';
import StatusCard from './components/StatusIndicator/StatusCard';
import Card from './components/Card/Card';
import Alert from './components/Alert/Alert';
import './App.css';

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
