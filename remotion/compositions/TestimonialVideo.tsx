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

interface TestimonialData {
  name: string;
  role: string;
  location: string;
  quote: string;
}

const testimonials: TestimonialData[] = [
  {
    name: "Marcus T.",
    role: "Pressure Washing Owner",
    location: "Austin, TX",
    quote: "I went from corporate burnout to $287K in my first year.",
  },
  {
    name: "Jennifer R.",
    role: "Commercial Cleaning Owner",
    location: "Tampa, FL",
    quote: "Started with $15K and no experience. Now we're doing $35K/month.",
  },
  {
    name: "Anthony M.",
    role: "Lawn Care Owner",
    location: "Columbus, OH",
    quote: "Went from 60-hour weeks at $3K/month to 20-hour weeks at $12K.",
  },
];

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({ fps, frame, config: { damping: 80 } });
  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
  const x = interpolate(enterSpring, [0, 1], [100, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.cream,
        justifyContent: "center",
        alignItems: "center",
        padding: 120,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
          maxWidth: 1200,
          opacity,
          transform: `translateX(${x}px) scale(${scale})`,
        }}
      >
        {/* Quote mark */}
        <span
          style={{
            fontSize: 120,
            color: BRAND.accentLight,
            fontFamily: "Georgia, serif",
            lineHeight: 0.8,
          }}
        >
          &ldquo;
        </span>

        {/* Quote text */}
        <p
          style={{
            color: BRAND.primary,
            fontSize: 44,
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {testimonial.quote}
        </p>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: BRAND.accent,
            borderRadius: 2,
          }}
        />

        {/* Attribution */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: BRAND.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: BRAND.accent,
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <span
            style={{
              color: BRAND.primary,
              fontSize: 24,
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {testimonial.name}
          </span>
          <span
            style={{
              color: BRAND.primaryLight,
              fontSize: 20,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {testimonial.role} &middot; {testimonial.location}
          </span>
        </div>

        {/* Star rating */}
        <div style={{ display: "flex", gap: 8 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              style={{
                color: BRAND.accent,
                fontSize: 28,
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const TestimonialVideo: React.FC = () => {
  const durationPerTestimonial = 120;

  return (
    <AbsoluteFill>
      {testimonials.map((testimonial, i) => (
        <Sequence
          key={i}
          from={i * durationPerTestimonial}
          durationInFrames={durationPerTestimonial}
        >
          <TestimonialCard testimonial={testimonial} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
