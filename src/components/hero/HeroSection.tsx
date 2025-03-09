import { useState } from "react";
import "./styles.css";

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
      backgroundImage: "/ai-euklydia/src/assets/images/eu9lidos.jpg",
      link: "./DNA",
      description:
        "AI-driven marketing startup blending data and creativity to boost your business by crafting precise strategies and content creation.",
    },
    {
      title: "Our Unique Advantage",
      number: "02",
      backgroundImage: "/ai-euklydia/src/assets/images/dataanlysm2.png",
      link: "./whyus",
      description:
        "Your business benefits from our tailored strategies, precise targeting, and optimized funnels for effective marketing campaigns.",
    },
    {
      title: "Boost Your Business",
      number: "03",
      backgroundImage: "/ai-euklydia/src/assets/images/service99.webp",
      link: "./service",
      description:
        "We enhance brand tracking, predict customer behavior, and boost digital presence with our in-house AI.",
    },
    {
      title: "Our Green AI",
      number: "04",
      backgroundImage: "/ai-euklydia/src/assets/images/sais.webp",
      link: "./iaimpact",
      description:
        "We reduce carbon footprint by using transfer learning for AI development, eliminating the need for data centers.",
    },
    {
      title: "Success Stories",
      number: "05",
      backgroundImage: "/ai-euklydia/src/assets/images/usestudy.webp",
      link: "./UseCase",
      description:
        "We transform challenging situations into effective results for you.",
    },
    {
      title: "We're Here for You",
      number: "06",
      backgroundImage: "/ai-euklydia/src/assets/images/eyklydecontact.webp",
      link: "./contact",
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
                    <a href={item.link} data-bs-toggle="modal">
                      <i className="fa fa-arrow-right"></i>
                    </a>
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
