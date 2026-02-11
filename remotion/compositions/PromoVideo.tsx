import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  interpolateColors,
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

const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ fps, frame, config: { damping: 80, stiffness: 100 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [60, 0]);

  const subtitleSpring = spring({ fps, frame: frame - 15, config: { damping: 80 } });
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);
  const subtitleY = interpolate(subtitleSpring, [0, 1], [40, 0]);

  const lineScale = spring({ fps, frame: frame - 5, config: { damping: 100 } });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BRAND.primary,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <h1
          style={{
            color: BRAND.white,
            fontSize: 88,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            margin: 0,
            letterSpacing: -2,
          }}
        >
          Azgari Foundation
        </h1>
        <div
          style={{
            width: 120,
            height: 4,
            backgroundColor: BRAND.accent,
            transform: `scaleX(${lineScale})`,
            borderRadius: 2,
          }}
        />
        <p
          style={{
            color: BRAND.accentLight,
            fontSize: 36,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            margin: 0,
          }}
        >
          Launch Your Service Business
        </p>
      </div>
    </AbsoluteFill>
  );
};

const ProcessScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    "Discovery Call",
    "Market Research",
    "Business Setup",
    "Brand & Marketing",
    "Lead Generation",
    "First Customers",
    "Systems & SOPs",
    "Scale & Grow",
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.cream,
        padding: 80,
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: BRAND.primary,
          fontSize: 52,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          marginBottom: 60,
          textAlign: "center",
        }}
      >
        Our 8-Phase Launch Framework
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {steps.map((step, i) => {
          const delay = i * 6;
          const spr = spring({
            fps,
            frame: frame - delay,
            config: { damping: 80, stiffness: 120 },
          });
          const opacity = interpolate(spr, [0, 1], [0, 1]);
          const scale = interpolate(spr, [0, 1], [0.8, 1]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: BRAND.white,
                padding: "20px 28px",
                borderRadius: 12,
                opacity,
                transform: `scale(${scale})`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                border: `2px solid ${BRAND.accentLight}`,
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: BRAND.accent,
                  color: BRAND.primaryDark,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  fontFamily: "Inter, sans-serif",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  color: BRAND.primary,
                  fontSize: 22,
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const spr = spring({ fps, frame, config: { damping: 80 } });
  const opacity = interpolate(spr, [0, 1], [0, 1]);
  const scale = interpolate(spr, [0, 1], [0.9, 1]);

  const pulse = Math.sin(frame * 0.1) * 0.03 + 1;

  const bgColor = interpolateColors(
    frame,
    [0, 30],
    [BRAND.primaryDark, BRAND.primary]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h2
          style={{
            color: BRAND.white,
            fontSize: 64,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            textAlign: "center",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Ready to Launch Your
          <br />
          <span style={{ color: BRAND.accent }}>Service Business?</span>
        </h2>
        <div
          style={{
            backgroundColor: BRAND.accent,
            color: BRAND.primaryDark,
            padding: "24px 56px",
            borderRadius: 12,
            fontSize: 28,
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
            transform: `scale(${pulse})`,
          }}
        >
          See If You Qualify
        </div>
        <p
          style={{
            color: BRAND.accentLight,
            fontSize: 20,
            fontFamily: "Inter, sans-serif",
            margin: 0,
            opacity: 0.8,
          }}
        >
          azgari.org
        </p>
      </div>
    </AbsoluteFill>
  );
};

export const PromoVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={90}>
        <TitleScene />
      </Sequence>
      <Sequence from={90} durationInFrames={120}>
        <ProcessScene />
      </Sequence>
      <Sequence from={210} durationInFrames={90}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
