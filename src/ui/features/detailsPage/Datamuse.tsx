import React from "react";
import { Hero } from "./herosection/Hero";
import Parallax from "./parallax/parallax";
import LivingWords from "./livingWords/LivingWords";
import { VideoSection } from "./video-section/VideoSection";

export const DataMuse = () => {
  return (
    <>
      <Hero />
      <Parallax />
      <VideoSection />
      <LivingWords />
    </>
  );
};
