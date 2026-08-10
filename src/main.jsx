import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './tokens/tokens.css'
import './tokens/typography.css'
import RootLayout from './RootLayout.jsx'
import App from './App.jsx'
import Login from './screens/TechView/Login'
import ScanSerialNumber from './screens/TechView/ScanSerialNumber'
import LoadBattery from './screens/TechView/LoadBattery'
import BatteryAnalyzerTest from './screens/TechView/BatteryAnalyzerTest'
import HipotTest from './screens/TechView/HipotTest'
import TestPass from './screens/TechView/TestPass'
import TestFail from './screens/TechView/TestFail'
import UploadLoading from './screens/TechView/UploadLoading'
import UploadSuccess from './screens/TechView/UploadSuccess'
import UploadFail from './screens/TechView/UploadFail'
import CallEngineer from './screens/TechView/CallEngineer'
import EngineerAccess from './screens/SystemDetails/EngineerAccess'
import SystemDetails from './screens/SystemDetails/SystemDetails'
import EventLog from './screens/SystemDetails/EventLog'
import { TECH_VIEW_ROUTES } from './screens/TechView/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path={TECH_VIEW_ROUTES.login} element={<Login />} />
          <Route path={TECH_VIEW_ROUTES.scanSerialNumber} element={<ScanSerialNumber />} />
          <Route path={TECH_VIEW_ROUTES.loadBattery} element={<LoadBattery />} />
          <Route path={TECH_VIEW_ROUTES.batteryAnalyzerTest} element={<BatteryAnalyzerTest />} />
          <Route path={TECH_VIEW_ROUTES.hipotTest} element={<HipotTest />} />
          <Route path={TECH_VIEW_ROUTES.testPass} element={<TestPass />} />
          <Route path={TECH_VIEW_ROUTES.testFail} element={<TestFail />} />
          <Route path={TECH_VIEW_ROUTES.uploadLoading} element={<UploadLoading />} />
          <Route path={TECH_VIEW_ROUTES.uploadSuccess} element={<UploadSuccess />} />
          <Route path={TECH_VIEW_ROUTES.uploadFail} element={<UploadFail />} />
          <Route path={TECH_VIEW_ROUTES.callEngineer} element={<CallEngineer />} />
          <Route path={TECH_VIEW_ROUTES.engineerAccess} element={<EngineerAccess />} />
          <Route path={TECH_VIEW_ROUTES.systemDetails} element={<SystemDetails />} />
          <Route path={TECH_VIEW_ROUTES.eventLog} element={<EventLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
