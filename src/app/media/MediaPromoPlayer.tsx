"use client";

import { Player } from "@remotion/player";
import { PromoVideo } from "../../../remotion/compositions/PromoVideo";

export default function MediaPromoPlayer() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      <Player
        component={PromoVideo}
        durationInFrames={300}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{ width: "100%" }}
        controls
        autoPlay
        loop
        acknowledgeRemotionLicense
      />
    </div>
  );
}
