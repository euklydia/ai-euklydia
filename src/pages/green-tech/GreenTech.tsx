import { Header, MetaHead } from "../../components";
import { Footer } from "../../components/footer/Footer";
import { homeHead } from "../../data/SEO";
import AboutV3 from "../../components/about/AboutV3";
import { greenTech } from "../../data/content/green-tech.js";
import ServicesV3 from "../../components/services/ServicesV3.js";

export const GreenTech = () => {
  return (
    <>
      <MetaHead {...homeHead} />

      <div className="smooth-scroll-container">
        <Header />
        <div style={{ paddingTop: "180px" }} />
        <AboutV3 about={greenTech.about} />
        <section className="container ">
          <div
            className="mx-auto text-center"
            style={{ maxWidth: "990px", paddingBottom: "80px" }}
          >
            <h2 className="title">Our vision: Shaping a Greener AI</h2>
            <p className="white">
              Our vision: Shaping a Greener AI Our commitment to sustainability
              is driven by cutting-edge methods like
              <strong> transfer learning</strong> and
              <strong> federated learning</strong>. These approaches allow us to
              process vast amounts of data in real-time with minimal energy
              consumption, reducing the need for energy-hungry data centers.
            </p>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6 d-flex flex-column align-items-center">
              <div
                style={{
                  maxWidth: "350px",
                  maxHeight: "350px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="/ai-euklydia/images/green-tech/Transfer-Learning.gif"
                  alt="Transfer Learning"
                />
              </div>
              <div style={{ maxWidth: "450px" }}>
                <h3 className="text-center">Transfer Learning</h3>
                <p>
                  By leveraging pre-trained models, we minimize the need for
                  intensive computations and the energy-consuming training
                  process.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex flex-column align-items-center">
              <div
                style={{
                  maxWidth: "350px",
                  maxHeight: "350px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="/ai-euklydia/images/green-tech/Federated-Learning.gif"
                  alt="Transfer Learning"
                />
              </div>
              <div style={{ maxWidth: "450px" }}>
                <h3 className="text-center">Federated Learning</h3>
                <p>
                  This decentralized approach enables collaborative training
                  across devices, eliminating energy-intensive data centers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ServicesV3
          sectionClass="default-padding"
          hasTitle={true}
          impacts={greenTech.impacts}
        />
      </div>
      <Footer />
    </>
  );
};
