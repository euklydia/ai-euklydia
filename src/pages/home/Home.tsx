import { Header, HeroSection, MetaHead, WhyChooseUs } from "../../components";
import { Blog } from "../../components/blog/Blog";
// import Chatbot from "../../components/chatbot/chatbot.component";
import { Footer } from "../../components/footer/Footer";
import { homeHead } from "../../data/SEO";

export const Home = () => {
  return (
    <>
      <MetaHead {...homeHead} />
      <div className="smooth-scroll-container">
        {/* <Chatbot /> */}
        <Header />

        <HeroSection />
        <WhyChooseUs />
        <Blog />
        <Footer />
      </div>
    </>
  );
};
