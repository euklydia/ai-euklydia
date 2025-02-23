import { Title } from "../../../components";
import "./styles.css";

export const VideoSection = () => {
  return (
    <section className="container flex justify-center items-center">
      <div className="video-section-title-container flex flex-col items-center justify-center gap-0.5">
        <Title
          text={"End-to-End AI Agents"}
          color={"primary-inverse"}
          fontSize="title2"
        />
        <div>
          <section className="animation">
            <div className="first text-center">
              <Title
                TagName="div"
                text={"Automate"}
                className="!text-[#43DDAA]"
                fontSize="title2"
              />
            </div>
            <div className="second  text-center">
              <Title
                TagName="div"
                text={"Optimize"}
                className="!text-[#43DDAA]"
                fontSize="title2"
              />
            </div>
            <div className="third  text-center">
              <Title
                TagName="div"
                text={"Scale"}
                className="!text-[#43DDAA]"
                fontSize="title2"
              />
            </div>
          </section>
        </div>
        <Title
          text={"Your Business!"}
          className="!text-[#43DDAA]"
          fontSize="title2"
        />
      </div>
    </section>
  );
};
