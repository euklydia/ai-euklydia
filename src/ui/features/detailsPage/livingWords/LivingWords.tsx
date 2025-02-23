import { useEffect, useRef, useState } from "react";
import "./styles.css";

const kiplingPoem = `<p>Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span> Let <span>AI Agents</span> Assist You at <span>Every Step</span>
Scale Smarter, <span>Grow Faster!</span></p>`;

const LivingWords = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const textDivs = document.querySelectorAll(".text");
    textDivs.forEach((div) => {
      div.innerHTML = kiplingPoem;
    });
  }, []);

  useEffect(() => {
    const adjustContentSize = () => {
      if (contentRef.current) {
        const viewportWidth = window.innerWidth;
        const baseWidth = 1000;
        const newScaleFactor =
          viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
        setScaleFactor(newScaleFactor);
      }
    };

    window.addEventListener("resize", adjustContentSize);
    adjustContentSize();

    return () => window.removeEventListener("resize", adjustContentSize);
  }, []);

  return (
    <div className="container living-room-words">
      <div
        className="content"
        style={{ display: "block", width: "1000px", height: "562px" }}
      >
        <div className="container-full">
          <div className="animated hue"></div>
          <img
            className="backgroundImage"
            src="/ai-euklydia/empty-room.jpg"
            alt="Background"
          />
          <img className="boyImage" src="/ai-euklydia/boy.png" alt="Boy" />
          <div className="container">
            <div className="cube">
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left text"></div>
              <div className="face right text"></div>
              <div className="face front"></div>
              <div className="face back text"></div>
            </div>
          </div>
          <div className="container-reflect">
            <div className="cube">
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left text"></div>
              <div className="face right text"></div>
              <div className="face front"></div>
              <div className="face back text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingWords;
