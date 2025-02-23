import React, { useRef, useState } from "react";
import "./styles.css"; // Assurez-vous d'ajouter les styles correspondants
import { Icon, PrimaryButton, TextBody } from "../../components";
import { Link } from "react-router-dom";
import { LiveTalkButton } from "../../features/home/components/liveTalkButton/LiveTalkButton";

const data = [
  {
    title: "Home",
    shape:
      "M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z",
  },
  {
    title: "About",
    shape:
      "M 402.7,215.5 C 433.9,280.4 488.1,367.2 447.7,426.8 410.1,482.2 316.7,460.2 249.7,460.6 182.8,461.1 88.08,485.5 51.26,429.5 10.29,367.3 73.19,279.4 106.9,213 141.8,144 176.6,33.65 253.9,33.7 332.2,33.75 368.8,144.9 402.7,215.5 Z",
  },
  {
    title: "Widgets",
    shape:
      "M 451.5,185.8 C 441.5,266.2 339.6,305 272.3,350.2 207.7,393.6 226.7,444.7 182.6,447.9 132.8,451.4 83.97,399.9 66.37,353.1 34.6,268.4 41.16,141.8 112,85.44 186.1,26.329999999999984 313.8,54.099999999999994 396,101.4 425.2,118.2 455.6,152.4 451.5,185.8 Z",
  },
  {
    title: "Kabobs",
    shape:
      "M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z",
  },
  {
    title: "Contact",
    shape:
      "M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z",
  },
];

const Header = () => {
  const [shape, setShape] = useState(
    "M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z"
  );
  const [activeShape, setActiveShape] = useState(
    "M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z"
  );
  const [position, setPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  const [activePosition, setActivePosition] = useState<{
    left: number;
    top: number;
  }>({
    left: 0,
    top: 0,
  });

  const menuWrapperRef = useRef<HTMLOListElement>(null);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLLIElement>,
    shape: string
  ) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    setShape(shape);

    if (menuWrapperRef.current) {
      const wrapperRect = menuWrapperRef.current.getBoundingClientRect();
      setPosition({
        left: rect.left - wrapperRect.left,
        top: rect.top - wrapperRect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    if (activePosition) {
      setPosition(activePosition);
      setShape(activeShape);
    }
  };

  const handleClick = (shape: string) => () => {
    setActivePosition(position);
    setActiveShape(shape);
  };
  return (
    <header className="flex justify-between items-center container">
      <Link to={"/"}>
        <Icon name={"logo"} width={"auto"} height={42} />
      </Link>

      <nav className="menu relative">
        <ol
          className="js-menu-items-wrapper"
          ref={menuWrapperRef}
          // style={{ position: "relative" }}
        >
          {data.map((elem, index) => (
            <li
              key={index}
              className={`menu-item js-menu-item`}
              onMouseEnter={(event) => handleMouseEnter(event, elem.shape)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick(elem.shape)}
            >
              <Link to="#">
                <TextBody text={elem.title} color={"primary-inverse"} />
              </Link>
            </li>
          ))}
        </ol>
        <div
          className="menu-shape js-shape"
          style={{
            position: "absolute",
            left: position.left + "px",
            top: position.top + "px",
            transition: "all 0.3s ease-out",
          }}
        >
          <svg id="circle" viewBox="0 0 500 500">
            <defs>
              <linearGradient
                id="main-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="10%" style={{ stopColor: "#6426CB" }} />
                <stop offset="100%" style={{ stopColor: "#F34EA4" }} />
              </linearGradient>
            </defs>
            <path
              id="object"
              className="js-items-shape-path"
              fill="url(#main-gradient)"
              d={shape}
            ></path>
          </svg>
        </div>
      </nav>

      <LiveTalkButton />
    </header>
  );
};

export default Header;
