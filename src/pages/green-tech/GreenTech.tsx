import { Header, MetaHead } from "../../components";
import { Footer } from "../../components/footer/Footer";
import { homeHead } from "../../data/SEO";
import GREEN from "../../assets/images/green-tech/green-tech-img.jpg";
import GREENTECH00 from "../../assets/images/green-tech/green-tech-00.png";
import GREENTECH01 from "../../assets/images/green-tech/green-tech-01.png";
import GREENTECH02 from "../../assets/images/green-tech/green-tech-02.png";
import GREENTECH03 from "../../assets/images/green-tech/green-tech-03.png";
import GREENTECH04 from "../../assets/images/green-tech/green-tech-04.png";
import GREENTECH05 from "../../assets/images/green-tech/green-tech-05.png";
import GREENTECH06 from "../../assets/images/green-tech/green-tech-06.png";
import GREENTECH07 from "../../assets/images/green-tech/green-tech-07.png";
import GREENTECH08 from "../../assets/images/green-tech/green-tech-08.png";
import "./styles.css";

export const GreenTech = () => {
  return (
    <>
      <MetaHead {...homeHead} />

      <div className="smooth-scroll-container">
        <Header />
        <section className="greenTech-background">
          <div className="greenTech-container ">
            <h2 style={{ fontSize: "48px", fontWeight: "700" }}>
              <span style={{ fontSize: "80px" }}>Championing</span>
              <br /> Sustainable
              <span style={{ color: "rgba(28, 176, 160, 1)" }}> Tech</span>
            </h2>
            <p style={{ fontSize: "24px" }}>
              At Euklydia, we believe in a future where technology and ecology
              go hand in hand. Our technology is born from a deep commitment to
              sustainability and scientific excellence.
            </p>
          </div>
        </section>

        <section
          className="designing-greener-container mx-auto"
          style={{ paddingTop: "120px" }}
        >
          <h2 style={{ fontSize: "64px" }}>Designing a Greener AI</h2>
          <div className="greean-content">
            <div className="Greener-card">
              <h3 style={{ fontSize: "48px", color: "#5FFFE8" }}>What is</h3>
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#5FFFE8",
                }}
              >
                Transfer Learning?
              </h4>
              <p>
                Transfer Learning By leveraging pre-trained models, we minimize
                the need for intensive training cycles, significantly reducing
                the energy required to build intelligent systems.
              </p>
            </div>
            <div className="Greener-xl-card">
              <img src={GREEN} alt="green tech" />
              <div className="content-description-greener">
                <p>
                  Our goal is to help companies integrate smarter, greener AI
                  into their workflows—quickly, securely, and responsibly.
                </p>
              </div>
            </div>
            <div className="Greener-card">
              <h3 style={{ fontSize: "48px", color: "#5FFFE8" }}>What is</h3>
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#5FFFE8",
                }}
              >
                Federated Learning?
              </h4>
              <p>
                Federated Learning This decentralized approach enables
                collaborative learning across devices, eliminating the need for
                energy-hungry centralized data centers—while keeping data local
                and secure.
              </p>
            </div>
          </div>
        </section>

        <section className="Green-approach">
          <div style={{ marginBottom: "80px" }}>
            <h2 style={{ fontSize: "64px" }}>Business Impact</h2>
            <h3
              style={{
                fontSize: "32px",
                color: "#5FFFE8",
                paddingBlock: "8px",
              }}
            >
              of Our Green AI Approach
            </h3>
            <p style={{ fontSize: "20px" }}>
              We are leading a Green Tech revolution—proving that the future of
              business lies in intelligent systems that serve both performance
              and purpose.
            </p>
          </div>

          <div className="business-impact-cards">
            <div className="business-impact-card">
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  lineHeight: "36px",
                  marginBottom: "16px",
                }}
              >
                Reduced Carbon Footprint
              </p>
              <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                By minimizing data movement and optimizing resource use, our AI
                helps your business lower its carbon emissions, supporting your
                environmental goals.
              </p>
            </div>
            <div className="business-impact-card imact-bg-01">
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  lineHeight: "36px",
                  marginBottom: "16px",
                }}
              >
                Lower Energy Costs
              </p>
              <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                Our federated and transfer learning techniques significantly
                reduce computing power needs, cutting energy consumption and
                cloud costs.
              </p>
            </div>
          </div>

          <div className="business-impact-cards">
            <div className="business-impact-card imact-bg-02">
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  lineHeight: "36px",
                  marginBottom: "16px",
                }}
              >
                Boosted RSE Performance
              </p>
              <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                By minimizing environmental impact and promoting data ethics,
                our AI aligns naturally with your Corporate Social
                Responsibility (CSR) strategy.
              </p>
            </div>
            <div className="business-impact-card">
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  lineHeight: "36px",
                  marginBottom: "16px",
                }}
              >
                ESG1000 Alignment
              </p>
              <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                Euklydia helps your company meet key ESG (Environmental, Social,
                Governance) benchmarks—supporting sustainability reports and
                investor expectations.
              </p>
            </div>
          </div>

          <div className="business-impact-cards">
            <div className="business-impact-card">
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  lineHeight: "36px",
                  marginBottom: "16px",
                }}
              >
                Data Privacy by Design
              </p>
              <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                With federated learning, sensitive data stays on local
                devices—enhancing privacy, reducing risk, and ensuring
                compliance with data protection regulations
              </p>
            </div>
            <div className="business-impact-card imact-bg-03">
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  lineHeight: "36px",
                  marginBottom: "16px",
                }}
              >
                Faster Time-to-Value
              </p>
              <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                Transfer learning accelerates AI implementation, letting you
                reuse existing knowledge and models—saving time, resources, and
                budget.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "180px" }}>
          <div
            className="mx-auto container"
            style={{
              textAlign: "center",
              padding: "20px 0px",
              background: "#1CB0A0",
              marginBottom: "80px",
            }}
          >
            <h2 style={{ fontSize: "40px", fontWeight: "800" }}>
              Impact in Action: Real-World Results
            </h2>
            <h3
              style={{ color: "#5FFFE8", fontSize: "40px", fontWeight: "400" }}
            >
              of Our Green Tech Solutions
            </h3>
          </div>

          <div className="green-tech-solution-content mx-auto">
            <div className="header-green-tech-solution">
              <h4>
                Smarter <strong>Data Management</strong>
              </h4>
            </div>
            <div className="cards-green-tech-solution">
              <div className="card-green-tech-solution">
                <img src={GREENTECH00} alt="reduction co2" />
                <p className="green-title">
                  Up to <span>40%</span> reduction
                </p>
                <p className="description">in energy use in data operations.</p>
              </div>
              <div className="card-green-tech-solution">
                <img src={GREENTECH01} alt="reduction co2" />
                <p className="green-title">
                  Up to <span>30%</span> less storage
                </p>
                <p className="description">
                  needed by organizing and processing only essential data.
                </p>
              </div>
              <div className="card-green-tech-solution">
                <img src={GREENTECH02} alt="reduction co2" />
                <p className="green-title">
                  <span>Lightweight</span> AI systems
                </p>
                <p className="description">
                  that avoid the need for heavy, costly infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="green-tech-solution-content mx-auto">
            <div className="header-green-tech-solution">
              <h4>
                Faster <strong>More Efficient Operations</strong>
              </h4>
            </div>
            <div className="cards-green-tech-solution">
              <div className="card-green-tech-solution">
                <img src={GREENTECH03} alt="reduction co2" />
                <p className="green-title">
                  Up to <span>60%</span> faster
                </p>
                <p className="description">
                  AI solutions implemented, delivering results sooner.
                </p>
              </div>
              <div className="card-green-tech-solution">
                <img src={GREENTECH04} alt="reduction co2" />
                <p className="green-title">
                  Up to <span>35%</span> reduction
                </p>
                <p className="description">in computing resources required.</p>
              </div>
              <div className="card-green-tech-solution">
                <img src={GREENTECH05} alt="reduction co2" />
                <p className="green-title">
                  <span>Tools built</span>
                </p>
                <p className="description">
                  for speed and simplicity, improving everyday workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="green-tech-solution-content mx-auto">
            <div className="header-green-tech-solution">
              <h4>
                A Real Boost <strong>to Your CSR & ESG Strategy</strong>
              </h4>
            </div>
            <div className="cards-green-tech-solution">
              <div className="card-green-tech-solution">
                <img src={GREENTECH06} alt="reduction co2" />
                <p className="green-title">
                  Up to <span>50%</span> reduction
                </p>
                <p className="description">
                  in digital-related carbon emissions.
                </p>
              </div>
              <div className="card-green-tech-solution">
                <img src={GREENTECH07} alt="reduction co2" />
                <p className="green-title">
                  <span>Lowered</span>
                </p>
                <p className="description">emissions from data transmission</p>
              </div>
              <div className="card-green-tech-solution">
                <img src={GREENTECH08} alt="reduction co2" />
                <p className="green-title">
                  <span>AI digital</span>
                </p>
                <p className="description">
                  transformation that's sustainable, ethical, and future-proof.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
