import BannerV8 from "../../components/banner/BannerV8";
import { Header } from "../../components";
import TextAnimationV1 from "../../components/animation/TextAnimationV1";
import AboutV2 from "../../components/about/AboutV2";
import ServicesV6 from "../../components/services/ServicesV6";
import PortfolioV5 from "../../components/portfolio/PortfolioV5";
import QuickContact from "../../components/contact/QuickContact";
import { Footer } from "../../components/footer/Footer";

export const Service = () => {
  return (
    <div>
      <div className="smooth-scroll-container">
        <Header />
        <BannerV8 />
        <TextAnimationV1 />
        <AboutV2 />
        <ServicesV6
          pillars={{
            title: "",
            subtitle: "",
            pillars: [],
          }}
        />
        <PortfolioV5 hasShape={true} />
      </div>
      <QuickContact title="Need" titleBold="Help?" />
      <Footer />
    </div>
  );
};
