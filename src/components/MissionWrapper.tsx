import { NONPROFIT } from "@/lib/links";

interface MissionWrapperProps {
  variant?: "hero" | "section" | "inline";
}

export default function MissionWrapper({ variant = "section" }: MissionWrapperProps) {
  if (variant === "hero") {
    return (
      <div className="py-4 text-center" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-gray-600">
            {NONPROFIT.mission}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <p className="text-sm" style={{ color: 'var(--color-primary)' }}>
        {NONPROFIT.legalDisclosure}
      </p>
    );
  }

  // Default: "section" variant
  return (
    <div
      className="rounded-xl p-5 border-l-4"
      style={{
        backgroundColor: 'var(--color-cream)',
        borderLeftColor: 'var(--color-primary)',
      }}
    >
      <p className="text-sm text-gray-700 mb-2">{NONPROFIT.mission}</p>
      <p className="text-xs text-gray-500">{NONPROFIT.reinvestmentStatement}</p>
    </div>
  );
}
