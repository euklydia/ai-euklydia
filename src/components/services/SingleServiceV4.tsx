import { Link } from "react-router-dom";

interface DataType {
  id?: number;
  titleFirst?: string;
  titleLast?: string;
  icon?: string;
  text?: string;
  number?: string;
}

const SingleServiceV4 = ({ service }: { service: DataType }) => {
  const { id, titleFirst, icon, text, number } = service;

  return (
    <>
      <div className="cteative-service-item">
        <div className="top">
          <h4>
            <Link to={`/service-details/${id}`}>{titleFirst}</Link>
          </h4>
          <img
            src={`/ai-euklydia/images/green-tech/${icon}`}
            alt="Icon"
            width={200}
            height={200}
          />
        </div>
        <p>{text}</p>
        <span>{number}</span>
      </div>
    </>
  );
};

export default SingleServiceV4;
