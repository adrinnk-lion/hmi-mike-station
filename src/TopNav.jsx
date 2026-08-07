import { Link, useLocation } from 'react-router-dom';
import { TECH_VIEW_ROUTES } from './screens/TechView/routes';
import './TopNav.css';

/**
 * TopNav — the app's outermost switcher between the two things this repo
 * holds: the Design System (Components/Foundations gallery, at "/") and
 * the Prototype (the Tech View screens flow, under "/screens/*").
 */
export default function TopNav() {
  const location = useLocation();
  const isPrototype = location.pathname.startsWith('/screens');

  return (
    <nav className="top-nav">
      <Link to="/" className={`top-nav__tab${!isPrototype ? ' top-nav__tab--active' : ''}`}>
        Design System
      </Link>
      <Link to={TECH_VIEW_ROUTES.login} className={`top-nav__tab${isPrototype ? ' top-nav__tab--active' : ''}`}>
        Prototype
      </Link>
    </nav>
  );
}
