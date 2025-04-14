import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  // State to track hover for each <li> item (using an index)
  const [hoveredIndex, setHoveredIndex] = useState(3);

  // Handle mouse enter and leave events for each li
  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(hoveredIndex);

  // List of items (could be fetched dynamically or mapped)
  const items = [
    {
      title: "Our DNA",
      number: "01",
      backgroundImage: "/ai-euklydia/images/home/01.png",
      link: "/our-dna",
      description:
        "A pioneering AI-driven startup specializing in AI transformation, reinventing traditional businesses through data, automation, and predictive intelligence.",
    },
    {
      title: "Our Unique Advantage",
      number: "02",
      backgroundImage: "/ai-euklydia/images/home/02.png",
      link: "/green-tech",
      description:
        "Your business benefits from our tailored strategies, precise targeting, and optimized funnels for effective marketing campaigns.",
    },
    {
      title: "Our Solutions",
      number: "03",
      backgroundImage: "/ai-euklydia/images/home/03.png",
      link: "/service",
      description:
        "We enhance brand tracking, predict customer behavior, and boost digital presence with our in-house AI.",
    },
    {
      title: "GreenTech",
      number: "04",
      backgroundImage: "/ai-euklydia/images/home/05.png",
      link: "/our-dna",
      description:
        "We embrace a holistic, eco-conscious approach that integrates advanced AI technologies while minimizing our carbon footprint.",
    },
    {
      title: "Euklydia academy",
      number: "05",
      backgroundImage: "/ai-euklydia/images/home/04.png",
      link: "/green",
      description:
        "Euklydia Academy empowers professionals with AI-driven skills, fostering autonomy to lead transformation, embrace innovation, and stay competitive in the digital era.",
    },
    {
      title: "We're Here for You",
      number: "06",
      backgroundImage: "/ai-euklydia/images/home/06.png",
      link: "/service",
      description:
        "Your success drives us—reach out with any questions. We're here to help you thrive!",
    },
  ];

  return (
    <div className="banner-style-two-area hero">
      <div className="accrdion-portfolio-area">
        <div className="container-fluid">
          <div className="row">
            <ul className="accordion-portfolio-lists text-light" id="accordion">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={hoveredIndex === index ? "out" : ""}
                  style={{
                    backgroundImage: `url('${item.backgroundImage}')`,
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h3 data-translate={item.title}>{item.title}</h3>
                  <span>{item.number}</span>
                  <div className="accordion-overlay">
                    <h2>
                      <a
                        href={item.link}
                        data-bs-toggle="modal"
                        data-translate={item.title}
                      >
                        {item.title}
                      </a>
                    </h2>
                    <p data-translate="paragraph">{item.description}</p>
                    <Link to={item.link}>
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <div id="footer-placeholder" style={{ height: "min-content" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
