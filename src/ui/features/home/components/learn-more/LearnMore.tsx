import "./styles.css";

export const LearnMore = () => {
  return (
    <button className="button learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
};
