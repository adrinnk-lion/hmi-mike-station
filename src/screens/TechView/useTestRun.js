import { useEffect, useState } from 'react';

/** Wall-clock length of a full simulated run — short enough to demo. */
export const RUN_MS = 10000;
const TICK_MS = 100;

/*
  The readings are tuned so a run passes through the values in the Figma
  designs at 62% (84% SOC, 52.4 V, 4.9 A, 01:42 — what HiPot Test shows when it
  fails) and finishes on the ones Test Results reports (91% SOC, 52.4 V). The
  test being represented takes 02:45, so elapsed time is scaled to that rather
  than the 10s demo length.
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

/**
 * Instrument readings at a point in the run.
 *
 * Wobble is a sine of elapsed time, not a random jitter — it reads like a live
 * sensor rather than noise, and stays stable across re-renders. `settled` drops
 * the wobble so a stopped test rests on the exact curve value, which is what
 * makes the numbers land on the design's.
 */
export function readingsAt(elapsedMs, { settled = false } = {}) {
  const progress = Math.min(1, elapsedMs / RUN_MS);
  return {
    soc: `${Math.round(SOC_START + (SOC_END - SOC_START) * progress)}%`,
    voltage: `${(VOLTAGE + (settled ? 0 : 0.28 * Math.sin(elapsedMs / 260))).toFixed(1)} V`,
    current: `${(CURRENT + (settled ? 0 : 0.4 * Math.sin(elapsedMs / 190 + 1.1))).toFixed(1)} A`,
    elapsed: formatElapsed(Math.round(progress * TEST_SECONDS)),
  };
}

/**
 * Drives a simulated test run, ticking from 0 up to `stopAtPercent` — 100 for a
 * test that passes, less for one that fails partway. Starts on mount, since you
 * reach these screens by starting the test.
 */
export default function useTestRun({ stopAtPercent = 100 } = {}) {
  const [elapsedMs, setElapsedMs] = useState(0);

  const stopAtMs = RUN_MS * (stopAtPercent / 100);
  const percent = Math.min(stopAtPercent, Math.round((elapsedMs / RUN_MS) * 100));
  const finished = elapsedMs >= stopAtMs;

  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setElapsedMs((ms) => Math.min(ms + TICK_MS, stopAtMs));
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [finished, stopAtMs]);

  return {
    percent,
    finished,
    readings: readingsAt(elapsedMs, { settled: finished }),
    restart: () => setElapsedMs(0),
  };
}
