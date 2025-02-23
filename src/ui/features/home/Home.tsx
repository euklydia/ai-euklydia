import { HomeTitle } from "./components/title";
import HeroSection from "./components/hero-section/Hero";
import { Efficiency } from "./components/efficiency/Efficiency";
import { Sectiontitle } from "./components/title-section/section-title";
import { BlogMedia } from "./components/blog-section";

export const HomePage = () => {
  return (
    <>
      <HomeTitle />
      <HeroSection />
      <Efficiency />
      <Sectiontitle />
      <BlogMedia />
    </>
  );
};
