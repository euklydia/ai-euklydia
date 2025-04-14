import thumb5 from "../../assets/images/our-dna/5.jpg";
import thumb6 from "../../assets/images/our-dna/6.jpg";

type BannerProps = {
  banner: {
    title: string;
    strong: string;
    subtitle: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    logo: {
      src: string;
      alt: string;
    };
  };
};

const BannerV2 = ({ banner }: BannerProps) => {
  return (
    <div className="banner-style-two-area">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-7">
            <div className="banner-two-content">
              <h2 className="item-title">
                {banner.title} <strong>{banner.strong}</strong>{" "}
                {banner.subtitle}
              </h2>
              <div className="d-flex">
                <img src={thumb5} alt="Image Not Found" />

                <p className="split-text">{banner.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="banner-two-thumb">
              <img src={thumb6} alt="Image Not Found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerV2;
