import { TextCaption, Title } from "../../../../components";
import { LearnMore } from "../learn-more/LearnMore";
import "./styles.css";

export const BlogMedia = () => {
  return (
    <div id="media-blog">
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="card-inner">
              <div className="box">
                <div className="imgBox">
                  <img src="/ai-euklydia/podcast.jpg" alt="our podcast" />
                </div>

                <div className="more">
                  <a href="#" className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
                <div className="tag">
                  <a href="#">#podcast</a>
                </div>
              </div>
            </div>
          </div>
          <div className="description pt-1 pb-1">
            <Title text="Podcast" fontSize="title4" color={"primary-inverse"} />
            <TextCaption
              text={
                "Find refreshing and quick reads about AI models, marketing strategies, interesting tricks and tips and much more."
              }
              color={"primary-inverse"}
            />
          </div>
          <LearnMore />
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-inner">
              <div className="box">
                <div className="imgBox">
                  <img src="/ai-euklydia/communication.jpg" alt="our communication" />
                </div>

                <div className="more">
                  <a href="#" className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
                <div className="tag">
                  <a href="#">#communication</a>
                </div>
              </div>
            </div>
          </div>
          <div className="description pt-1 pb-1">
            <Title
              text="Communication"
              fontSize="title4"
              color={"primary-inverse"}
            />
            <TextCaption
              text={
                "Gain tangible insights from industry experts, leaders and growth evangelists about the latest happenings in the world of AI-led marketing."
              }
              color={"primary-inverse"}
            />
          </div>
          <LearnMore />
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-inner">
              <div className="box">
                <div className="imgBox">
                  <img src="/ai-euklydia/blog.jpg" alt="blog section" />
                </div>

                <div className="more">
                  <a href="#" className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
                <div className="tag">
                  <a href="#">#blog</a>
                </div>
              </div>
            </div>
          </div>
          <div className="description pt-1 pb-1">
            <Title text="Blog" fontSize="title4" color={"primary-inverse"} />
            <TextCaption
              text={
                "Stay updated with the latest events and activities in which Pixis will be participating. Drop by and say hi to the team."
              }
              color={"primary-inverse"}
            />
          </div>
          <LearnMore />
        </div>
      </div>
    </div>
  );
};
