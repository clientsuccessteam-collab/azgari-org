import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

const BRAND = {
  primary: "#1B4332",
  primaryLight: "#2D6A4F",
  primaryDark: "#081C15",
  accent: "#D4A029",
  accentLight: "#F4E4BA",
  cream: "#F8F6F0",
  white: "#FFFFFF",
};

interface StatItemProps {
  metric: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ metric, label, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const spr = spring({
    fps,
    frame: frame - delay,
    config: { damping: 60, stiffness: 100 },
  });

  const opacity = interpolate(spr, [0, 1], [0, 1]);
  const y = interpolate(spr, [0, 1], [80, 0]);
  const scale = interpolate(spr, [0, 1], [0.5, 1]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        opacity,
        transform: `translateY(${y}px) scale(${scale})`,
      }}
    >
      <span
        style={{
          color: BRAND.accent,
          fontSize: 80,
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
          lineHeight: 1,
        }}
      >
        {metric}
      </span>
      <span
        style={{
          color: BRAND.accentLight,
          fontSize: 22,
          fontWeight: 500,
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
          maxWidth: 200,
        }}
      >
        {label}
      </span>
    </div>
  );
};

const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const spr = spring({ fps, frame, config: { damping: 80 } });
  const opacity = interpolate(spr, [0, 1], [0, 1]);
  const y = interpolate(spr, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <span
          style={{
            color: BRAND.accent,
            fontSize: 24,
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          By The Numbers
        </span>
        <h2
          style={{
            color: BRAND.white,
            fontSize: 64,
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
            margin: 0,
            textAlign: "center",
          }}
        >
          Our Client Results
        </h2>
      </div>
    </AbsoluteFill>
  );
};

const StatsGridScene: React.FC = () => {
  const stats = [
    { metric: "160+", label: "Businesses Launched" },
    { metric: "$285K", label: "Avg First Year Revenue" },
    { metric: "42%", label: "Avg Net Margin" },
    { metric: "47", label: "Days to First Revenue" },
    { metric: "94%", label: "Client Satisfaction" },
    { metric: "$45M+", label: "Total Client Revenue" },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 80,
          maxWidth: 1400,
        }}
      >
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            metric={stat.metric}
            label={stat.label}
            delay={i * 8}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const StatsVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={60}>
        <IntroScene />
      </Sequence>
      <Sequence from={60} durationInFrames={180}>
        <StatsGridScene />
      </Sequence>
    </AbsoluteFill>
  );
};
