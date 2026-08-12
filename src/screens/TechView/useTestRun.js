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

/*
  Where each test's progress lives, so revisiting a screen mid-session shows the
  run as you left it instead of restarting it. Module scope rather than state
  lifted into a provider: it needs to outlive the screens, not be shared with
  them, and a page reload clearing it is the right session boundary.
*/
const runs = new Map();

/** Called when a battery is done with, so the next one tests from scratch. */
export function resetTestRuns() {
  runs.clear();
}

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
 * Drives a simulated test run, ticking from 0 up to a target percentage — 100
 * for a test that passes, less for one that fails partway. Starts on mount,
 * since you reach these screens by starting the test, unless `id` already has a
 * run recorded this session, in which case it resumes exactly where it was.
 *
 * `stopAtPercent` sets the target for a *fresh* run; `restart` can override it,
 * which is how a failing test is re-run to completion.
 */
export default function useTestRun({ id, stopAtPercent = 100 } = {}) {
  const [run, setRun] = useState(() => runs.get(id) ?? { elapsedMs: 0, stopAtPercent });

  useEffect(() => {
    runs.set(id, run);
  }, [id, run]);

  const targetMs = RUN_MS * (run.stopAtPercent / 100);
  const percent = Math.min(run.stopAtPercent, Math.round((run.elapsedMs / RUN_MS) * 100));
  const finished = run.elapsedMs >= targetMs;

  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setRun((prev) => ({
        ...prev,
        elapsedMs: Math.min(prev.elapsedMs + TICK_MS, RUN_MS * (prev.stopAtPercent / 100)),
      }));
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [finished]);

  return {
    percent,
    finished,
    readings: readingsAt(run.elapsedMs, { settled: finished }),
    restart: ({ stopAtPercent: nextTarget } = {}) =>
      setRun((prev) => ({ elapsedMs: 0, stopAtPercent: nextTarget ?? prev.stopAtPercent })),
  };
}
