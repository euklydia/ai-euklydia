import SingleServiceV3 from "./SingleServiceV3.js";
import SplitText from "../animation/SplitText.jsx";
import useActiveIndex from "../../hook/useActiveIndex.js";

interface DataType {
  sectionClass?: string;
  hasTitle?: boolean;
  impacts: {
    title: string;
    focus: string;
    impacts: {
      id: string;
      title: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
  };
}

const ServicesV3 = ({ sectionClass, hasTitle, impacts }: DataType) => {
  const { activeIndex, handleMouseEnter, handleTouchStart } = useActiveIndex();

  return (
    <>
      <div
        className={`services-style-three-area ${
          sectionClass ? sectionClass : ""
        }`}
      >
        {/* Section Title */}
        {hasTitle && (
          <div className="container">
            <div className="site-heading">
              <div className="row align-center">
                <div className="col-lg-8">
                  <h4 className="sub-title">{impacts.focus}</h4>
                  <h2 className="title">
                    <SplitText
                      delay={80}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                      {impacts.title}
                    </SplitText>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="service-style-three-items" id="accordion">
                {impacts.impacts.map((impact, index) => (
                  <li
                    className={
                      activeIndex === index
                        ? "out gradient-top-bottom "
                        : "gradient-top-bottom "
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleTouchStart(index)}
                    onTouchStart={() => handleTouchStart(index)}
                    key={impact.id}
                  >
                    <SingleServiceV3 impact={impact} number={index} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV3;
