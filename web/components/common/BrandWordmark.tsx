import { APP_NAME } from "@/lib/brand";

type BrandWordmarkProps = {
  /** Collapsed rail: a single letter so it fits the 36px tile. */
  compact?: boolean;
  className?: string;
};

export function BrandWordmark({
  compact = false,
  className = "",
}: BrandWordmarkProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 bg-clip-text font-serif font-bold tracking-tight text-transparent [-webkit-text-fill-color:transparent] ${className}`}
    >
      {compact ? "E" : APP_NAME}
    </span>
  );
}
