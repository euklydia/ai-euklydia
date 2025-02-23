import { Link } from "react-router-dom";
import "./styles.css";

export const AtomButton = () => {
  return (
    <Link to={"/DataMuse"} className="btn-primary">
      <span>Book A Demo</span>
      <div className="dot"></div>
    </Link>
  );
};
