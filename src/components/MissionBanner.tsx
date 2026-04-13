import { NONPROFIT } from "@/lib/links";

interface MissionBannerProps {
  /**
   * "strip" renders a slim bar suited to the top of conversion pages that
   * already have a hero; "full" renders a centered section used at the top of
   * informational pages.
   */
  variant?: "strip" | "full";
}

/**
 * Mission-first framing required on every page for 501(c)(3) compliance.
 * Renders the Foundation's full charitable mission statement above any
 * program details, tuition, or calls-to-action.
 */
export default function MissionBanner({ variant = "strip" }: MissionBannerProps) {
  if (variant === "full") {
    return (
      <section
        className="pt-24 md:pt-28 pb-10 text-center"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            OUR 501(C)(3) MISSION
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--color-primary)" }}
          >
            {NONPROFIT.mission}
          </p>
        </div>
      </section>
    );
  }

  return (
    <div
      className="w-full py-3 px-6 text-center border-b"
      style={{
        backgroundColor: "var(--color-primary-dark)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <p className="text-xs md:text-sm text-white/90 max-w-5xl mx-auto leading-relaxed">
        <span
          className="font-semibold mr-2"
          style={{ color: "var(--color-accent)" }}
        >
          501(c)(3) NONPROFIT MISSION:
        </span>
        {NONPROFIT.mission}
      </p>
    </div>
  );
}
