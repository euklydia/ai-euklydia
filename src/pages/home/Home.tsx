import { Header, HeroSection, MetaHead, WhyChooseUs } from "../../components";
import { Blog } from "../../components/blog/Blog";
import { Footer } from "../../components/footer/Footer";
import { homeHead } from "../../data/SEO";

export const Home = () => {
  return (
    <>
      <div className="smooth-scroll-container">
        <MetaHead {...homeHead} />
        <Header />

        <HeroSection />
        <WhyChooseUs />
        <Blog />
        <Footer />
      </div>
    </>
  );
};
