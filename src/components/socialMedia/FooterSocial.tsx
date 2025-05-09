import { Link } from "react-router-dom";

export const FooterSocial = () => {
  return (
    <>
      {/* <li>
        <Link to="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f" />
        </Link>
      </li> */}
      <li>
        <Link to="https://www.linkedin.com/company/euklydia" target="_blank">
          <i className="fab fa-linkedin" />
        </Link>
      </li>
      {/* <li>
        <Link to="https://www.x.com/" target="_blank">
          <i className="fab fa-twitter"></i>
        </Link>
      </li> */}
    </>
  );
};
