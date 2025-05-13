import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components";
import IMAGE01 from "../../assets/images/blog/02/Photo-1.png";
import IMAGE02 from "../../assets/images/blog/02/Photo-2.png";
import IMAGE03 from "../../assets/images/blog/02/Photo-3.png";
import IMAGE04 from "../../assets/images/blog/02/Photo-4.jpg";
import ICON01 from "../../assets/images/blog/02/icone-1.png";
import ICON02 from "../../assets/images/blog/02/icone-2.png";
import ICON03 from "../../assets/images/blog/02/icone-3.png";
import ICON04 from "../../assets/images/blog/02/icone-4.png";
import ICON05 from "../../assets/images/blog/02/icone-5.png";
import ICON06 from "../../assets/images/blog/02/icone-6.png";
import WITHBAYA from "../../assets/images/blog/02/with-baya.png";
import "./styles.css";

export const Blog02 = () => {
  return (
    <div>
      <div className="smooth-scroll-container">
        <Header />

        <section className="euklydia-blog-background">
          <div className="container-blog">
            <h2 className="title-blog left">When AI Supports Mental Health</h2>

            <div className="blog-content">
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
            </div>
          </div>
        </section>

        <section className="euklydia-blog-background blog-spacing-section">
          <div className="container-blog">
            <h2 className="title-blog">Human-Augmented AI: Our Philosophy</h2>

            <div className="blog-content">
              <div className="blog-description flex-blog-equal">
                <p>
                  We believe in human-augmented AI — not the reverse.
                  <br /> One of the clearest benefits of our tools is their
                  ability to optimize time spent on repe- titive tasks. This
                  efficiency allows our teams to focus on what truly matters:
                  creativity, strategic thinking, collaboration... and per-
                  sonal well-being.
                  <br />
                  <br /> By integrating AI into everyday processes, we promote
                  genuine work-life balance — a founding value of Euklydia's
                  corporate culture.
                </p>
              </div>
              <div className="blog-image">
                <img src={IMAGE02} alt="" />
                <div className="bg-image-blog"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="euklydia-blog-background blog-spacing-section">
          <div className="container-blog">
            <h2 className="title-blog left">AI as a Catalyst for CSR</h2>

            <div className="blog-description">
              <p>
                At Euklydia, workplace well-being relies on a unique synergy
                between human expertise and arti- ficial intelligence.
                <br /> Led by experts like Zied Arfaoui, we design HR strategies
                focused on listening, balance, and pre- vention.
                <br /> Our distinctiveness goes further: we use AI not only as a
                performance driver but as a true engine for CSR transformation.
              </p>
            </div>

            <div className="card-catalyst-container">
              <div className="card-catalyst-content">
                <img src={ICON01} alt="" />
                <p>Detect early signs of psychosocial risks</p>
              </div>
              <div className="card-catalyst-content">
                <img src={ICON02} alt="" />
                <p>Streamline work- flows</p>
              </div>
              <div className="card-catalyst-content">
                <img src={ICON03} alt="" />
                <p>Boost collaboration</p>
              </div>
            </div>
          </div>
        </section>

        <section className="euklydia-blog-background blog-spacing-section">
          <div className="container-blog">
            <h2 className="title-blog left">AI as a Catalyst for CSR</h2>

            <div className="card-catalyst-container">
              <div className="card-catalyst-content">
                <img src={ICON04} alt="" />
                <p>Free up time for acti- vities with high human value</p>
              </div>
              <div className="card-catalyst-content">
                <img src={ICON05} alt="" />
                <p>Promote inclusion through anonymized monitoring tools</p>
              </div>
              <div className="card-catalyst-content">
                <img src={ICON06} alt="" />
                <p>
                  Continuously measure the human impact of strategic decisions
                </p>
              </div>
            </div>

            <div className="blog-description">
              <p>
                AI as a Catalyst for CSR Promote inclusion through anonymized
                monitoring tools Free up time for acti- vities with high human
                value This dynamic fusion between human intelligence and AI
                enables us to translate our social com- mitments into concrete,
                measurable, and sustainable actions, placing mental well-being
                at the core of our organization.
              </p>
            </div>
          </div>
        </section>

        <section className="euklydia-blog-background blog-spacing-section">
          <div className="container-blog">
            <h2 className="title-blog left">AI as a Catalyst for CSR</h2>

            <div className="blog-description">
              <p>
                AI as a Catalyst for CSR Promote inclusion through anonymized
                monitoring tools Free up time for acti- vities with high human
                value This dynamic fusion between human intelligence and AI
                enables us to translate our social com- mitments into concrete,
                measurable, and sustainable actions, placing mental well-being
                at the core of our organization.
              </p>
            </div>

            <div className="img-with-baya-blog">
              <img src={WITHBAYA} alt="" />
            </div>
          </div>
        </section>

        <section className="euklydia-blog-background blog-spacing-section">
          <div className="container-blog">
            <h2 className="title-blog">Building a Human-Centered Future</h2>

            <div className="blog-content">
              <div className="blog-description">
                <p>
                  We believe that the future of business lies in ethical AI and
                  — above all — in fulfilled, empowered teams.
                  <br /> Our mission is to prove that powerful tech- nological
                  solutions can be built without sa- crificing humanity,
                  empathy, and balance.
                  <br />
                  <br /> At Euklydia, technology doesn't replace people — it
                  reveals and empowers them.
                </p>
              </div>
              <div className="blog-image">
                <img src={IMAGE03} alt="" />
                <div className="bg-image-blog"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="euklydia-blog-background blog-spacing-section">
          <div className="container-blog">
            <div className="blog-content">
              <div className="call-to-action-blog-description">
                <div className="blog-description">
                  <p>
                    At Euklydia, we are building a future where technology
                    enhances, not replaces, huma- nity.
                    <br />
                    Ready to transform your organization with human-centered AI
                    and a strong CSR foun- dation?
                  </p>
                </div>
                <h2 className="call-to-action">
                  <strong>Contact us today</strong> to start the journey.
                </h2>
              </div>
              <div className="blog-image">
                <img src={IMAGE04} alt="" />
                <div className="bg-image-blog"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
