import { Header, MetaHead } from "../../components";
import { Footer } from "../../components/footer/Footer";
import { homeHead } from "../../data/SEO";
import ADDRESS from "../../assets/images/contact/address.png";
import EMAIL from "../../assets/images/contact/mail.png";
import PHONE from "../../assets/images/contact/phone.png";
import TEAM from "../../assets/images/contact/our-team.png";
import "./styles.css";

export const Contact = () => {
  return (
    <>
      <MetaHead {...homeHead} />

      <div className="smooth-scroll-container">
        <Header />
        <section className="contact-background">
          <div className="container mx-auto">
            <h2 style={{ fontSize: "48px" }}>Contactez-nous</h2>
          </div>
        </section>

        <section className="container" style={{ paddingTop: "80px" }}>
          <div className="container-contact">
            <div className="card-contact">
              <img src={ADDRESS} alt="Adresse" className="img-card-contact" />
              <p className="title-card-contact">Adresse</p>
              <p className="description-card-contact">
                Tunis, Tunisie <br />
                Paris, France
              </p>
            </div>

            <div className="card-contact">
              <img src={EMAIL} alt="E-mail" className="img-card-contact" />
              <p className="title-card-contact mail">E-mail</p>
              <p className="description-card-contact">contact@euklydia.com</p>
            </div>

            <div className="card-contact">
              <img
                src={PHONE}
                alt="Appelez-nous"
                className="img-card-contact"
              />
              <p className="title-card-contact">Appelez-nous</p>
              <p className="description-card-contact">+216 55 005 630</p>
            </div>
          </div>
        </section>

        <section
          className="container mx-auto"
          style={{ paddingBottom: "180px" }}
        >
          <h2 style={{ fontSize: "64px", fontWeight: "500" }}>Recruitment</h2>
          <h3 style={{ fontSize: "32px", fontWeight: "500", color: "#5FFFE8" }}>
            Be part of our team
          </h3>
          <p style={{ fontSize: "20px", fontWeight: "500", color: "#5FFFE8" }}>
            If you are passionate, talented and looking for a place to develop
            your career, we want to hear from you!
          </p>
          <img src={TEAM} alt="our team" style={{ borderRadius: "16px" }} />
        </section>
      </div>
      <Footer />
    </>
  );
};
