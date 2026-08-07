# HMI Design System — component prototype

A clickable prototype of the HMI Design System Figma file: buttons, button groups,
badges, status bars/indicators, input fields, modals, navigation, page progress,
progress bars, tables, and page text modules — plus a Foundations tab covering
colors and typography, and a Tech View flow of real, routable screens built from
the [Mike Battery Testing Station](https://www.figma.com/design/JihFS32IWQw3SMTtH2J1gK/Mike-Battery-Testing-Station)
Figma file.

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
  TopNav.jsx                 — the outermost switcher: "Design System" (/) vs
                               "Prototype" (/screens/*), visible on every page
  RootLayout.jsx             — wraps every route in TopNav via <Outlet />
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
  screens/
    TechView/                — the Log In → Scan Serial → Load Battery →
                               Analyzer → HiPot → Pass/Fail → Upload flow,
                               one file per screen, each routable on its own
                               and composed entirely from src/components —
                               no new component variants were added here.
                               TechViewShell (nav sidebar + fixed 800x480
                               canvas matching the device's real resolution)
                               and TechViewProgress (cumulative step pills)
                               are the two shared layout helpers; routes.js
                               holds every screen's path.
  icons/                     — real solid/outline icons exported from Figma,
                               named by shape (see note below)
  App.jsx                    — the Design System page: Components/Foundations
                               sub-tab switcher; Components tab is the
                               gallery of every component + variant
```

Routing uses [react-router-dom](https://reactrouter.com/), set up once in
`src/main.jsx`. TopNav sits above every route and only switches between two
places: the Design System (`App.jsx`, at `/`) and the Prototype (the Tech
View flow, under `/screens/...` — see `src/screens/TechView/routes.js`).
Every screen has its own real URL, so any screen can be linked to directly
and each button navigates to a real route rather than just swapping local
state — refresh, back/forward, and bookmarking all work as expected.

A couple of screen-flow decisions worth knowing about, since the source
Figma frames didn't specify a branch trigger:
- The HiPot Test screen's "Next" always continues to the Pass outcome.
  Test Fail is fully built and still reachable directly at
  `/screens/test-fail`, just not linked from the primary flow.
- "Stop Test" (Analyzer/HiPot) and both "Log Out" nav items return to
  Log In, treated as a full session reset.
- "Review Results" on the Upload Success/Fail screens goes back to the
  Test Pass screen; on Test Fail itself it's left unwired (ambiguous
  target in the source design).

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
