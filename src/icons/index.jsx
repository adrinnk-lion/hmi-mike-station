/*
  PLACEHOLDER ICONS.
  These are simple stand-ins, not your real Figma icon assets — the sandbox that
  built this couldn't reach Figma's asset-download servers. To swap in the real
  ones: in Figma, right-click each icon layer > "Copy as" > "Copy as SVG", save
  it under src/icons/ (e.g. check.svg), and replace the matching component below
  with an <img src="./check.svg" /> or an inline copy of the real markup.
*/

export function CheckIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ExclamationCircleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function ExclamationTriangleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4l9 16H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function InfoCircleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma assets (Icon/Solid/check, Icon/Solid/x), exported from the
  Rectangle Badges component. Sized as a 25x25 box per the design's icon
  container, with the glyph filling it per Figma's inset (70%x50% for the
  check, 60%x60% for the x) — fill uses currentColor to inherit the badge's
  text color, matching the rest of this file's icon components.
*/
export function CheckSolidIcon({ size = 25 }) {
  return (
    <svg width={size * 0.7} height={size * 0.5} viewBox="0 0 17.5 12.5" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1339 0.366117C17.622 0.854272 17.622 1.64573 17.1339 2.13388L7.13388 12.1339C6.64573 12.622 5.85427 12.622 5.36612 12.1339L0.366117 7.13388C-0.122039 6.64573 -0.122039 5.85427 0.366117 5.36612C0.854272 4.87796 1.64573 4.87796 2.13388 5.36612L6.25 9.48223L15.3661 0.366117C15.8543 -0.122039 16.6457 -0.122039 17.1339 0.366117Z" fill="currentColor" />
    </svg>
  );
}

export function XSolidIcon({ size = 25 }) {
  return (
    <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.366117 0.366117C0.854272 -0.122039 1.64573 -0.122039 2.13388 0.366117L7.5 5.73223L12.8661 0.366117C13.3543 -0.122039 14.1457 -0.122039 14.6339 0.366117C15.122 0.854272 15.122 1.64573 14.6339 2.13388L9.26777 7.5L14.6339 12.8661C15.122 13.3543 15.122 14.1457 14.6339 14.6339C14.1457 15.122 13.3543 15.122 12.8661 14.6339L7.5 9.26777L2.13388 14.6339C1.64573 15.122 0.854272 15.122 0.366117 14.6339C-0.122039 14.1457 -0.122039 13.3543 0.366117 12.8661L5.73223 7.5L0.366117 2.13388C-0.122039 1.64573 -0.122039 0.854272 0.366117 0.366117Z" fill="currentColor" />
    </svg>
  );
}
