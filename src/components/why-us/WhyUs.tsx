import { Animate } from "../animation/Animate";
import thumb3 from "../../assets/images/home/Grwoth-800x960.jpg";

interface DataType {
  sectionClass?: string;
}

export const WhyUs = ({ sectionClass }: DataType) => {
  return (
    <>
      <div className={`${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="thumb-style-one">
                <img src={thumb3} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="choose-us-style-one">
                <div className="pl-80 pl-md-0 pl-xs-0">
                  <h4 className="sub-title">Why EUKLYDIA</h4>
                  <h2 className="title">Reinventing Business with AI</h2>
                  <div
                    className="faq-style-one accordion mt-30"
                    id="faqAccordion"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Make Smarter Decisions with Real Data
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="white">
                            AI-powered diagnostic tools that give businesses a
                            clear, data-driven view of their maturity,
                            readiness, and growth opportunities — so you invest
                            where it counts and scale without waste.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Transform Every Pillar of Your Business — Not Just
                          Tech
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="white">
                            While others focus solely on AI models and technical
                            tools, Euklydia bridges the gap between innovation
                            and real business needs.
                          </p>
                          <p>
                            Our cross-functional solutions empower your Sales,
                            HR, Operations, finance and Strategy, helping you
                            build a smarter, faster, and future-ready
                            organization — where AI drives excellence across
                            every department.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Stay Ahead of Competitors Ethically and Sustainably
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="white">
                            We align your growth with CSR frameworks and help
                            you adopt AI in a way that’s not only effective but
                            also environmentally and socially responsible —
                            making you a modern leader in your industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="award-items">
                  <Animate className="animate__animated animate__fadeInLeft">
                    <div className="award-item">
                      <i className="fas fa-tachometer-alt" />
                      <h4>Stay ahead</h4>
                    </div>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInLeft"
                    delay="100ms"
                  >
                    <div className="award-item">
                      <i className="fas fa-clock" />
                      <h4>Save time</h4>
                    </div>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInLeft"
                    delay="200ms"
                  >
                    <div className="award-item">
                      <i className="fas fa-dollar-sign" />
                      <h4>Trim expense</h4>
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
