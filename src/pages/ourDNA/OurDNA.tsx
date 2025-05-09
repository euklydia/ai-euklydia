import { Header, MetaHead } from "../../components";
import { Footer } from "../../components/footer/Footer";
import { ourDNAHead } from "../../data/SEO";
import MAPS from "../../assets/images/our-dna/maps.png";
import SUCCESS from "../../assets/images/our-dna/Success.jpg";
import START from "../../assets/images/our-dna/Calque_1.png";
import GreentechInnovation from "../../assets/images/our-dna/Greentech-Innovation.png";
import Scalability from "../../assets/images/our-dna/Scalability-at-OurCore.png";
import ScienceDriven from "../../assets/images/our-dna/Science-Driven.png";
import LifeTimeLearning from "../../assets/images/our-dna/Lifelong Learning.png";
import Diversity from "../../assets/images/our-dna/Diversity-&-Inclusion.png";
import Agility from "../../assets/images/our-dna/Agility-&-Creativity.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "./styles.css";
import CountUp from "react-countup";
const cards = [
  {
    id: "00",
    title: "Greentech Innovation",
    imgsrc: GreentechInnovation,
    description:
      "The future belongs to companies that combine performance with responsibility. By integrating AI and cloud computing with eco-efficient solutions, we help reduce carbon footprints—partnering with tech leaders like Google and Meta to promote sustainable practices",
  },
  {
    id: "01",
    title: "Scalability at Our Core",
    imgsrc: Scalability,
    description:
      "Scalability is at the heart of every AI solution we build. We design systems that grow with your business—adapting to new challenges, increasing data volumes, and evolving technologies without compromising performance or sustainability.",
  },
  {
    id: "02",
    title: "Science-Driven",
    imgsrc: ScienceDriven,
    description:
      "We bridge the gap between scientific innovation and business impact. With R&D at our core, we transform cutting-edge research into scalable AI solutions—proving that every successful company is built on scientific excellence.",
  },
  {
    id: "03",
    title: "Lifelong Learning",
    imgsrc: LifeTimeLearning,
    description:
      "Excellence is fueled by continuous learning. We invest in knowledge-sharing and train future generations to fully harness the power of AI and emerging technologies.",
  },
  {
    id: "04",
    title: "Diversity & Inclusion",
    imgsrc: Diversity,
    description:
      "Bold ideas come from diverse minds. We foster an inclusive culture where every perspective contributes to innovative, tailored solutions for our clients' unique challenges.",
  },
  {
    id: "05",
    title: "Agility & Creativity",
    imgsrc: Agility,
    description:
      "In an ever-changing world, adaptability is key. By blending innovation with data-driven strategy, we help you stay responsive to market shifts and emerging technologies.",
  },
];

export const OurDNA = () => {
  return (
    <>
      <MetaHead {...ourDNAHead} />
      <div className="smooth-scroll-container">
        <Header />
        <div className="sticky-background">
          <div className="euklydia-dna">
            {/* <div className="col-lg-5 euklydia-dna-img-container">
              <div className="euklydia-dna-card">
                <div style={{ display: "flex" }}>
                  <CountUp
                    end={15}
                    enableScrollSpy
                    style={{ fontSize: "40px", fontWeight: "700" }}
                  />
                  <span style={{ fontSize: "40px", fontWeight: "700" }}>+</span>
                </div>
                <span className="expert">years of AI expertsie</span>
              </div>
            </div> */}

            <div style={{ paddingLeft: "32px" }}>
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
              <p style={{ fontSize: "24px" }}>
                Businesses today face rising complexity and inefficiencies.
                <br />
                Euklydia empowers them with AI to automate tasks, boost
                productivity, and transform experiences—ensuring agility,
                competitiveness, and growth in a world where adaptability means
                survival.
              </p>
            </div>
            <div className="euklydia-dna-card-container">
              <div className="euklydia-dna-card">
                <div style={{ display: "flex" }}>
                  <CountUp
                    end={15}
                    enableScrollSpy
                    style={{ fontSize: "40px", fontWeight: "700" }}
                  />
                  <span style={{ fontSize: "40px", fontWeight: "700" }}>+</span>
                </div>
                <span className="expert">years of AI expertsie</span>
              </div>
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
          <div style={{ position: "relative" }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={"32px"}
              slidesPerView={"auto"}
              navigation
              loop={true}
              className="my-4 dna-container"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id} className="dna-swiper-slide">
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
                      <img src={card.imgsrc} alt="" className="img-dna-card" />
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
            <p style={{ maxWidth: "600px", paddingTop: "16px" }}>
              Our expertise supports you at every stage of your digital
              transformation. With a tailored approach, we streamline your
              processes, unlock new
            </p>
          </div>

          <div className="col-lg-5">
            <img src={SUCCESS} alt="Euklydia DNA" />
          </div>
        </div>

        <section
          style={{
            padding: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "64px",
              fontWeight: "700",
              marginBottom: "40px",
            }}
          >
            Our Expertise
          </h2>
          <img
            src={MAPS}
            alt="Euklydia international"
            style={{ maxWidth: "850px" }}
          />
        </section>
      </div>

      <Footer />
    </>
  );
};
