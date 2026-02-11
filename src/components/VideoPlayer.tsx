"use client";

import { Player } from "@remotion/player";
import type { ComponentType } from "react";

interface VideoPlayerProps {
  component: ComponentType;
  durationInFrames: number;
  fps?: number;
  compositionWidth?: number;
  compositionHeight?: number;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

export default function VideoPlayer({
  component,
  durationInFrames,
  fps = 30,
  compositionWidth = 1920,
  compositionHeight = 1080,
  autoPlay = false,
  loop = false,
  controls = true,
  className,
}: VideoPlayerProps) {
  return (
    <div className={className}>
      <Player
        component={component}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={compositionWidth}
        compositionHeight={compositionHeight}
        style={{ width: "100%", borderRadius: 12 }}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
