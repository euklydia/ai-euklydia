import { Link } from "react-router-dom";

interface DataType {
  number: number;
  impact: {
    id: string;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

const SingleServiceV3 = ({ impact, number }: DataType) => {
  const { id, image, title, description } = impact;

  return (
    <>
      <div className="service-three-content">
        <div>
          <div className="top">
            <div className="icon">
              <img src={image.src} alt={image.alt} width={130} height={130} />
            </div>
          </div>
          <div className="info">
            <h4>
              <Link to={`/service-details/${id}`}>{title}</Link>
            </h4>
            <p className="white">{description}</p>
          </div>
        </div>
        <div className="bottom">{number}</div>
      </div>
    </>
  );
};

export default SingleServiceV3;
