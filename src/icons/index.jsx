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
    <svg width={size * 0.7} height={size * 0.5} viewBox="0 0 17.5 12.5" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1339 0.366117C17.622 0.854272 17.622 1.64573 17.1339 2.13388L7.13388 12.1339C6.64573 12.622 5.85427 12.622 5.36612 12.1339L0.366117 7.13388C-0.122039 6.64573 -0.122039 5.85427 0.366117 5.36612C0.854272 4.87796 1.64573 4.87796 2.13388 5.36612L6.25 9.48223L15.3661 0.366117C15.8543 -0.122039 16.6457 -0.122039 17.1339 0.366117Z" fill="currentColor" />
    </svg>
  );
}

export function XSolidIcon({ size = 25 }) {
  return (
    <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 15 15" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.366117 0.366117C0.854272 -0.122039 1.64573 -0.122039 2.13388 0.366117L7.5 5.73223L12.8661 0.366117C13.3543 -0.122039 14.1457 -0.122039 14.6339 0.366117C15.122 0.854272 15.122 1.64573 14.6339 2.13388L9.26777 7.5L14.6339 12.8661C15.122 13.3543 15.122 14.1457 14.6339 14.6339C14.1457 15.122 13.3543 15.122 12.8661 14.6339L7.5 9.26777L2.13388 14.6339C1.64573 15.122 0.854272 15.122 0.366117 14.6339C-0.122039 14.1457 -0.122039 13.3543 0.366117 12.8661L5.73223 7.5L0.366117 2.13388C-0.122039 1.64573 -0.122039 0.854272 0.366117 0.366117Z" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma asset (Icon/Solid/user), exported from the Input Field
  component's left icon. Box is 20x20 per the design's icon container,
  with the glyph filling it per Figma's inset (62.8%x75.94%).
*/
export function UserSolidIcon({ size = 20 }) {
  return (
    <svg width={size * 0.628} height={size * 0.7594} viewBox="0 0 12.5586 15.1868" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path d="M7.72804 6.87271C10.3958 6.87271 12.5586 9.01048 12.5586 11.6473V13.2772C12.5585 14.3318 11.6936 15.1868 10.6266 15.1868H1.93201C0.865028 15.1867 9.12092e-05 14.3318 0 13.2772V11.6473C0 9.01048 2.16284 6.87271 4.83055 6.87271H7.72804Z" fill="currentColor" />
      <path d="M6.28141 0C7.93467 0 9.27534 1.32513 9.27534 2.95922C9.2751 4.5931 7.93452 5.91738 6.28141 5.91738C4.62842 5.91726 3.28879 4.59302 3.28855 2.95922C3.28855 1.32521 4.62827 0.000127425 6.28141 0Z" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma asset (Icon/Solid/exclamation), exported from the Modal
  component's default icon slot. Box is 85x85 per the design's icon
  container, with the glyph filling it per Figma's inset (top 10.4%,
  right/left 12.08%, bottom 20%) — fill uses currentColor like the rest
  of this file's solid icons.
*/
export function ExclamationTriangleSolidIcon({ size = 85 }) {
  return (
    <svg width={size * 0.7584} height={size * 0.696} viewBox="0 0 64.4573 59.1623" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.8203 4.33278C28.0699 -1.44426 36.3875 -1.44426 39.6371 4.33278L63.3534 46.4951C66.5406 52.1612 62.446 59.1623 55.945 59.1623H8.51238C2.01135 59.1623 -2.08322 52.1612 1.10398 46.4951L24.8203 4.33278ZM36.4783 46.4128C36.4783 48.76 34.5755 50.6628 32.2283 50.6628C29.8811 50.6628 27.9783 48.76 27.9783 46.4128C27.9783 44.0656 29.8811 42.1628 32.2283 42.1628C34.5755 42.1628 36.4783 44.0656 36.4783 46.4128ZM32.2283 12.4128C29.8811 12.4128 27.9783 14.3156 27.9783 16.6628V29.4128C27.9783 31.76 29.8811 33.6628 32.2283 33.6628C34.5755 33.6628 36.4783 31.76 36.4783 29.4128V16.6628C36.4783 14.3156 34.5755 12.4128 32.2283 12.4128Z" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma assets (Icon/Solid/information, x-circle, check-circle,
  exclamation-circle), exported from the icon library. Each is a 24px box
  with a circular glyph filling it per Figma's inset — 8.33% for the
  information icon (visible size = box * 0.8334, matching its 20x20
  natural size) and 10% for the three circle icons (visible size =
  box * 0.8, matching their 19.2x19.2 natural size). Fill uses currentColor
  like the rest of this file's solid icons.
*/
export function InformationCircleSolidIcon({ size = 24 }) {
  return (
    <svg width={size * 0.8334} height={size * 0.8334} viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433283 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34873 18.9426 4.80688 17.0679 2.93215C15.1931 1.05741 12.6513 0.0029116 10 0V0ZM9.5 4C9.79667 4 10.0867 4.08797 10.3334 4.25279C10.58 4.41762 10.7723 4.65188 10.8858 4.92597C10.9994 5.20006 11.0291 5.50166 10.9712 5.79263C10.9133 6.08361 10.7704 6.35088 10.5607 6.56066C10.3509 6.77044 10.0836 6.9133 9.79264 6.97118C9.50167 7.02905 9.20007 6.99935 8.92598 6.88582C8.65189 6.77229 8.41762 6.58003 8.2528 6.33335C8.08798 6.08668 8 5.79667 8 5.5C8 5.10217 8.15804 4.72064 8.43934 4.43934C8.72065 4.15803 9.10218 4 9.5 4ZM12 15H8C7.73479 15 7.48043 14.8946 7.2929 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4804 7.2929 13.2929C7.48043 13.1054 7.73479 13 8 13H9V10H8C7.73479 10 7.48043 9.89464 7.2929 9.7071C7.10536 9.51957 7 9.26521 7 9C7 8.73478 7.10536 8.48043 7.2929 8.29289C7.48043 8.10535 7.73479 8 8 8H10C10.2652 8 10.5196 8.10535 10.7071 8.29289C10.8946 8.48043 11 8.73478 11 9V13H12C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15Z" fill="currentColor" />
    </svg>
  );
}

export function XCircleSolidIcon({ size = 24 }) {
  return (
    <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 19.2 19.2" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.6 19.2C14.9019 19.2 19.2 14.9019 19.2 9.6C19.2 4.29807 14.9019 0 9.6 0C4.29807 0 0 4.29807 0 9.6C0 14.9019 4.29807 19.2 9.6 19.2ZM8.04853 6.35147C7.5799 5.88284 6.8201 5.88284 6.35147 6.35147C5.88284 6.8201 5.88284 7.5799 6.35147 8.04853L7.90294 9.6L6.35147 11.1515C5.88284 11.6201 5.88284 12.3799 6.35147 12.8485C6.8201 13.3172 7.5799 13.3172 8.04853 12.8485L9.6 11.2971L11.1515 12.8485C11.6201 13.3172 12.3799 13.3172 12.8485 12.8485C13.3172 12.3799 13.3172 11.6201 12.8485 11.1515L11.2971 9.6L12.8485 8.04853C13.3172 7.5799 13.3172 6.8201 12.8485 6.35147C12.3799 5.88284 11.6201 5.88284 11.1515 6.35147L9.6 7.90294L8.04853 6.35147Z" fill="currentColor" />
    </svg>
  );
}

export function CheckCircleSolidIcon({ size = 24 }) {
  return (
    <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 19.2 19.2" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.6 19.2C14.9019 19.2 19.2 14.9019 19.2 9.6C19.2 4.29807 14.9019 0 9.6 0C4.29807 0 0 4.29807 0 9.6C0 14.9019 4.29807 19.2 9.6 19.2ZM14.0485 8.04853C14.5172 7.5799 14.5172 6.8201 14.0485 6.35147C13.5799 5.88284 12.8201 5.88284 12.3515 6.35147L8.4 10.3029L6.84853 8.75147C6.3799 8.28284 5.6201 8.28284 5.15147 8.75147C4.68284 9.2201 4.68284 9.9799 5.15147 10.4485L7.55147 12.8485C8.0201 13.3172 8.7799 13.3172 9.24853 12.8485L14.0485 8.04853Z" fill="currentColor" />
    </svg>
  );
}

export function ExclamationCircleSolidIcon({ size = 24 }) {
  return (
    <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 19.2 19.2" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.2 9.6C19.2 14.9019 14.9019 19.2 9.6 19.2C4.29807 19.2 0 14.9019 0 9.6C0 4.29807 4.29807 0 9.6 0C14.9019 0 19.2 4.29807 19.2 9.6ZM10.8 14.4C10.8 15.0627 10.2627 15.6 9.6 15.6C8.93726 15.6 8.4 15.0627 8.4 14.4C8.4 13.7373 8.93726 13.2 9.6 13.2C10.2627 13.2 10.8 13.7373 10.8 14.4ZM9.6 3.6C8.93726 3.6 8.4 4.13726 8.4 4.8V9.6C8.4 10.2627 8.93726 10.8 9.6 10.8C10.2627 10.8 10.8 10.2627 10.8 9.6V4.8C10.8 4.13726 10.2627 3.6 9.6 3.6Z" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma asset ("lion" icon), exported from the Nav Logo component.
  Box is 35x35 per the design's icon container, with the glyph filling it
  per Figma's inset (top 1.02%, right/left 8.33%, bottom 1.42%) — fill
  uses currentColor like the rest of this file's solid icons.
*/
export function LionLogoIcon({ size = 35 }) {
  return (
    <svg width={size * 0.8334} height={size * 0.9756} viewBox="0 0 29.1667 34.1461" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path d="M23.3674 11.6786L24.05 10.4879L20.8942 9.77273L23.3674 11.6786Z" fill="currentColor" />
      <path d="M26.6084 12.2353L29.1667 13.109L28.5692 15.8904L28.9966 17.5585L28.2289 17.1604L23.1973 17.3189L27.0357 16.2075L27.9736 14.1412L26.6084 12.2353Z" fill="currentColor" />
      <path d="M10.5095 24.99L2.65671 27.4948L13.2872 18.624L14.8509 24.3505L24.0764 34.1461L10.5095 24.99Z" fill="currentColor" />
      <path d="M26.1431 20.5036L27.9735 20.8154L28.2287 19.1473L26.8635 20.1002L20.5537 16.9225L17.8233 18.6699L16.46 17.3189L19.4438 12.2352L15.3501 10.5671L18.4416 6.04716L25.8406 9.45386L20.809 1.90592L20.4686 4.0514L15.7774 0L14.4122 2.93991L8.44272 1.82665L11.5135 4.29097L2.04592 8.81797L8.55428 7.71352L0.512425 14.3807L5.45893 13.1089L0 20.4173L4.00864 17.5584L1.45029 25.7405L13.7315 15.4129L17.4224 23.6021L25.0729 32.3355L24.6474 27.4897L27.376 28.9975L24.5624 24.3912L24.3903 20.1795L26.1431 20.4913V20.5036Z" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma asset (Icon/Solid/battery), exported from the Nav Item
  component. Box is 24x24 per the design's icon container, with the glyph
  filling it per Figma's inset (top 10.42%, right/left 20.83%, bottom
  5.33%). Selected vs. default nav items use different fill colors
  (neutral/100 vs neutral/90) in Figma — reproduced here with currentColor
  so it always matches the nav item's own text color.
*/
export function BatterySolidIcon({ size = 24 }) {
  return (
    <svg width={size * 0.5834} height={size * 0.8425} viewBox="0 0 14 20.22" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.56666 3.88844H11.4333C11.5622 3.88844 11.6667 3.9929 11.6667 4.12175V17.6536C11.6667 17.7824 11.5622 17.8869 11.4333 17.8869H2.56666C2.43779 17.8869 2.33332 17.7824 2.33332 17.6536V4.12175C2.33332 3.9929 2.43779 3.88844 2.56666 3.88844ZM8.45833 7.52417H7.48611V6.55206C7.48611 6.42315 7.4349 6.29952 7.34373 6.20836C7.25257 6.11721 7.12892 6.066 7 6.066C6.87108 6.066 6.74743 6.11721 6.65627 6.20836C6.5651 6.29952 6.51389 6.42315 6.51389 6.55206V7.52417H5.54167C5.41274 7.52417 5.2891 7.57538 5.19793 7.66654C5.10677 7.75769 5.05556 7.88132 5.05556 8.01023C5.05556 8.13914 5.10677 8.26277 5.19793 8.35392C5.2891 8.44508 5.41274 8.49629 5.54167 8.49629H6.51389V9.4684C6.51389 9.59731 6.5651 9.72094 6.65627 9.8121C6.74743 9.90325 6.87108 9.95446 7 9.95446C7.12892 9.95446 7.25257 9.90325 7.34373 9.8121C7.4349 9.72094 7.48611 9.59731 7.48611 9.4684V8.49629H8.45833C8.58726 8.49629 8.7109 8.44508 8.80207 8.35392C8.89323 8.26277 8.94444 8.13914 8.94444 8.01023C8.94444 7.88132 8.89323 7.75769 8.80207 7.66654C8.7109 7.57538 8.58726 7.52417 8.45833 7.52417ZM5.19793 14.2493C5.2891 14.3709 5.41274 14.4392 5.54167 14.4392H8.45833C8.58726 14.4392 8.7109 14.3709 8.80207 14.2493C8.89323 14.1278 8.94444 13.963 8.94444 13.7911C8.94444 13.6192 8.89323 13.4544 8.80207 13.3328C8.7109 13.2113 8.58726 13.143 8.45833 13.143H5.54167C5.41274 13.143 5.2891 13.2113 5.19793 13.3328C5.10677 13.4544 5.05556 13.6192 5.05556 13.7911C5.05556 13.963 5.10677 14.1278 5.19793 14.2493Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.44444 0C5.01489 0 4.66667 0.348185 4.66667 0.777692V1.55538L2 1.55538C1.46957 1.55538 0.960859 1.75203 0.585786 2.10206C0.210714 2.45209 0 2.92683 0 3.42185V18.3535C0 18.8486 0.210714 19.3233 0.585786 19.6733C0.960859 20.0234 1.46957 20.22 2 20.22H12C12.5304 20.22 13.0391 20.0234 13.4142 19.6733C13.7893 19.3233 14 18.8486 14 18.3535V3.42185C14 2.92683 13.7893 2.45209 13.4142 2.10206C13.0391 1.75203 12.5304 1.55538 12 1.55538L9.33333 1.55538V0.777692C9.33333 0.348185 8.98511 0 8.55556 0H5.44444ZM1.55555 4.12175C1.55555 3.56339 2.00824 3.11075 2.56666 3.11075H11.4333C11.9917 3.11075 12.4444 3.56339 12.4444 4.12175V17.6536C12.4444 18.212 11.9917 18.6646 11.4333 18.6646H2.56666C2.00824 18.6646 1.55555 18.212 1.55555 17.6536V4.12175Z" fill="currentColor" />
    </svg>
  );
}

/*
  Real Figma assets (Icon/Solid/check-circle, x-circle), exported from the
  "Text" component (Page Title / Results). Note: these have a visibly
  chunkier glyph than CheckCircleSolidIcon/XCircleSolidIcon above — Figma
  exported a distinct, hand-tuned shape here rather than reusing that one,
  so this is a separate icon, not a duplicate. Box is a 10%-inset square
  (visible size = box * 0.8, matching its 28x28 natural size) — fill uses
  currentColor like the rest of this file's solid icons.
*/
export function CheckCircleFilledIcon({ size = 35 }) {
  return (
    <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 28 28" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM20.4874 11.7374C21.1709 11.054 21.1709 9.94598 20.4874 9.26256C19.804 8.57915 18.696 8.57915 18.0126 9.26256L12.25 15.0251L9.98744 12.7626C9.30402 12.0791 8.19598 12.0791 7.51256 12.7626C6.82915 13.446 6.82915 14.554 7.51256 15.2374L11.0126 18.7374C11.696 19.4209 12.804 19.4209 13.4874 18.7374L20.4874 11.7374Z" fill="currentColor" />
    </svg>
  );
}

export function XCircleFilledIcon({ size = 35 }) {
  return (
    <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 28 28" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM11.7374 9.26256C11.054 8.57915 9.94598 8.57915 9.26256 9.26256C8.57915 9.94598 8.57915 11.054 9.26256 11.7374L11.5251 14L9.26256 16.2626C8.57915 16.946 8.57915 18.054 9.26256 18.7374C9.94598 19.4209 11.054 19.4209 11.7374 18.7374L14 16.4749L16.2626 18.7374C16.946 19.4209 18.054 19.4209 18.7374 18.7374C19.4209 18.054 19.4209 16.946 18.7374 16.2626L16.4749 14L18.7374 11.7374C19.4209 11.054 19.4209 9.94598 18.7374 9.26256C18.054 8.57915 16.946 8.57915 16.2626 9.26256L14 11.5251L11.7374 9.26256Z" fill="currentColor" />
    </svg>
  );
}
