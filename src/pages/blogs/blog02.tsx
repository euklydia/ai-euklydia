import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components";
import "./styles.css";

export const Blog01 = () => {
  return (
    <div>
      <div className="smooth-scroll-container">
        <Header />

        <section className="euklydia-blog-background">
          <div className="container-blog">
            <h2 className="title-blog">When AI Supports Mental Health</h2>

            <div className="blog-content">
              <div className="blog-description">
                <p>
                  From a simple marketing expert, Euklydia has evolved into the
                  strategic partner of choice for driving AI transformation in
                  African businesses. We support this profound shift across the
                  five key pillars of every organization: marketing, fi- nance,
                  operations, human resources, and innova- tion.
                </p>
              </div>
              <div className="blog-image">
                <img src={""} alt="" />
                <div className="bg-image-blog"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
