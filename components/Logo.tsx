import Link from "next/link";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="13" cy="15" r="11" fill="#1B4332" />
      <circle cx="27" cy="15" r="11" fill="#2D6A4F" opacity="0.88" />
      <circle cx="20" cy="26" r="11" fill="#FBBF24" opacity="0.92" />
    </svg>
  );
}

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group"
      onClick={onClick}
      aria-label="Sayonarat — Retour à l'accueil"
    >
      <LogoMark size={36} />
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-lg tracking-tight group-hover:text-yellow-300 transition-colors">
          Sayonarat
        </span>
        <span className="text-green-300 text-xs font-medium">Pest Control</span>
      </div>
    </Link>
  );
}
