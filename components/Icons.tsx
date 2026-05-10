import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function RatIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M8 38 C6 33 8 28 12 26" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="26" cy="35" rx="13" ry="9"/>
      <ellipse cx="40" cy="30" rx="6" ry="5"/>
      <circle cx="48" cy="25" r="9"/>
      <circle cx="47" cy="14" r="5.5"/>
      <circle cx="47" cy="14" r="3.5" fill="#52a37a"/>
      <circle cx="52" cy="22" r="2.5" fill="white"/>
      <circle cx="52.5" cy="22" r="1.2" fill="#111"/>
      <circle cx="57" cy="27" r="2.5"/>
      <path d="M19 43 L17 52 M25 44 L24 53" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M33 42 L32 51 M38 40 L40 49" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function CockroachIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 64" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M20 8 Q12 2 6 2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M28 8 Q36 2 42 1" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="24" cy="12" rx="6" ry="5"/>
      <ellipse cx="24" cy="34" rx="9.5" ry="18"/>
      <path d="M15 22 Q7 18 3 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M15 32 Q6 31 2 35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M15 42 Q7 44 5 49" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M33 22 Q41 18 45 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M33 32 Q42 31 46 35" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M33 42 Q41 44 43 49" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function BedBugIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <rect x="6" y="6" width="52" height="7" rx="3.5"/>
      <rect x="6" y="17" width="52" height="18" rx="4"/>
      <rect x="6" y="38" width="6" height="8" rx="2"/>
      <rect x="52" y="38" width="6" height="8" rx="2"/>
      <rect x="6" y="35" width="52" height="5" rx="2"/>
      <circle cx="42" cy="25" r="6" fill="white"/>
      <circle cx="42" cy="25" r="4" fill="#dc2626"/>
      <path d="M40 19 Q37 15 35 14" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M44 19 Q47 15 49 14" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function WaspIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="12" r="9"/>
      <ellipse cx="32" cy="32" rx="7" ry="11"/>
      <ellipse cx="32" cy="47" rx="4" ry="8"/>
      <path d="M32 42 L32 58" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="14" cy="28" rx="12" ry="5" opacity="0.55" transform="rotate(-15 14 28)"/>
      <ellipse cx="50" cy="28" rx="12" ry="5" opacity="0.55" transform="rotate(15 50 28)"/>
      <ellipse cx="16" cy="35" rx="9" ry="4" opacity="0.4" transform="rotate(-10 16 35)"/>
      <ellipse cx="48" cy="35" rx="9" ry="4" opacity="0.4" transform="rotate(10 48 35)"/>
      <rect x="26" y="38" width="12" height="2.5" rx="1.25"/>
      <rect x="27" y="43" width="10" height="2.5" rx="1.25"/>
      <path d="M28 8 Q24 2 20 1M36 8 Q40 2 44 1" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function AntIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 64" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M22 8 Q16 2 10 1M26 8 Q32 2 38 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="24" cy="13" r="7"/>
      <circle cx="24" cy="28" r="6"/>
      <circle cx="24" cy="44" r="8.5"/>
      <path d="M18 24 Q8 20 4 22M30 24 Q40 20 44 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M18 30 Q8 30 4 34M30 30 Q40 30 44 34" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M19 37 Q10 40 8 46M29 37 Q38 40 40 46" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function MothIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 72 56" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M32 6 Q18 2 6 10 Q2 20 10 28 Q20 36 30 28 Q34 24 36 20"/>
      <path d="M40 6 Q54 2 66 10 Q70 20 62 28 Q52 36 42 28 Q38 24 36 20"/>
      <path d="M34 22 Q20 30 16 42 Q20 52 28 50 Q36 48 36 38"/>
      <path d="M38 22 Q52 30 56 42 Q52 52 44 50 Q36 48 36 38"/>
      <ellipse cx="36" cy="18" rx="5" ry="22" fill="currentColor"/>
      <path d="M33 4 Q30 0 28 0M39 4 Q42 0 44 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function BoltIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  );
}

export function BadgeCheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M12 2l2.4 4.8L20 8l-3.6 3.5.85 5.5L12 14.5l-5.25 2.5.85-5.5L4 8l5.6-1.2z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

export function ShieldCheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

export function StarIcon({ className, filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 1.5} className={className} aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.31 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.37a16 16 0 006.72 6.72l1.74-1.74a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

export function ClockIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export function MapPinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function EuroIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M4 10h12M4 14h12"/>
      <path d="M19 6a7 7 0 100 12"/>
    </svg>
  );
}

export function LockIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  );
}

export function MoonIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

export function SearchIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

export function BeakerIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M9 2v9l-4 8a1 1 0 00.9 1.4h12.2A1 1 0 0019 19l-4-8V2"/>
      <line x1="9" y1="2" x2="15" y2="2"/>
      <line x1="8" y1="15" x2="16" y2="15"/>
    </svg>
  );
}

export function CheckCircleIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

export function WarningIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

export function FlameIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>
    </svg>
  );
}

export function PillIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M10.5 20H4a2 2 0 01-2-2v-4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-6.5"/>
      <path d="M8 12V7a4 4 0 018 0v5"/>
    </svg>
  );
}

export function BuildingIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <polyline points="3 21 3 3 21 3 21 21 3 21"/>
      <rect x="7" y="6" width="2" height="2"/>
      <rect x="11" y="6" width="2" height="2"/>
      <rect x="15" y="6" width="2" height="2"/>
      <rect x="7" y="10" width="2" height="3"/>
      <rect x="11" y="10" width="2" height="3"/>
      <rect x="15" y="10" width="2" height="3"/>
      <rect x="9" y="15" width="6" height="6"/>
    </svg>
  );
}

export function TargetIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

export function GraduationCapIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

export function ClipboardIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    </svg>
  );
}

export function XCircleIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  );
}

export function GearIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
  );
}

export function UsersIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}

export function MosquitoIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 64" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <circle cx="24" cy="10" r="5"/>
      <ellipse cx="24" cy="30" rx="5" ry="14"/>
      <path d="M14 22 Q4 18 2 20M34 22 Q44 18 46 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M14 28 Q4 28 2 32M34 28 Q44 28 46 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M16 18 Q8 12 6 10M32 18 Q40 12 42 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M19 42 L17 52 M25 43 L24 53 M29 42 L31 52" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="12" cy="24" rx="10" ry="4" opacity="0.5" transform="rotate(-20 12 24)"/>
      <ellipse cx="36" cy="24" rx="10" ry="4" opacity="0.5" transform="rotate(20 36 24)"/>
      <path d="M22 8 Q20 4 18 2M26 8 Q28 4 30 2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function FlyIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true" {...props}>
      <ellipse cx="12" cy="14" rx="3" ry="4" fill="currentColor" stroke="none"/>
      <ellipse cx="8.5" cy="10" rx="5" ry="3" opacity="0.6" transform="rotate(-15 8.5 10)"/>
      <ellipse cx="15.5" cy="10" rx="5" ry="3" opacity="0.6" transform="rotate(15 15.5 10)"/>
      <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none"/>
      <path d="M10 7 L8 5M14 7 L16 5" strokeLinecap="round"/>
    </svg>
  );
}

export function SpiderIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="7" r="2" fill="currentColor" stroke="none"/>
      <path d="M9 10 L4 7M9 11 L3 12M9 12.5 L3 16" strokeLinecap="round"/>
      <path d="M15 10 L20 7M15 11 L21 12M15 12.5 L21 16" strokeLinecap="round"/>
    </svg>
  );
}
