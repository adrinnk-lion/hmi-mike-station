import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RoundBadge from '../../components/Badge/RoundBadge';
import StatusBar from '../../components/StatusBar/StatusBar';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import useTestRun from './useTestRun';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './HipotTest.css';

/** Where the discharge stage gives out — the failure the Figma design shows. */
const FAIL_PERCENT = 62;

/*
  The four stages, each claiming a slice of the run. `endState` is what the bar
  becomes once its slice is done, so Discharge is where the run dies. Complete
  never starts, because the run stops before reaching it.
*/
const STAGES = [
  { text: 'Ramp', startsAt: 0, doneAt: 20, endState: 'success' },
  { text: 'Hold', startsAt: 20, doneAt: 45, endState: 'success' },
  { text: 'Discharge', startsAt: 45, doneAt: FAIL_PERCENT, endState: 'error' },
  { text: 'Complete', startsAt: 100, doneAt: 100, endState: 'success' },
];

function stageState(stage, percent) {
  if (percent >= stage.doneAt) return stage.endState;
  if (percent >= stage.startsAt) return 'pending';
  return 'default';
}

export default function HipotTest() {
  const navigate = useNavigate();
  const { percent, finished, readings, restart } = useTestRun({ stopAtPercent: FAIL_PERCENT });

  /* The run tops out at the failure point, so it never passes — Next stays
     locked. Expressed against 100 so it unlocks on its own if the test is ever
     made to complete. */
  const passed = percent >= 100;
  const failed = finished;

  return (
    <TechViewShell>
      <TechViewProgress currentStep={2} />
      <div className="tv-hipot">
        <PageText
          variant="pageTitle"
          title="HiPot Test"
          text={`Status: ${percent}% Complete`}
          className="tv-hipot__title"
        />
        <div className="tv-row tv-row--gap-12 tv-hipot__meter">
          <ProgressBar state={failed ? 'warning' : 'success'} percent={percent} />
          <RoundBadge state={failed ? 'error' : 'running'} size="small" />
        </div>
        <div className="tv-row tv-row--top tv-hipot__body">
          <div className="tv-block tv-block--gap-12 tv-hipot__testbars">
            {STAGES.map((stage) => {
              const state = stageState(stage, percent);
              return (
                <StatusBar
                  key={stage.text}
                  state={state}
                  text={stage.text}
                  button={state === 'error'}
                  buttonText="Test Again"
                  onButtonClick={restart}
                />
              );
            })}
          </div>
          <div className="tv-cards-column">
            <Card size="medium" header="SOC" value={readings.soc} />
            <Card size="medium" header="Voltage" value={readings.voltage} />
            <Card size="medium" header="Current" value={readings.current} />
          </div>
        </div>
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          <Button state="destructive" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.emergencyStop)}>
            Stop Test
          </Button>
          <div className="tv-row tv-row--gap-12">
            <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.batteryAnalyzerTest)}>
              Back
            </Button>
            <Button size="regular" disabled={!passed} onClick={() => navigate(TECH_VIEW_ROUTES.testPass)}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </TechViewShell>
  );
}
