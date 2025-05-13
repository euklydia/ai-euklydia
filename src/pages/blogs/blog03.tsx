import { Header } from "../../components";
import { Footer } from "../../components/footer/Footer";

export const Blog03 = () => {
  return (
    <div>
      <div className="smooth-scroll-container">
        <Header />

        <section className="euklydia-blog-background">
          <div className="container-blog">
            <h2 className="title-blog left">Coming soon</h2>

            {/* <div className="blog-content">
              <div className="blog-description blog-transparent-bg flex-blog-equal">
                <h3 className="subtitle-blog white">
                  Euklydia’s Approach to CSR and Well-Being
                </h3>
                <div className="linear-notRounded-bg flex-1">
                  <p>
                    At Euklydia, we believe that innovation must serve people,
                    not replace them.
                    <br /> In a world where technology is reshaping our daily
                    lives, we are convinced that artifi- cial intelligence (AI)
                    can — and must — foster human flourishing.
                    <br /> Discover how Euklydia places CSR at the heart of its
                    AI solutions to build a more ba- lanced, human-centered
                    future.
                  </p>
                </div>
              </div>
              <div className="blog-image">
                <img src={IMAGE01} alt="" />
                <div className="bg-image-blog"></div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
