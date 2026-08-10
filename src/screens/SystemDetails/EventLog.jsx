import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechViewShell from '../TechView/TechViewShell';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import { TECH_VIEW_ROUTES } from '../TechView/routes';
import '../TechView/TechViewScreens.css';
import './SystemDetails.css';

const PAGES = [
  {
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
  {
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
];

export default function EventLog() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  return (
    <TechViewShell activeNavIndex={1} onLogOut={() => navigate(TECH_VIEW_ROUTES.login)}>
      <div className="tv-block tv-block--gap-2">
        <p className="hmi-type-body-15-semibold tv-label">EVENT LOG</p>
        <p className="hmi-type-body-14-regular tv-label tv-event-log__date">June 1st, 2026 | Monday</p>
      </div>
      <div className="tv-event-log__table">
        <Table {...PAGES[page]} />
      </div>
      <div className="tv-screen__footer">
        <div className="tv-footer tv-footer--between">
          {page === 0 ? (
            <Button state="secondary" size="regular" onClick={() => navigate(TECH_VIEW_ROUTES.systemDetails)}>
              System Details
            </Button>
          ) : (
            <Button state="secondary" size="regular" onClick={() => setPage(0)}>
              Back
            </Button>
          )}
          <p className="hmi-type-body-16-regular tv-label tv-event-log__page-text">Page {page + 1}/{PAGES.length}</p>
          <Button size="regular" onClick={() => page < PAGES.length - 1 && setPage(page + 1)}>
            Next
          </Button>
        </div>
      </div>
    </TechViewShell>
  );
}
