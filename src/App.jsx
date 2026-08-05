import Button from './components/Button/Button';
import RectangleBadge from './components/Badge/RectangleBadge';
import TestTypeBadge from './components/Badge/TestTypeBadge';
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

      <Section title="Badges — general">
        <RectangleBadge state="default">Default</RectangleBadge>
        <RectangleBadge state="pending">Pending</RectangleBadge>
        <RectangleBadge state="success">Complete</RectangleBadge>
        <RectangleBadge state="error">Failed</RectangleBadge>
      </Section>

      <Section title="Badges — test station">
        <TestTypeBadge testType="battery" status="normal" />
        <TestTypeBadge testType="hipot" status="normal" />
        <TestTypeBadge testType="analyzer" status="normal" />
        <TestTypeBadge testType="battery" status="error" />
        <TestTypeBadge testType="hipot" status="error" />
        <TestTypeBadge testType="analyzer" status="error" />
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
