import { Link } from "react-router-dom";

interface DataType {
  id: string;
  thumb?: string;
  author?: string;
  dateFull?: string;
  comments?: number;
  month?: string;
  title?: string;
}

export const SingleBlog = ({ blog }: { blog: DataType }) => {
  const { id, thumb, dateFull, title } = blog;

  return (
    <>
      <div className="home-blog-one">
        <div className="thumb">
          <Link to={id}>
            <img
              src={`/ai-euklydia/images/home/${thumb}`}
              alt="Image Not Found"
              width={800}
              height={1000}
            />
          </Link>
          <div className="date">{dateFull}</div>
        </div>
        <div className="content">
          <h3>
            <Link to={id}>{title}</Link>
          </h3>
          <Link to={id} className="button-regular">
            Continue Reading
          </Link>
        </div>
      </div>
    </>
  );
};
