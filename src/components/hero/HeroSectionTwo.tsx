import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const HeroSectionTwo = () => {
  // State to track hover for each <li> item (using an index)
  const [hoveredIndex, setHoveredIndex] = useState(3);

  // Handle mouse enter and leave events for each li
  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(hoveredIndex);

  // List of items (could be fetched dynamically or mapped)
  const items = [
    {
      title: "Innovate to Dominate",
      number: "01",
      backgroundImage: "/ai-euklydia/images/home/02.png",
      link: "/our-dna",
      description:
        "AI and cutting-edge technologies are not just tools; they are transformation drivers. We design intelligent solutions that optimize decision-making, automate processes, and anticipate trends, enabling businesses to stay at the forefront of innovation.",
    },
    {
      title: "ECO-FRIENDLY",
      number: "02",
      backgroundImage: "/ai-euklydia/images/home/02.png",
      link: "/green-tech",
      description:
        "The future belongs to companies that combine performance and responsibility. By integrating AI and cloud computing with eco-efficient solutions, we reduce the carbon footprint and adopt sustainable practices, in collaboration with technological leaders like Google and Meta.",
    },
    {
      title: "Agility and Creativity",
      number: "03",
      backgroundImage: "/ai-euklydia/images/home/02.png",
      link: "/service",
      description:
        "In an ever-changing world, adaptability is essential. We combine innovation and data analysis to design tailored strategies, ensuring businesses maximum responsiveness to market shifts and new technologies.",
    },
    {
      title: "LIFE-TIME LEARNING",
      number: "04",
      backgroundImage: "/ai-euklydia/images/home/02.png",
      link: "/our-dna",
      description:
        "Excellence is built on the continuous transmission and evolution of skills. We cultivate a culture of learning by sharing our expertise and training the new generations to fully leverage the potential of AI.",
    },
    {
      title: "DIVERSITY AND INCLUSION",
      number: "05",
      backgroundImage: "/ai-euklydia/images/home/02.png",
      link: "/our-dna",
      description:
        "The boldest ideas arise from the diversity of talents. We foster an inclusive environment where every vision enriches our solutions, ensuring innovative and tailored responses to the unique challenges of each business.",
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
