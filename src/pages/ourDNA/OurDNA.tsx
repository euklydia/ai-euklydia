import { Header, MetaHead } from "../../components";
import { Footer } from "../../components/footer/Footer";
import { ourDNAHead } from "../../data/SEO";
import DNA from "../../assets/images/our-dna/euklydia-dna.jpg";
import MAPS from "../../assets/images/our-dna/maps.png";
import SUCCESS from "../../assets/images/our-dna/Success.jpg";
import START from "../../assets/images/our-dna/Calque_1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "./styles.css";
const cards = [
  {
    id: "00",
    title: "Greentech Innovation ",
    description:
      "The future belongs to companies that combine performance with responsibility. By integrating AI and cloud computing with eco-efficient solutions, we help reduce carbon footprints—partnering with tech leaders like Google and Meta to promote sustainable practices",
  },
  {
    id: "01",
    title: "Greentech Innovation",
    description:
      "The future belongs to companies that combine performance with responsibility. By integrating AI and cloud computing with eco-efficient solutions, we help reduce carbon footprints—partnering with tech leaders like Google and Meta to promote sustainable practices",
  },
  {
    id: "02",
    title: "Greentech Innovation",
    description:
      "The future belongs to companies that combine performance with responsibility. By integrating AI and cloud computing with eco-efficient solutions, we help reduce carbon footprints—partnering with tech leaders like Google and Meta to promote sustainable practices",
  },
  {
    id: "03",
    title: "Greentech Innovation",
    description:
      "The future belongs to companies that combine performance with responsibility. By integrating AI and cloud computing with eco-efficient solutions, we help reduce carbon footprints—partnering with tech leaders like Google and Meta to promote sustainable practices",
  },
];

export const OurDNA = () => {
  return (
    <>
      <MetaHead {...ourDNAHead} />
      <div className="smooth-scroll-container">
        <Header />
        <div className="sticky-background">
          <div className="row euklydia-dna">
            <div className="col-lg-5 euklydia-dna-img-container">
              <img src={DNA} alt="Euklydia DNA" />
              <div className="euklydia-dna-card">
                <span style={{ fontSize: "40px", fontWeight: "700" }}>15+</span>
                <span className="expert">years of AI expertsie</span>
              </div>
            </div>

            <div className="col-lg-7" style={{ paddingLeft: "32px" }}>
              <h2 className="title">
                <span style={{ fontSize: "96px" }}>Adapt</span>{" "}
                <strong style={{ color: "#1CB0A0", fontSize: "64px" }}>
                  or
                </strong>
                <p style={{ fontSize: "64px", fontWeight: "700" }}>
                  {" "}
                  Fall Behind
                </p>
              </h2>
              <p style={{ width: "450px " }}>
                Businesses today face rising complexity and inefficiencies.
                <br />
                Euklydia empowers them with AI to automate tasks, boost
                productivity, and transform experiences—ensuring agility,
                competitiveness, and growth in a world where adaptability means
                survival.
              </p>
            </div>
          </div>
        </div>

        <section
          style={{
            paddingBottom: "120px",
          }}
        >
          <div
            className="container mx-auto"
            style={{
              paddingTop: "120px",
              textAlign: "center",
              fontSize: "36px",
            }}
          >
            <h2>Begin Your AI Journey to Reinvent Your Business</h2>
            <p
              style={{
                fontSize: "24px",
                color: "rgba(95, 255, 232, 1)",
                width: "800px",
                margin: "auto",
              }}
            >
              We believe that true AI transformation is built on strong values.
              These foundational pillars guide every solution we design
            </p>
          </div>
          <div style={{ paddingTop: "80px" }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={"auto"}
              navigation
              loop={true}
              className="my-4 dna-container"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id} style={{ width: "400px" }}>
                  <div
                    className={`dna-card text-white ${
                      index % 2 === 1 ? "active" : ""
                    }`}
                    style={{
                      transition: "background-color 0.3s",
                      cursor: "pointer",
                    }}
                    // onMouseEnter={(e) =>
                    //   e.currentTarget.classList.replace(
                    //     `bg-${color}`,
                    //     `bg-dark`
                    //   )
                    // }
                    // onMouseLeave={(e) =>
                    //   e.currentTarget.classList.replace(
                    //     `bg-dark`,
                    //     `bg-${color}`
                    //   )
                    // }
                  >
                    <div>
                      <h5 className="dna-card-title">{card.title}</h5>
                      <p className="dna-card-description">{card.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <div className="row container mx-auto">
          <div className="col-lg-7" style={{ paddingRight: "32px" }}>
            <h2 className="title" style={{ width: "400px" }}>
              <span style={{ fontSize: "96px" }}>Building</span>{" "}
              <p style={{ fontSize: "48px", fontWeight: "400" }}>
                Your AI Success Together
              </p>
            </h2>
            <div>
              <div className="dna-success-container">
                <span>
                  <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                  Communication
                </span>

                <span>
                  <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                  Finance
                </span>
              </div>
              <div className="dna-success-container">
                <span>
                  <img src={START} alt="icon" style={{ width: "21px" }} /> Human
                  Resources
                </span>

                <span>
                  <img src={START} alt="icon" style={{ width: "21px" }} />{" "}
                  Operations
                </span>
              </div>
              <div className="dna-success-container">
                <span>
                  <img src={START} alt="icon" style={{ width: "21px" }} /> Human
                  Sales & Marketing
                </span>
              </div>
            </div>
            <p style={{ width: "400px", paddingTop: "16px" }}>
              Our expertise supports you at every stage of your digital
              transformation. With a tailored approach, we streamline your
              processes, unlock new
            </p>
          </div>

          <div className="col-lg-5">
            <img src={SUCCESS} alt="Euklydia DNA" />
          </div>
        </div>

        <section style={{ padding: "80px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "64px",
              fontWeight: "700",
              marginBottom: "80px",
            }}
          >
            Our Expertise
          </h2>
          <img src={MAPS} alt="Euklydia international" />
        </section>
      </div>

      <Footer />
    </>
  );
};
