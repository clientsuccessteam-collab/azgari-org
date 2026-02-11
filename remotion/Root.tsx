import React from "react";
import { Composition, Folder } from "remotion";
import { PromoVideo } from "./compositions/PromoVideo";
import { StatsVideo } from "./compositions/StatsVideo";
import { TestimonialVideo } from "./compositions/TestimonialVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Marketing">
        <Composition
          id="PromoVideo"
          component={PromoVideo}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="StatsVideo"
          component={StatsVideo}
          durationInFrames={240}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="TestimonialVideo"
          component={TestimonialVideo}
          durationInFrames={360}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
    </>
  );
};
