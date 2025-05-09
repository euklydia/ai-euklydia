import { Header } from "../../components";
import { Footer } from "../../components/footer/Footer";
import BUSINES from "../../assets/images/services/Business.jpg";
import HUMANRESSOURCES from "../../assets/images/services/Human-resources.jpg";
import MARKETING from "../../assets/images/services/sales-and-marketing.jpg";
import OPERATION from "../../assets/images/services/operation.jpg";
import Table01 from "../../assets/images/services/table-01-ai-agent.png";
import Table02 from "../../assets/images/services/table-02-ai-agent.png";
import AIAGENT01 from "../../assets/images/services/ai-agent-01.jpg";
import AIAGENT02 from "../../assets/images/services/ai-agent-02.jpg";
import "./styles.css";
import { Link } from "react-router-dom";

export const Service = () => {
  return (
    <div>
      <div className="smooth-scroll-container">
        <Header />

        <div className="service-hero-background">
          <div className="service-container">
            <div
              className="hero-service-description"
              style={{ paddingLeft: "32px" }}
            >
              <h2 className="title">
                <span style={{ fontSize: "64px" }}>Reinventing</span>{" "}
                <p style={{ fontSize: "48px", fontWeight: "700" }}>
                  {" "}
                  Business <strong style={{ color: "#1CB0A0" }}>with AI</strong>
                </p>
              </h2>
              <p
                style={{
                  fontSize: "24px",
                  textAlign: "justify",
                }}
              >
                We help businesses across Africa and MENA lead the future using
                AI-driven transformation in the 4 key pillars of business:
                Strategy & Leadership, Marketing & Sales, Human Resources ,
                Operations and finance (coming soon).
              </p>
            </div>
          </div>
        </div>

        <section className="workflow-service-container">
          <h2>Our workflow: From Data to Impact</h2>
          <div className="cards-workflow-content">
            <div className="card-row">
              <div className="card-workflow-service">
                <img src={BUSINES} alt="business" />
                <div className="workflow-description">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "900",
                      color: "#5FFFE8",
                      lineHeight: "40px",
                    }}
                  >
                    Strategy & Leadership
                  </p>
                </div>
              </div>
              <div className="card-workflow-service">
                <img src={HUMANRESSOURCES} alt="Human resources" />
                <div className="workflow-description">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "900",
                      color: "#5FFFE8",
                      lineHeight: "40px",
                    }}
                  >
                    Marketing & Sales
                  </p>
                </div>
              </div>
            </div>

            <div className="card-row">
              <div className="card-workflow-service">
                <img src={MARKETING} alt="sales and marketing" />
                <div className="workflow-description">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "900",
                      color: "#5FFFE8",
                      lineHeight: "40px",
                    }}
                  >
                    Human Resources
                  </p>
                </div>
              </div>
              <div className="card-workflow-service">
                <img src={OPERATION} alt="Operation" />
                <div className="workflow-description">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "900",
                      color: "#5FFFE8",
                      lineHeight: "40px",
                    }}
                  >
                    Operations and finance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-favorite-container">
          <h2>
            <strong style={{ color: "#5FFFE8" }}>Client</strong> Favorite
          </h2>
          <p className="favorite-subtitle">Proven. Powerful. Preferred.</p>
          <div className="client-favorite-content">
            <div className="content-card-favorite-absolute">
              <p
                style={{
                  fontSize: "64px",
                  fontWeight: "700",
                  color: "#004C4A",
                  lineHeight: "100%",
                  width: "306px",
                  marginBottom: "8px",
                }}
              >
                AI Agent
              </p>

              <p
                style={{
                  fontSize: "48px",
                  color: "#004C4A",
                  fontWeight: "700",
                  lineHeight: "100%",
                  width: "306px",
                }}
              >
                For Website Engagement
              </p>
              <div className="absolute-number">1</div>
            </div>
            <div className="card-favorite-content">
              <img src={AIAGENT01} alt="For Website Engagement" />
            </div>
          </div>
          <p className="favorite-subtitle-turn">
            Turn Confusion Into Conversion
          </p>
          <p className="favorite-description">
            Unlike live chat, this agent interacts with users in real time,
            guiding them through content, answering questions, recommending
            services, and adapting to their emotional and behavioral cues.
          </p>
        </section>

        <div className="ai-agent-table-container">
          <img
            src={Table02}
            alt="euklydia AI agent"
            className="ai-agent-table"
          />
        </div>

        <section className="service-Benefits">
          <h2>Benefits :</h2>
          <div className="service-benifits-container">
            <div>
              <p className="benifits-title">+89%</p>
              <p className="benifits-subtitle">Average Automation</p>
            </div>

            <div>
              <p className="benifits-title">+42%</p>
              <p className="benifits-subtitle">Customer Satisfaction</p>
            </div>

            <div>
              <p className="benifits-title">+30%</p>
              <p className="benifits-subtitle"> Conversion rates</p>
            </div>

            <div>
              <p className="benifits-title">+30%</p>
              <p className="benifits-subtitle">Sales & Revenue</p>
            </div>
          </div>
        </section>

        <div className="section-agents-benefits">
          <div className="benifits-agents-content">
            <p>
              Let's build an AI Agent that sells, supports, and speaks like your
              brand.
            </p>
          </div>
          <Link to={"/contact"} className="btn-book-demo">
            <p>Book a Demo</p>
          </Link>
        </div>

        <section className="client-favorite-container">
          <div className="client-favorite-content">
            <div className="content-card-favorite-absolute">
              <p
                style={{
                  fontSize: "64px",
                  fontWeight: "700",
                  color: "#004C4A",
                  lineHeight: "100%",
                  width: "306px",
                  marginBottom: "8px",
                }}
              >
                AI Business
              </p>

              <p
                style={{
                  fontSize: "48px",
                  color: "#004C4A",
                  fontWeight: "700",
                  lineHeight: "100%",
                }}
              >
                Diagnosis Platform
              </p>
              <div className="absolute-number">2</div>
            </div>
            <div className="card-favorite-content">
              <img src={AIAGENT02} alt="For Website Engagement" />
            </div>
          </div>
          <p className="favorite-subtitle-turn">Assess. Align. Accelerate.</p>
          <p className="favorite-description">
            A strategic tool designed to evaluate your business's readiness for
            AI transformation. It provides a full 360° scan of your
            organizational agility, alignment with sustainability (CSR), and the
            digital maturity of your core pillars: sales, marketing, HR, Finance
            and operations.
          </p>
        </section>

        <div className="ai-agent-table-container">
          <img
            src={Table01}
            alt="euklydia AI agent"
            className="ai-agent-table"
          />
        </div>

        <section className="service-Benefits">
          <h2>Key Benefits :</h2>
          <div className="service-benifits-container">
            <div>
              <p className="benifits-title">+30%</p>
              <p className="benifits-subtitle">Increase in AI ROI</p>
            </div>

            <div>
              <p className="benifits-title">+50%</p>
              <p className="benifits-subtitle">faster implementation time</p>
            </div>

            <div>
              <p className="benifits-title">+40%</p>
              <p className="benifits-subtitle">
                lower risk of AI project failure
              </p>
            </div>
          </div>
        </section>

        <div className="section-agents-benefits">
          <div className="benifits-agents-content">
            <p>Ready to See the Difference?</p>
          </div>
          <Link to={"/contact"} className="btn-book-demo">
            <p>Book a Demo</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
