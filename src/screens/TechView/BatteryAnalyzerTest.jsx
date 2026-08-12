import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RoundBadge from '../../components/Badge/RoundBadge';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './BatteryAnalyzerTest.css';

/** Wall-clock length of the simulated run — short enough to demo. */
const RUN_MS = 10000;
const TICK_MS = 100;

/*
  The readings are tuned so the run passes through the values in the Figma
  design at 62% (84% SOC, 52.4 V, 4.9 A, 01:42) and finishes on the ones the
  Test Results screen reports (91% SOC, 52.4 V). The test it represents takes
  02:45, so elapsed time is scaled to that rather than the 10s demo length.
*/
const TEST_SECONDS = 165;
const SOC_START = 73;
const SOC_END = 91;
const VOLTAGE = 52.4;
const CURRENT = 4.9;

function formatElapsed(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

/*
  Wobble is a sine of elapsed time, not a random jitter — it reads like a live
  sensor rather than noise, and stays stable across re-renders.
*/
function readingsAt(elapsedMs, complete) {
  if (complete) {
    return {
      soc: `${SOC_END}%`,
      voltage: `${VOLTAGE.toFixed(1)} V`,
      current: `${CURRENT.toFixed(1)} A`,
      elapsed: formatElapsed(TEST_SECONDS),
    };
  }
  const progress = elapsedMs / RUN_MS;
  return {
    soc: `${Math.round(SOC_START + (SOC_END - SOC_START) * progress)}%`,
    voltage: `${(VOLTAGE + 0.28 * Math.sin(elapsedMs / 260)).toFixed(1)} V`,
    current: `${(CURRENT + 0.4 * Math.sin(elapsedMs / 190 + 1.1)).toFixed(1)} A`,
    elapsed: formatElapsed(Math.round(progress * TEST_SECONDS)),
  };
}

export default function BatteryAnalyzerTest() {
  const navigate = useNavigate();
  const [elapsedMs, setElapsedMs] = useState(0);

  const percent = Math.min(100, Math.round((elapsedMs / RUN_MS) * 100));
  const complete = elapsedMs >= RUN_MS;

  /* Runs on arrival — you get here by pressing Start Test, so it's underway. */
  useEffect(() => {
    if (complete) return;
    const timer = setInterval(() => {
      setElapsedMs((ms) => Math.min(ms + TICK_MS, RUN_MS));
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [complete]);

  const readings = readingsAt(elapsedMs, complete);

  return (
    <TechViewShell>
      <TechViewProgress currentStep={1} />
      <div className="tv-analyzer">
        <PageText
          variant="pageTitle"
          title="Battery Analyzer Test"
          text={complete ? 'Status: Test Complete' : `Status: ${percent}% Complete`}
          className="tv-analyzer__title"
        />
        <div className="tv-row tv-row--gap-12 tv-analyzer__meter">
          <ProgressBar state="success" percent={percent} />
          <RoundBadge state={complete ? 'pass' : 'running'} size="small" />
        </div>
        <div className="tv-cards-grid tv-analyzer__cards">
          <Card size="large" header="SOC" value={readings.soc} />
          <Card size="large" header="Voltage" value={readings.voltage} />
          <Card size="large" header="Current" value={readings.current} />
          <Card size="large" header="Time Elapsed" value={readings.elapsed} />
        </div>
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          <Button state="destructive" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.emergencyStop)}>
            Stop Test
          </Button>
          <div className="tv-row tv-row--gap-12">
            <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.loadBattery)}>
              Back
            </Button>
            <Button size="regular" disabled={!complete} onClick={() => navigate(TECH_VIEW_ROUTES.hipotTest)}>
              Start HiPot Test
            </Button>
          </div>
        </div>
      </div>
    </TechViewShell>
  );
}
