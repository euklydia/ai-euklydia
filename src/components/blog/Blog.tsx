import BlogV1Data from "../blog/Blog.json";
import { SingleBlog } from "./SingleBlog.js";
import SplitText from "../animation/SplitText.jsx";

type DataType = {
  sectionClass?: string;
};

export const Blog = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`blog-area home-blog blog-style-one-area default-padding bottom-less ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-3">
              <div className="site-heading text-center">
                <h4 className="sub-title">News & Events</h4>
                <h2 className="title split-text">
                  <SplitText
                    delay={100}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  >
                    Latest Blog Posts
                  </SplitText>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {BlogV1Data.slice(0, 3).map((blog) => (
              <div className="col-lg-4 col-md-6 mb-30" key={blog.id}>
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
