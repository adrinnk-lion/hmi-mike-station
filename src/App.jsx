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
import TableRow from './components/Table/TableRow';
import Table from './components/Table/Table';
import StationName from './components/StationName/StationName';
import PageText from './components/PageText/PageText';
import Card from './components/Card/Card';
import Foundations from './foundations/Foundations';
import { useState } from 'react';
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

const TABLE_EXAMPLES = {
  pass: {
    section: 'Battery 2',
    serialNumber: 'SN-1234567-891',
    status: 'pass',
    rows: [
      { time: '01:58:48', testType: 'battery', content: 'Test Details | 98% SOC' },
      { time: '01:57:37', testType: 'hipot', content: 'Test Passed' },
      { time: '01:54:20', testType: 'analyzer', content: 'Analyzer Complete | 91% SOC | 52.8 V' },
      { time: '01:52:10', testType: 'battery', content: 'Contacts Connected' },
    ],
  },
  fail: {
    section: 'Battery 1',
    serialNumber: 'SN-1234567-890',
    status: 'fail',
    rows: [
      { time: '01:49:48', testType: 'battery', content: 'Test Failed | Flagged for Review' },
      { time: '01:47:10', testType: 'hipot', testStatus: 'error', content: 'Discharge Failed' },
      { time: '01:45:02', testType: 'analyzer', content: 'Analyzer Complete | 91% SOC | 52.8 V' },
      { time: '01:42:33', testType: 'battery', content: 'Contacts Connected' },
    ],
  },
};

function Section({ title, children }) {
  return (
    <section className="gallery-section">
      <h2>{title}</h2>
      <div className="gallery-row">{children}</div>
    </section>
  );
}

export default function App() {
  const [view, setView] = useState('components');

  return (
    <>
      <header className="gallery-header">
        <h1>HMI Design System — component prototype</h1>
        <p className="gallery-intro">
          A live, clickable version of the core components from the Figma HMI Design System.
          Built for prototyping and stakeholder review — not the production HMI, which will be
          rebuilt manually in EasyBuilder Pro.
        </p>

        <nav className="gallery-tabs">
          <button
            type="button"
            className={`gallery-tabs__tab${view === 'components' ? ' gallery-tabs__tab--active' : ''}`}
            onClick={() => setView('components')}
          >
            Components
          </button>
          <button
            type="button"
            className={`gallery-tabs__tab${view === 'foundations' ? ' gallery-tabs__tab--active' : ''}`}
            onClick={() => setView('foundations')}
          >
            Foundations
          </button>
        </nav>
      </header>

      {view === 'foundations' ? (
        <Foundations />
      ) : (
      <main className="gallery">
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

      <Section title="Table Row">
        <TableRow variant="header" position="top" section="Section Header" serialNumber="SN-1234567-890" status="pass" />
        <TableRow variant="content" position="middle" time="01:58:10" testType="battery" content="Test Details |" />
        <TableRow variant="content" position="bottom" time="01:58:10" testType="battery" content="Test Details |" />
      </Section>

      <Section title="Table">
        <Table {...TABLE_EXAMPLES.pass} />
        <Table {...TABLE_EXAMPLES.fail} />
      </Section>

      <Section title="Station Name">
        <StationName />
      </Section>

      <Section title="Page Text — Page Title">
        <PageText variant="pageTitle" status="pass" title="Page Title" text="Page title text" />
        <PageText variant="pageTitle" status="fail" title="Page Title" text="Page title text" />
      </Section>

      <Section title="Page Text — Results">
        <PageText variant="results" status="pass" title="Page Title" />
        <PageText variant="results" status="fail" title="Page Title" />
      </Section>

      <Section title="Page Text — Section">
        <PageText variant="section" />
      </Section>

      <Section title="Cards">
        <Card size="large" header="Voltage" value="12.6 V" />
        <Card size="medium" header="Current" value="4.2 A" />
        <Card size="small" header="Temp" value="34°C" />
      </Section>
      </main>
      )}
    </>
  );
}
