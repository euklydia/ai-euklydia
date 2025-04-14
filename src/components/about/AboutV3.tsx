import useScrollAnimation from "../../hook/useScrollAnimation";
import useUpDownScroll from "../../hook/useUpDownScroll";
import thumb11 from "../../assets/images/our-dna/11.jpg";
import { Link } from "react-router-dom";

interface DataType {
  sectionClass?: string;
  about: {
    title: string;
    description: string;
    focus: string;
    button: {
      link: string;
      label: string;
    };
  };
}

const AboutV3 = ({ sectionClass, about }: DataType) => {
  const containerRef = useScrollAnimation();
  useUpDownScroll(".upDownScrol");

  return (
    <>
      <div
        className={`about-style-three-area default-padding-bottom ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="thumb-style-three">
                <img src={thumb11} alt="Image Not Found" />
                <div className="upDownScrol scroll-shape" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div
                className="about-style-three-info text-scroll-animation"
                ref={containerRef}
              >
                <h2 className="title text">{about.title}</h2>
                <div className="d-flex mt-40">
                  <div className="left">
                    <h4 className="sub-title-border">
                      <strong>{about.focus}</strong>
                    </h4>
                  </div>
                  <div className="right">
                    <p className="text">{about.description}</p>
                    <Link className="btn-animation mt-10" to="/about-2">
                      <i className="fas fa-arrow-right" />{" "}
                      <span>Know More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV3;
