import "./styles.css";

export const LiveTalkButton = () => {
  return (
    <div className="live-talk-container rounded-[2rem]">
      <a href="#" className="live-talk">
        <span>Let's Talk </span>
        <span>
          Let's Talk
          <span className="container-button-pulse">
            <span className="button-pulse"></span>
          </span>
        </span>
      </a>
    </div>
  );
};
