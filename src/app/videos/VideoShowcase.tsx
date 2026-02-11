"use client";

import { Player } from "@remotion/player";
import { PromoVideo } from "../../../remotion/compositions/PromoVideo";
import { StatsVideo } from "../../../remotion/compositions/StatsVideo";
import { TestimonialVideo } from "../../../remotion/compositions/TestimonialVideo";

const compositions = [
  {
    id: "promo",
    title: "Promotional Video",
    description:
      "A branded overview of Azgari Foundation's mission and 8-phase launch framework.",
    component: PromoVideo,
    durationInFrames: 300,
  },
  {
    id: "stats",
    title: "Client Results",
    description:
      "Animated statistics showcasing aggregate client outcomes and success metrics.",
    component: StatsVideo,
    durationInFrames: 240,
  },
  {
    id: "testimonials",
    title: "Client Testimonials",
    description:
      "Real client stories with animated presentation cards.",
    component: TestimonialVideo,
    durationInFrames: 360,
  },
];

export default function VideoShowcase() {
  return (
    <div className="space-y-16">
      {compositions.map((comp) => (
        <div key={comp.id}>
          <div className="mb-4">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              {comp.title}
            </h2>
            <p className="text-gray-600">{comp.description}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Player
              component={comp.component}
              durationInFrames={comp.durationInFrames}
              fps={30}
              compositionWidth={1920}
              compositionHeight={1080}
              style={{ width: "100%" }}
              controls
              acknowledgeRemotionLicense
            />
          </div>
        </div>
      ))}
    </div>
  );
}
