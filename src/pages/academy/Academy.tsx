import { Header, MetaHead } from "../../components";
import { Footer } from "../../components/footer/Footer";
import { ourDNAHead } from "../../data/SEO";
import AIDRIVERLEADER from "../../assets/images/academy/AI-driven-leadership.png";
import DATASECURE from "../../assets/images/academy/Data-Management-Security.png";
import DeRiskingAI from "../../assets/images/academy/De-RiskingAI.png";
import START from "../../assets/images/our-dna/Calque_1.png";
import Person from "../../assets/images/academy/academy-taining.png";
import "./styles.css";

export const Academy = () => {
  return (
    <>
      <MetaHead {...ourDNAHead} />
      <div className="smooth-scroll-container">
        <Header />
        <section className="academy-hero-background">
          <div className="academy-container">
            <div className="academy-content">
              <h2>EUKLYDIA ACADEMY</h2>
              <p>
                Euklydia Academy ensures your teams and you remain empowered—not
                solely reliant on services—by offering ongoing platform access
                and consultancy, fostering consistent, evolving learning aligned
                with your business needs to effectively harness AI
              </p>
            </div>
          </div>
        </section>

        <section className="why-euklydia-academy academy-container">
          <div className="why-card-euklydia-academy">
            <p className="academy-number">01</p>
            <p className="academy-title">Lead the Change in the AI Era</p>
            <p className="academy-description ">
              Leadership is transforming. Euklydia Academy helps CEOS and
              executives gain the skills to lead effectively in today's
              fast-evolving, AI-driven market.
            </p>
          </div>
          <div className="why-card-euklydia-academy is-image-bg">
            <p className="academy-number">02</p>
            <p className="academy-title">
              Build a Culture of Trust and Compliance
            </p>
            <p className="academy-description ">
              Through our focus on AI ethics, GDPR, and cybersecurity, we help
              instill a shared culture of data responsibility—minimizing risks
              while accelerating your growth with confidence.
            </p>
          </div>
          <div className="why-card-euklydia-academy">
            <p className="academy-number">03</p>
            <p className="academy-title">
              Turn Your Team into a Strategic Asset
            </p>
            <p className="academy-description ">
              Euklydia Academy equips your employees with the skills to master
              AI, automate workflows, and handle sensitive data
              responsibly—making them active contributors to your business
              transformation.
            </p>
          </div>
        </section>

        <section className="academy-program academy-container">
          <h2 className="title-academy-program">Our Programs</h2>

          <div className="content-academy-programs">
            <div className="card-academy-program">
              <img
                src={AIDRIVERLEADER}
                alt="AI-Driven Leadership"
                className="img-academy-program"
              />
              <div className="card-academy-program-content">
                <h3>AI-Driven Leadership</h3>
                <p className="program-description">
                  Develop effective digital leadership in the face of
                  technological changes and data management.  Leaders, managers,
                  innovation heads: learn to lead hybrid teams (humans + AI),
                  make data-driven decisions, and drive change while securing
                  your data.
                </p>
                <h4>Benefits:</h4>
                <div className="benifits-content">
                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Stay Relevant
                  </span>
                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Lead with Confidence
                  </span>

                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Future-Proof Your Career
                  </span>
                </div>
              </div>
            </div>

            <div className="card-academy-program">
              <img
                src={DATASECURE}
                alt="Data Management & Security"
                className="img-academy-program"
              />
              <div className="card-academy-program-content">
                <h3>Data Management & Security</h3>
                <p className="program-description">
                  Leverage your data securely, in compliance with GDPR.
                  <br /> Master data flows, legal obligations, and best
                  practices in cybersecurity to minimize risks and build
                  customer trust.
                </p>
                <h4>Benefits:</h4>
                <div className="benifits-content">
                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Protect Your Business
                  </span>
                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Ensure GDPR Compliance
                  </span>

                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Build Customer Trust
                  </span>
                </div>
              </div>
            </div>

            <div className="card-academy-program">
              <img
                src={DeRiskingAI}
                alt="De-Risking AI"
                className="img-academy-program"
              />
              <div className="card-academy-program-content">
                <h3>De-Risking AI – Building a Responsible Roadmap</h3>
                <p className="program-description">
                  Structure your AI projects with method, compliance, and data
                  security.
                  <br /> Create ethical, robust, and scalable AI strategies,
                  while minimizing security risks in your projects.
                </p>
                <h4>Benefits:</h4>
                <div className="benifits-content">
                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Build Trustworthy AI
                  </span>
                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Avoid Costly Mistakes
                  </span>

                  <span>
                    <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                    Scale with Confidence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="what-if-trainning academy-container">
          <h2 className="what-if-training-title">
            What if training <br />
            <span>became your first consulting lever?</span>
          </h2>
          <p className="description-what-if-training">
            At Euklydia, training is not just about skill acquisition. It
            becomes a key lever for sustainable transformation, helping you
            throughout your evolution in data, AI, and cybersecurity.
          </p>
          <h3 className="subtitle-section-what-if">
            At the end of each program you benefit from:
          </h3>

          <div className="what-if-training-content">
            <div className="what-if-training-card-img">
              <img src={Person} alt="" />
            </div>
            <div className="what-if-training-card">
              <p className="card-title">‍A personalized audit:</p>
              <p className="card-content">
                In-depth analysis of your current processes and recommendations
                to secure your data and optimize your AI projects.
              </p>
            </div>
            <div className="what-if-training-card">
              <p className="card-title">AI strategic support:</p>
              <p className="card-content">
                Planning, implementation, and security of your AI projects at
                every stage for maximum impact.
              </p>
            </div>
          </div>

          <div className="what-if-training-content">
            <div className="what-if-training-card">
              <p className="card-title">‍A global skills development plan:</p>
              <p className="card-content">
                A clear roadmap to enhance the autonomy of your teams with a
                focus on ethical AI use and data protection.
              </p>
            </div>

            <div className="what-if-training-card">
              <p className="card-title">
                A sector-specific consulting mission:
              </p>
              <p className="card-content">
                Tailored solutions to address the unique challenges of your
                industry, with recommendations on automation and data security.
              </p>
            </div>

            <div className="what-if-training-card">
              <p className="card-title">Our method:</p>
              <p className="card-content">
                From awareness to concrete action, we guide you through every
                step of your transformation, placing automation and data
                security at the heart of your strategy.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
