import { NONPROFIT } from "@/lib/links";

interface ReinvestmentDisclosureProps {
  size?: "default" | "compact";
}

export default function ReinvestmentDisclosure({ size = "default" }: ReinvestmentDisclosureProps) {
  if (size === "compact") {
    return (
      <p className="text-xs text-white/40">
        {NONPROFIT.reinvestmentStatement}
      </p>
    );
  }

  return (
    <div
      className="flex items-start gap-3 rounded-xl p-4 border border-gray-100"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <span className="text-lg shrink-0">🔄</span>
      <p className="text-xs text-gray-500">
        <span className="font-semibold text-gray-700">Where your investment goes: </span>
        {NONPROFIT.reinvestmentStatement}
      </p>
    </div>
  );
}
