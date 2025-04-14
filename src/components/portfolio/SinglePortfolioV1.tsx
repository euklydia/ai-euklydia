import { Link } from "react-router-dom";

interface DataType {
  id?: number;
  thumb?: string;
  text?: string;
  textBold?: string;
}

const SinglePortfolioV1 = ({ portfolio }: { portfolio: DataType }) => {
  const { id, thumb, text, textBold } = portfolio;

  return (
    <>
      <div className="portfolio-style-one-item">
        <img
          src={`/ai-euklydia/images/green-tech/${thumb}`}
          alt="Image Not Found"
          width={710}
          height={800}
        />
        <div className="info">
          <h2>
            <Link to={`/project-details/${id}`}>
              {text} <strong>{textBold}</strong>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolioV1;
