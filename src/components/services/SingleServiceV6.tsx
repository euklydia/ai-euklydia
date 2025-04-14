interface DataType {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title?: string;
  description?: string;
  number?: string;
}

const SingleServiceV6 = ({ service }: { service: DataType }) => {
  const { image, title, description, number } = service;

  return (
    <>
      <li
        className="item-move-top-item bg-secondary-darkness"
        style={{
          backgroundImage: "url(/ai-euklydia/images/shape/shape5.png)",
        }}
      >
        <div
          className="icon col-md-12 col-lg-6"
          style={{
            maxWidth: "500px",
            maxHeight: "500px",
          }}
        >
          <img
            src={`/ai-euklydia/images/our-dna/${image.src}`}
            alt={image.alt}
            height={500}
            width={500}
          />
        </div>
        <div className="details col-md-12 col-lg-6 d-flex flex-column justify-content-center">
          <div className="item-title">
            <h3>{title}</h3>
          </div>
          <p className="white">{description}</p>
          <span>{number}</span>
        </div>
      </li>
    </>
  );
};

export default SingleServiceV6;
