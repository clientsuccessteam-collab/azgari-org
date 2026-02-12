import { IMPACT_METRICS, NONPROFIT } from "@/lib/links";

interface ImpactModuleProps {
  variant?: "full" | "compact";
}

export default function ImpactModule({ variant = "full" }: ImpactModuleProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-6 py-4">
        {IMPACT_METRICS.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{stat.value}</span>
            <span className="text-xs text-gray-500 ml-1">{stat.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Default: full variant
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/10 text-white/80">
          OUR IMPACT
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Impact Through Entrepreneurship
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {IMPACT_METRICS.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-white/60 max-w-xl mx-auto">
          {NONPROFIT.missionShort}
        </p>
      </div>
    </section>
  );
}
