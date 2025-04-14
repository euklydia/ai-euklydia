import SingleServiceV6 from "./SingleServiceV6.js";
import useItemMoveTopEffect from "../../hook/useItemMoveTopEffect.js";

type Props = {
  pillars: {
    title: string;
    subtitle: string;
    pillars: {
      id: string;
      title: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
  };
};

const ServicesV6 = ({ pillars }: Props) => {
  useItemMoveTopEffect();

  return (
    <>
      <div className="services-style-six-area default-padding blurry-shape-left bg-secondary-darkness">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-3">
              <div className="site-heading text-center">
                <h2 className="title split-text">{pillars.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-12">
            <div className="service-style-six-items item-move-top-items">
              <ul>
                {pillars.pillars.map((pillar) => (
                  <SingleServiceV6 service={pillar} key={pillar.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV6;
