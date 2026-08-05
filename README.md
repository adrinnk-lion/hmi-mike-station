# HMI Design System — component prototype

A clickable prototype of the core components from the HMI Design System Figma file:
buttons, badges (general + battery/HiPot/analyzer test-station badges), cards, and alerts.

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
  tokens/tokens.css       — design tokens as CSS variables, generated from the
                             real Figma variable values (colors, spacing)
  components/
    Button/                — State x Size x Pressed x Disabled
    Badge/                 — RectangleBadge (general) + TestTypeBadge (battery/HiPot/analyzer)
    Card/                  — Size variants
    Alert/                 — Error/Success/Warning/Informational
  icons/                   — PLACEHOLDER icons — see note below
  App.jsx                  — gallery showing every component + variant
```

## Known gaps to close

1. **Icons are placeholders.** The environment that generated this code couldn't
   reach Figma's asset-download servers, so the check/x/exclamation/info icons
   are simple hand-drawn stand-ins, not your real icon set. To fix: in Figma,
   right-click each icon layer → "Copy as" → "Copy as SVG", save it in
   `src/icons/`, and swap it into the matching component in `src/icons/index.jsx`.

2. **The large Card's 6px gap doesn't match the primitive spacing scale**
   (which goes 4px, 8px, ...). It's called out as a literal value with a comment
   in `Card.css` — worth deciding in Figma whether to add a `space_6` token or
   change the card to use the nearest existing value.

3. **Only two badge types are built** (Rectangle Badges, and the battery/HiPot/
   analyzer test badges). The file also has Round Badges and a Status Bar
   component set not yet ported — same pattern, just ask to add them.

4. **The Alert component's Figma variant value has a typo** (`"Warnin"` instead
   of `"Warning"`). The code uses the correct spelling (`warning`) — worth fixing
   the property value in Figma too so the two stay matched.

## Pushing to GitHub

This project is already a git repo with an initial commit. To push it to the
empty repo you created on GitHub:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

Replace `<your-username>/<your-repo-name>` with your actual repo path. If GitHub
asks for a password on push, use a
[personal access token](https://github.com/settings/tokens) instead of your
account password — GitHub stopped accepting account passwords for this.
