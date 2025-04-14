import { useState } from "react";
import { Link } from "react-router-dom";
import Work_1 from "../../assets/images/our-dna//work-two-1.jpg";
import Work_2 from "../../assets/images/our-dna/work-two-2.jpg";
import Work_3 from "../../assets/images/our-dna/work-two-3.jpg";
import Work_4 from "../../assets/images/our-dna/work-two-4.jpg";

const Work = () => {
  const [activeTab, setActiveTab] = useState("v-pills-one");
  return (
    <>
      <div className="work-section-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className={`nav-link ${
                    activeTab === "v-pills-one" ? "active" : ""
                  }`}
                  id="v-pills-one-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-one"
                  role="tab"
                  aria-controls="v-pills-one"
                  aria-selected={activeTab === "v-pills-one"}
                  onClick={() => setActiveTab("v-pills-one")}
                >
                  <h4>
                    <svg
                      width={48}
                      height={41}
                      viewBox="0 0 48 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.634 20.5C17.634 26.0742 16.6163 31.0819 15.0045 34.666C13.3588 38.3257 11.251 40.1961 9.21895 40.1961C7.18689 40.1961 5.07914 38.3257 3.43336 34.666C1.8216 31.0819 0.803922 26.0742 0.803922 20.5C0.803922 14.9258 1.8216 9.91807 3.43336 6.33403C5.07914 2.67434 7.18689 0.803922 9.21895 0.803922C11.251 0.803922 13.3588 2.67434 15.0045 6.33403C16.6163 9.91807 17.634 14.9258 17.634 20.5Z"
                        stroke="#1cb0a0"
                        strokeWidth="1.60784"
                      />
                      <path
                        d="M27.2922 20.5C27.2922 26.0742 26.2745 31.0819 24.6627 34.666C23.017 38.3257 20.9092 40.1961 18.8772 40.1961C16.8451 40.1961 14.7373 38.3257 13.0916 34.666C11.4798 31.0819 10.4621 26.0742 10.4621 20.5C10.4621 14.9258 11.4798 9.91807 13.0916 6.33403C14.7373 2.67434 16.8451 0.803922 18.8772 0.803922C20.9092 0.803922 23.017 2.67434 24.6627 6.33403C26.2745 9.91807 27.2922 14.9258 27.2922 20.5Z"
                        stroke="#1cb0a0"
                        strokeWidth="1.60784"
                      />
                      <path
                        d="M36.9504 20.5C36.9504 26.0742 35.9327 31.0819 34.321 34.666C32.6752 38.3257 30.5674 40.1961 28.5354 40.1961C26.5033 40.1961 24.3955 38.3257 22.7498 34.666C21.138 31.0819 20.1203 26.0742 20.1203 20.5C20.1203 14.9258 21.138 9.91807 22.7498 6.33403C24.3955 2.67434 26.5033 0.803922 28.5354 0.803922C30.5674 0.803922 32.6752 2.67434 34.321 6.33403C35.9327 9.91807 36.9504 14.9258 36.9504 20.5Z"
                        stroke="#1cb0a0"
                        strokeWidth="1.60784"
                      />
                      <path
                        d="M46.6086 20.5C46.6086 26.0742 45.5909 31.0819 43.9792 34.666C42.3334 38.3257 40.2256 40.1961 38.1936 40.1961C36.1615 40.1961 34.0538 38.3257 32.408 34.666C30.7962 31.0819 29.7785 26.0742 29.7785 20.5C29.7785 14.9258 30.7962 9.91807 32.408 6.33403C34.0538 2.67434 36.1615 0.803922 38.1936 0.803922C40.2256 0.803922 42.3334 2.67434 43.9792 6.33403C45.5909 9.91807 46.6086 14.9258 46.6086 20.5Z"
                        stroke="#1cb0a0"
                        strokeWidth="1.60784"
                      />
                    </svg>
                    Digital transformation
                  </h4>
                  <div className="work-details-two">
                    <p>
                      Companies that integrate AI become more agile, efficient,
                      and competitive. We help organizations automate tasks,
                      improve productivity, and transform customer experiences.
                      Those who adapt will thrive, while others risk falling
                      behind.
                    </p>
                    <Link to="/Aboutus" className="btn btn-primary btn-theme">
                      View More <span>+</span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`nav-link ${
                    activeTab === "v-pills-two" ? "active" : ""
                  }`}
                  id="v-pills-two-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-two"
                  role="tab"
                  aria-controls="v-pills-two"
                  aria-selected={activeTab === "v-pills-two"}
                  onClick={() => setActiveTab("v-pills-two")}
                >
                  <h4>
                    <svg
                      width={46}
                      height={30}
                      viewBox="0 0 46 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H19"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 6H45"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.5 10C25.9853 10 28 7.98528 28 5.5C28 3.01472 25.9853 1 23.5 1C21.0147 1 19 3.01472 19 5.5C19 7.98528 21.0147 10 23.5 10Z"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.5 29C7.98528 29 10 26.9853 10 24.5C10 22.0147 7.98528 20 5.5 20C3.01472 20 1 22.0147 1 24.5C1 26.9853 3.01472 29 5.5 29Z"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.5 29C42.9853 29 45 26.9853 45 24.5C45 22.0147 42.9853 20 40.5 20C38.0147 20 36 22.0147 36 24.5C36 26.9853 38.0147 29 40.5 29Z"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 7C31.0289 7.84259 33.7585 9.50703 35.8794 11.8047C38.0003 14.1024 39.4278 16.9414 40 20"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 20C6.62013 16.9415 8.16663 14.1026 10.4643 11.8049C12.7619 9.5073 15.7188 7.84279 19 7"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    ECO-FRIENDLY
                  </h4>
                  <div className="work-details-two">
                    <p>
                      The future belongs to companies that combine performance
                      and responsibility. By integrating AI and cloud computing
                      with eco-efficient solutions, we reduce the carbon
                      footprint and adopt sustainable practices, in
                      collaboration with technological leaders like Google and
                      Meta.
                    </p>
                    <Link to="/Aboutus" className="btn btn-primary btn-theme">
                      View More <span>+</span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`nav-link ${
                    activeTab === "v-pills-three" ? "active" : ""
                  }`}
                  id="v-pills-three-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-three"
                  role="tab"
                  aria-controls="v-pills-three"
                  aria-selected={activeTab === "v-pills-three"}
                  onClick={() => setActiveTab("v-pills-three")}
                >
                  <h4>
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                        stroke="#1cb0a0"
                        strokeWidth="2.04444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M39.4825 8.51849L8.51953 39.4815"
                        stroke="#1cb0a0"
                        strokeWidth="2.04444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24 24V46"
                        stroke="#1cb0a0"
                        strokeWidth="2.04444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.666 9.33331V40.2963"
                        stroke="#1cb0a0"
                        strokeWidth="2.04444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.334 16.6667V44.3704"
                        stroke="#1cb0a0"
                        strokeWidth="2.04444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.666 31.3333V44.3704"
                        stroke="#1cb0a0"
                        strokeWidth="2.04444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    LIFE-TIME LEARNING
                  </h4>
                  <div className="work-details-two">
                    <p>
                      Excellence is built on the continuous transmission and
                      evolution of skills. We cultivate a culture of learning by
                      sharing our expertise and training the new generations to
                      fully leverage the potential of AI.
                    </p>
                    <Link to="/Aboutus" className="btn btn-primary btn-theme">
                      View More <span>+</span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`nav-link ${
                    activeTab === "v-pills-four" ? "active" : ""
                  }`}
                  id="v-pills-four-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-four"
                  role="tab"
                  aria-controls="v-pills-four"
                  aria-selected={activeTab === "v-pills-four"}
                  onClick={() => setActiveTab("v-pills-four")}
                >
                  <h4>
                    <svg
                      width={44}
                      height={37}
                      viewBox="0 0 44 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25041 24.1173C1.88949 24.0113 1.57245 23.7902 1.34687 23.4873C1.1213 23.1844 0.999356 22.816 0.999356 22.4373V14.5624C0.999356 14.1838 1.1213 13.8153 1.34687 13.5124C1.57245 13.2095 1.88949 12.9884 2.25041 12.8824L40.4771 1.07C40.736 0.99393 41.009 0.979628 41.2744 1.02823C41.5398 1.07683 41.7903 1.18699 42.0061 1.35C42.2219 1.513 42.3971 1.72437 42.5177 1.96737C42.6384 2.21036 42.7012 2.47831 42.7012 2.74999V34.2498C42.7012 34.5214 42.6384 34.7894 42.5177 35.0324C42.3971 35.2754 42.2219 35.4867 42.0061 35.6497C41.7903 35.8127 41.5398 35.9229 41.2744 35.9715C41.009 36.0201 40.736 36.0058 40.4771 35.9297L2.25041 24.1173Z"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.93587 26.2785V34.2252C9.93587 34.6959 10.1189 35.1473 10.4448 35.4802C10.7707 35.813 11.2126 36 11.6735 36H18.6238C19.0846 36 19.5265 35.813 19.8524 35.4802C20.1783 35.1473 20.3613 34.6959 20.3613 34.2252V7.70233"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    DIVERSITY AND INCLUSION
                  </h4>
                  <div className="work-details-two">
                    <p>
                      The boldest ideas arise from the diversity of talents. We
                      foster an inclusive environment where every vision
                      enriches our solutions, ensuring innovative and tailored
                      responses to the unique challenges of each business.
                    </p>
                    <Link to="/Aboutus" className="btn btn-primary btn-theme">
                      View More <span>+</span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`nav-link ${
                    activeTab === "v-pills-five" ? "active" : ""
                  }`}
                  id="v-pills-five-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-five"
                  role="tab"
                  aria-controls="v-pills-five"
                  aria-selected={activeTab === "v-pills-five"}
                  onClick={() => setActiveTab("v-pills-five")}
                >
                  <h4>
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1875 45.3125H32.8125"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 39.0625V28.125"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.75 21.875L25 28.125L31.25 21.875"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.3713 32.6171C13.5139 31.1661 12.0094 29.313 10.9708 27.1971C9.93232 25.0811 9.38679 22.7574 9.37524 20.4003C9.32836 11.9316 16.1565 4.88276 24.6233 4.68745C27.9046 4.60797 31.1275 5.56381 33.8349 7.41936C36.5423 9.2749 38.5967 11.9359 39.7064 15.0248C40.8162 18.1138 40.925 21.4737 40.0175 24.628C39.11 27.7823 37.2323 30.5707 34.6506 32.5976C34.0812 33.0391 33.6198 33.6045 33.3013 34.2508C32.9829 34.8972 32.8158 35.6075 32.8127 36.3281V37.4999C32.8127 37.9143 32.6481 38.3118 32.3551 38.6048C32.0621 38.8978 31.6646 39.0624 31.2502 39.0624H18.7502C18.3358 39.0624 17.9384 38.8978 17.6454 38.6048C17.3524 38.3118 17.1877 37.9143 17.1877 37.4999V36.3281C17.187 35.6121 17.023 34.9058 16.7083 34.2628C16.3935 33.6197 15.9363 33.0569 15.3713 32.6171Z"
                        stroke="#1cb0a0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Agility and Creativity
                  </h4>
                  <div className="work-details-two">
                    <p>
                      In an ever-changing world, adaptability is essential. We
                      combine innovation and data analysis to design tailored
                      strategies, ensuring businesses maximum responsiveness to
                      market shifts and new technologies.
                    </p>
                    <Link to="/Aboutus" className="btn btn-primary btn-theme">
                      View More <span>+</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${
                    activeTab === "v-pills-one" ? "active" : ""
                  }`}
                  id="v-pills-one"
                  role="tabpanel"
                  aria-labelledby="v-pills-one-tab"
                >
                  <div className="work-image-two">
                    <img src={Work_1} alt="work-image" />
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-two" ? "active show" : ""
                  }`}
                  id="v-pills-two"
                  role="tabpanel"
                  aria-labelledby="v-pills-two-tab"
                >
                  <div className="work-image-two">
                    <img src={Work_2} alt="work-image" />
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-three" ? "active show" : ""
                  }`}
                  id="v-pills-three"
                  role="tabpanel"
                  aria-labelledby="v-pills-three-tab"
                >
                  <div className="work-image-two">
                    <img src={Work_3} alt="work-image" />
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-four" ? "active show" : ""
                  }`}
                  id="v-pills-four"
                  role="tabpanel"
                  aria-labelledby="v-pills-four-tab"
                >
                  <div className="work-image-two">
                    <img src={Work_4} alt="work-image" />
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-five" ? "active show" : ""
                  }`}
                  id="v-pills-five"
                  role="tabpanel"
                  aria-labelledby="v-pills-five-tab"
                >
                  <div className="work-image-two">
                    <img src={Work_2} alt="work-image" />
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

export default Work;
