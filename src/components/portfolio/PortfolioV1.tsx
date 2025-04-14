import PortfolioV1Data from "./PortfolioV1Data.json";
import SinglePortfolioV1 from "./SinglePortfolioV1";

const PortfolioV1 = () => {
  return (
    <>
      <div className="portfolio-style-one-content">
        <div className="portfolio-style-two-carousel">
          <div className="swiper-wrapper">
            <SinglePortfolioV1 portfolio={PortfolioV1Data[0]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioV1;
