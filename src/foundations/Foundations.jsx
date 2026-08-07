import { useState } from 'react';
import Colors from './Colors/Colors';
import Typography from './Typography/Typography';
import './Foundations.css';

const PAGES = {
  colors: { label: 'Colors', Component: Colors },
  typography: { label: 'Fonts and Sizes', Component: Typography },
};

export default function Foundations() {
  const [page, setPage] = useState('colors');
  const { Component } = PAGES[page];

  return (
    <div>
      <nav className="foundations-subnav">
        {Object.entries(PAGES).map(([key, { label }]) => (
          <button
            key={key}
            type="button"
            className={`foundations-subnav__tab${page === key ? ' foundations-subnav__tab--active' : ''}`}
            onClick={() => setPage(key)}
          >
            {label}
          </button>
        ))}
      </nav>
      <Component />
    </div>
  );
}
