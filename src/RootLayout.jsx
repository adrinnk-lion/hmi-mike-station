import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import './RootLayout.css';

/**
 * RootLayout — wraps every route with the global TopNav (Design
 * System / Prototype) so it stays visible no matter how deep you are
 * in either side.
 */
export default function RootLayout() {
  return (
    <div className="root-layout">
      <TopNav />
      <div className="root-layout__body">
        <Outlet />
      </div>
    </div>
  );
}
