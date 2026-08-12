import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from './TechViewShell';
import TechViewProgress from './TechViewProgress';
import PageText from '../../components/PageText/PageText';
import RectangleBadge from '../../components/Badge/RectangleBadge';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import ScanRig, { BatteryPack } from './ScanRig';
import useDragToScan from './useDragToScan';
import { TECH_VIEW_ROUTES } from './routes';
import './TechViewScreens.css';
import './LoadBattery.css';

/** Matches the pack scanned on the previous screen. */
const BATTERY_SERIAL = 'SN-1234567-890';

const STEPS = ['Battery Loaded', 'Contacts Connected', 'Door Closed'];
/** Each step takes two stages (grey, then green), so 3 steps = 6 stages. */
const FINAL_STAGE = STEPS.length * 2;
const STAGE_MS = 550;

/*
  White before the step starts, grey while it's working, green once it's done —
  which is exactly RectangleBadge's default / pending / success.
*/
function stepState(index, stage) {
  if (stage >= index * 2 + 2) return 'success';
  if (stage >= index * 2 + 1) return 'pending';
  return 'default';
}

export default function LoadBattery() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);

  const load = useDragToScan({
    onScan: () => setStage(1),
    busyMs: 0,          // the station reacts as soon as the pack is seated
    lockOnDrop: true,   // and the pack stays in the bay
  });

  /* Walks the statuses forward one stage at a time until everything is green. */
  useEffect(() => {
    if (stage === 0 || stage >= FINAL_STAGE) return;
    const timer = setTimeout(() => setStage((s) => s + 1), STAGE_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  const loaded = stage >= FINAL_STAGE;
  const hint = loaded
    ? 'Battery loaded — press Start Test'
    : stage > 0
      ? 'Loading…'
      : 'Drag the battery into the station bay';

  const rig = (
    <ScanRig hint={hint}>
      <BatteryPack
        ref={load.dragRef}
        draggable
        dragging={load.dragging}
        locked={load.locked}
        serial={BATTERY_SERIAL}
        style={load.dragStyle}
        aria-label={`Battery pack ${BATTERY_SERIAL} — drag into the station bay to load it`}
        {...load.dragHandlers}
      />
      <div
        ref={load.targetRef}
        className={`tv-bay${load.armed ? ' tv-bay--armed' : ''}${load.locked ? ' tv-bay--filled' : ''}`}
      >
        <span className="tv-bay__label">Station Bay</span>
      </div>
    </ScanRig>
  );

  return (
    <TechViewShell rig={rig}>
      <TechViewProgress currentStep={0} />
      <div className="tv-block tv-block--gap-40 tv-mt-40">
        <PageText
          variant="pageTitle"
          title="Load Battery"
          text="Push battery fully into station until battery is connected. Then close door to start test."
        />
        <div className="tv-block tv-block--gap-8">
          <p className="hmi-type-body-16-semibold tv-label">Status:</p>
          <div className="tv-row tv-row--gap-16">
            {STEPS.map((label, index) => (
              <RectangleBadge key={label} state={stepState(index, stage)}>
                {label}
              </RectangleBadge>
            ))}
          </div>
        </div>
      </div>
      <div className="tv-screen__footer">
        <ButtonGroup
          variant="two"
          backText="Back"
          nextText="Start Test"
          nextDisabled={!loaded}
          onBack={() => navigate(TECH_VIEW_ROUTES.scanSerialNumber)}
          onNext={() => navigate(TECH_VIEW_ROUTES.batteryAnalyzerTest)}
        />
      </div>
    </TechViewShell>
  );
}
