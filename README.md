# HMI Design System — component prototype

A clickable prototype of the HMI Design System Figma file: buttons, button groups,
badges, status bars/indicators, input fields, modals, navigation, page progress,
progress bars, tables, and page text modules — plus a Foundations tab covering
colors and typography.

**This is a prototyping tool, not production code.** The actual HMI will be rebuilt
manually in EasyBuilder Pro — this exists so flows and interactions can be validated
and shown to stakeholders before that manual rebuild happens.

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (any recent version).

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## What's here

```
src/
  tokens/
    tokens.css              — design tokens as CSS variables, pulled from the real
                               Figma variable values (colors, spacing)
    typography.css           — every text style used across components and the
                               Foundations > Fonts and Sizes page
  components/
    Button/                 — State x Size x Pressed x Disabled, real :active state
    ButtonGroup/             — wizard footer nav (5 layout variants)
    Badge/
      RectangleBadge         — Default/Pending/Success/Error
      RoundBadge             — status pills (Running/Pass/Error/Fail/Stopped)
      TestTypeBadge          — battery/HiPot/analyzer test-station badges
    StatusBar/               — Default/Pending/Success/Error, short/long
    StatusIndicator/         — StatusDot, StatusLabel, StatusCard
    InputField/              — real text input: Default/Active/Error/Disabled
    Modal/                   — overlay or inline dialog, icon instance-swap
    NavBar/                  — NavLogo, NavItem (clickable), NavBar
    PageProgress/            — pressable step pills + PageProgressBar
    ProgressBar/             — Success/Warning/Error fill states
    Table/                   — TableRow (single row) + Table (composes rows)
    StationName/             — lion + title lockup (bigger than NavLogo)
    PageText/                — Page Title / Results / Section text modules
    Card/                    — Size variants
  foundations/
    Foundations.jsx          — Colors / Fonts and Sizes sub-nav
    FoundationsBanner.jsx    — shared "Foundations" title banner
    Colors/                  — Neutral, Brand, and Semantic
                               (Success/Info/Warning/Error) swatches
    Typography/              — the real "Fonts and Sizes" type-ramp table
                               (Size / Line Height / Weight)
  icons/                     — real solid/outline icons exported from Figma,
                               named by shape (see note below)
  App.jsx                    — Components/Foundations tab switcher; Components
                               tab is the gallery of every component + variant
```

## Pushing to GitHub

This repo is already pushed to
[adrinnk-lion/hmi-mike-station](https://github.com/adrinnk-lion/hmi-mike-station).
To push further changes:

```bash
git push origin main
```

If GitHub asks for a password on push, use a
[personal access token](https://github.com/settings/tokens) instead of your
account password — GitHub stopped accepting account passwords for this.
