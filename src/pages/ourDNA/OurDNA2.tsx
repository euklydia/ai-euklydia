import { Header, MetaHead } from "../../components";
import AboutV3 from "../../components/about/AboutV3";
import BannerV2 from "../../components/banner/BannerV2";
import { Footer } from "../../components/footer/Footer";
import Work from "../../components/work/Work";
import { ourDNA } from "../../data/content/our-dna";
import { ourDNAHead } from "../../data/SEO";

export const OurDNA2 = () => {
  return (
    <>
      <MetaHead {...ourDNAHead} />
      <div className="smooth-scroll-container">
        <Header />
        <BannerV2 banner={ourDNA.banner} />
        <div style={{ paddingTop: "120px" }} />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-3">
              <div className="site-heading text-center">
                <h2 className="title split-text">
                  The Foundation of Your Digital Transformation
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Work />
        <AboutV3 about={ourDNA.about} sectionClass="default-padding" />
      </div>

      <Footer />
    </>
  );
};
