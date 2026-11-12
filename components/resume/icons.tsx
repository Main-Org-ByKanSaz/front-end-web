// Simple icons drawn to look like the ones in the PDF.

type IconProps = { className?: string };

export const UserIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <circle cx="12" cy="7.5" r="4.5" />
    <path d="M3 21c0-4.4 4-7.5 9-7.5s9 3.1 9 7.5z" />
  </svg>
);

export const ContactIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
    <rect x="4" y="2.5" width="16" height="19" rx="1.5" />
    <path d="M4 7h-1.5M4 12h-1.5M4 17h-1.5" />
    <circle cx="12" cy="10" r="2.5" />
    <path d="M8 17c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M6.6 2.5 9.3 5.2c.4.4.4 1 .1 1.4L8 8.4a12.4 12.4 0 0 0 7.6 7.6l1.8-1.4c.4-.3 1-.3 1.4.1l2.7 2.7c.4.4.4 1.1 0 1.5l-1.6 1.6c-1 1-2.6 1.3-3.9.7A20 20 0 0 1 2.8 7c-.6-1.3-.3-2.9.7-3.9L5.1 1.5c.4-.4 1.1-.4 1.5 0z" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2 2.5 8.5V20a1.5 1.5 0 0 0 1.5 1.5h16a1.5 1.5 0 0 0 1.5-1.5V8.5zm0 11L5 8.6 12 4l7 4.6z" />
  </svg>
);

export const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden>
    <path d="M12 2v20M12 14l-5-3V8M12 11l5-3V5" />
    <circle cx="12" cy="2.5" r="1" fill="currentColor" />
    <rect x="5.5" y="6" width="3" height="2.5" fill="currentColor" stroke="none" />
    <circle cx="17" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 1.5A7.5 7.5 0 0 0 4.5 9c0 5.4 7.5 13.5 7.5 13.5S19.5 14.4 19.5 9A7.5 7.5 0 0 0 12 1.5zm0 10.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
  </svg>
);

export const GearIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M10.3 2.5h3.4l.5 2.6 1.6.7 2.2-1.5 2.4 2.4-1.5 2.2.7 1.6 2.6.5v3.4l-2.6.5-.7 1.6 1.5 2.2-2.4 2.4-2.2-1.5-1.6.7-.5 2.6h-3.4l-.5-2.6-1.6-.7-2.2 1.5-2.4-2.4 1.5-2.2-.7-1.6-2.6-.5v-3.4l2.6-.5.7-1.6-1.5-2.2 2.4-2.4 2.2 1.5 1.6-.7z" />
  </svg>
);

export const GraduationIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 3 1 8.5 12 14l9-4.5V15h1.5V8.5z" />
    <path d="M5.5 12.3V16c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-3.7L12 15.6z" />
  </svg>
);

export const BriefcaseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M9 3h6a1.5 1.5 0 0 1 1.5 1.5V6H21a1.5 1.5 0 0 1 1.5 1.5V11h-21V7.5A1.5 1.5 0 0 1 3 6h4.5V4.5A1.5 1.5 0 0 1 9 3zm.5 3h5V5h-5z" />
    <path d="M1.5 12.5h8.5v1.5h4v-1.5h8.5v6A1.5 1.5 0 0 1 21 20H3a1.5 1.5 0 0 1-1.5-1.5z" />
  </svg>
);
