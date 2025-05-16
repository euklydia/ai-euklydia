import { Header, MetaHead } from "../../components";
import { ourDNAHead } from "../../data/SEO";
import { Footer } from "../../components/footer/Footer";
import CHECK from "../../assets/images/our-value/Validé.png";
import CostEfficiency from "../../assets/images/our-value/Cost-efficiency.png";
import TimeOptimization from "../../assets/images/our-value/Time-optimization.jpg";
import RISKMITIGATION from "../../assets/images/our-value/Risk-mitigation.jpg";
import BOLICIER from "../../assets/images/our-value/bolicier.png";
import Different from "../../assets/images/our-value/Tableau.png";
import "./styles.css";

export const OurValue = () => {
  return (
    <>
      <MetaHead {...ourDNAHead} />
      <div className="smooth-scroll-container">
        <Header />

        <section className="ourValue-background">
          <div className="ourValue-container">
            <h2 style={{ fontSize: "64px", fontWeight: "700" }}>
              <span>Performance</span>
              <br /> Meets Responsibility
            </h2>
            <p style={{ fontSize: "24px" }}>
              At Euklydia, we believe in a future where technology and ecology
              go hand in hand. Our technology is born from a deep commitment to
              sustainability and scientific excellence.
            </p>
          </div>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <div className="cards-ourValue-hero">
            <div className="card-ourValue-hero">
              <img src={BOLICIER} alt="" />
              <p>Scalability</p>
            </div>

            <div className="card-ourValue-hero">
              <img src={BOLICIER} alt="" />
              <p>Sustainability</p>
            </div>

            <div className="card-ourValue-hero">
              <img src={BOLICIER} alt="" />
              <p>CSR</p>
            </div>
          </div>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <h2 className="section-title-ourvalue">
            1-Scalable by Nature, Built to Grow With You
          </h2>
          <p className="section-description-ourValue">
            At Euklydia, scalability isn't just about tech it's a business
            model.
            <br />
            Our AI ecosystem lets you start small and expand fast across
            departments, markets, and regions ,without multiplying costs or
            complexity.
          </p>
          <div className="content-ourValue-scalable">
            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Modular architecture</p>
              </div>
            </div>

            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>No-code tools</p>
              </div>
            </div>
          </div>

          <div className="content-ourValue-scalable">
            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>SaaS model with multi- sector reach</p>
              </div>
            </div>

            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Lean ops, high ROI</p>
              </div>
            </div>
          </div>

          <p className="section-description-ourValue">
            Whether you're a lean startup or a global group, we grow with you,
            not against you.
          </p>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <h2 className="section-title-ourvalue">
            2-Sustainability at the Core
          </h2>
          <p className="section-description-ourValue">
            AI that powers growth without environmental cost. <br />
            From energy-efficient models to green infrastructure, our platforms
            help businesses scale without scaling emissions.
          </p>
          <div className="content-ourValue-scalable">
            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Eco-designed comput</p>
              </div>
            </div>

            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Federated learning</p>
              </div>
            </div>
          </div>

          <div className="content-ourValue-scalable">
            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Low-energy AI pipelines</p>
              </div>
            </div>

            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Lean ops, high ROI</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <h2 className="section-title-ourvalue">
            3- CSR that Elevates People and Ethics
          </h2>
          <p className="section-description-ourValue">
            We embed responsibility at every level: from employee well-being to
            inclusive design and social impact.
          </p>

          <div className="content-ourValue-scalable">
            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Mental health & burnout monitoring</p>
              </div>
            </div>

            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>GDPR + federated data compliance</p>
              </div>
            </div>
          </div>

          <div className="content-ourValue-scalable">
            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Inclusive design for skill retention</p>
              </div>
            </div>

            <div className="card-scalable">
              <div className="card-scalable-img">
                <img src={CHECK} alt="" />
              </div>
              <div className="card-scalable-text">
                <p>Skills retention</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <h2 className="ourValue-AI-path-title">
            Your <span>AI path</span>
            <br />
            to Profitable business
          </h2>
          <p className="ourValue-AI-path-description">
            In today's market, where budgets are tighter than ever, businesses
            can't afford guesswork.
            <br /> Our AI solutions aren't just smart, they're scientifically
            grounded, strategically deployed, and purpose-built to cut risks,
            reduce costs, and save time across every business pillar.
            <br />
            From predictive insights to responsible automation, our platform
            turns complexity into clarity affordably and at scale
          </p>

          <div className="ourValue-AI-path-cards">
            <div className="ourValue-AI-path-card">
              <img src={CostEfficiency} alt="coast-efficiency" />
              <div className="ourValue-AI-path-card-text">
                <div>
                  <h3 className="title-ourValue-AI-path-card-text">
                    Cost efficiency :
                  </h3>
                  <p className="title-ourValue-AI-path-card-description">
                    Our AI models identify inefficiencies before they impact
                    your budget, optimizing spend, minimizing unnecessary
                    workflows, and reallocating resources with precision.
                  </p>
                </div>
                <span>01</span>
              </div>
            </div>

            <div className="ourValue-AI-path-card">
              <img src={TimeOptimization} alt="coast-efficiency" />
              <div className="ourValue-AI-path-card-text">
                <div>
                  <h3 className="title-ourValue-AI-path-card-text">
                    Time optimization :
                  </h3>
                  <p className="title-ourValue-AI-path-card-description">
                    Real-time predictive diagnosis enables faster, sharper
                    decision-making. By automating repetitive tasks and
                    surfacing the right insight at the right moment, we free
                    your teams to focus on high-value actions.
                  </p>
                </div>
                <span>02</span>
              </div>
            </div>

            <div className="ourValue-AI-path-card">
              <img src={RISKMITIGATION} alt="coast-efficiency" />
              <div className="ourValue-AI-path-card-text">
                <div>
                  <h3 className="title-ourValue-AI-path-card-text">
                    Risk mitigation :
                  </h3>
                  <p className="title-ourValue-AI-path-card-description">
                    Euklydia simulates future business scenarios to anticipate
                    bottlenecks, market shifts, and operational threats. Our
                    models don't just react they help you avoid risks before
                    they materialize
                  </p>
                </div>
                <span>03</span>
              </div>
            </div>
          </div>

          <p className="initiative-text-ourValue-AI-path">
            Less money spent on studies, fewer failed initiatives, and a faster
            path to measurable outcomes.
          </p>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <h2 className="section-promise-title">Our Promise :</h2>
          <h3 className="section-promise-subtitle">
            AI That Works for You, not against you
          </h3>

          <p className="section-promise-call-to-action-text">
            We are not <strong>another AI</strong> vendor promising you a
            black-box miracle.
            <br />
            We're your <strong>strategic co-pilot</strong>, combining science,
            business acumen, and human-centered design
          </p>

          <div className="our-promise-cards-content">
            <div className="our-promise-card">
              <p>Empower Your Teams</p>
            </div>

            <div className="our-promise-card">
              <p>Reduce Risks and carbon Emissions</p>
            </div>

            <div className="our-promise-card">
              <p>Create Measurable, Sustainable Business impact</p>
            </div>
          </div>
        </section>

        <section className="ourValue-container section-spacing-ourValue">
          <h2 className="section-why-diffrent-title">
            Why Euklydia Is Different ?
          </h2>

          <div>
            <img src={Different} alt="" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
