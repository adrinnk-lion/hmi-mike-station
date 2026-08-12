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

/** Where the discharge stage gives out on the first attempt — the failure the Figma design shows. */
const FAIL_PERCENT = 62;

/*
  The four stages, each claiming a slice of the run. On the attempt that fails,
  the run stops mid-Discharge, so Discharge is the stage left unfinished and
  Complete never starts.
*/
const STAGES = [
  { text: 'Ramp', startsAt: 0, doneAt: 20 },
  { text: 'Hold', startsAt: 20, doneAt: 45 },
  { text: 'Discharge', startsAt: 45, doneAt: 75 },
  { text: 'Complete', startsAt: 75, doneAt: 100 },
];

function stageState(stage, percent, failed) {
  if (percent >= stage.doneAt) return 'success';
  /* Whichever stage the run died in is the one that reports the error. */
  if (percent >= stage.startsAt) return failed ? 'error' : 'pending';
  return 'default';
}

export default function HipotTest() {
  const navigate = useNavigate();

  /* First attempt gives out partway; Test Again re-runs it clean to the end. */
  const { percent, finished, readings, restart } = useTestRun({
    id: 'hipot',
    stopAtPercent: FAIL_PERCENT,
  });

  const passed = percent >= 100;
  const failed = finished && !passed;

  /*
    Re-runs just the stage that gave out, rewinding to where that stage began so
    the ones already signed off aren't repeated, then carries on to the end.
  */
  const retryStage = (stage) => restart({ fromPercent: stage.startsAt, stopAtPercent: 100 });

  return (
    <TechViewShell>
      <TechViewProgress currentStep={2} />
      <div className="tv-hipot">
        <PageText
          variant="pageTitle"
          title="HiPot Test"
          text={passed ? 'Status: Test Complete' : `Status: ${percent}% Complete`}
          className="tv-hipot__title"
        />
        <div className="tv-row tv-row--gap-12 tv-hipot__meter">
          <ProgressBar state={failed ? 'warning' : 'success'} percent={percent} />
          <RoundBadge state={failed ? 'error' : passed ? 'pass' : 'running'} size="small" />
        </div>
        <div className="tv-row tv-row--top tv-hipot__body">
          <div className="tv-block tv-block--gap-12 tv-hipot__testbars">
            {STAGES.map((stage) => {
              const state = stageState(stage, percent, failed);
              return (
                <StatusBar
                  key={stage.text}
                  state={state}
                  text={stage.text}
                  button={state === 'error'}
                  buttonText="Test Again"
                  onButtonClick={() => retryStage(stage)}
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
