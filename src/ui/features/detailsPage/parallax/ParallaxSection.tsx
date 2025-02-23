import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./styles.css"; // Ensure you have this CSS file
import { TextBodySmall, TextCaption, Title } from "../../../components";

const ParallaxSection = ({
  elem: { title, image, description, caption },
  text,
  reverse,
  backgroundText,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movements
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // Horizontal movement for the title
  const xTitle = useTransform(scrollYProgress, [0, 1], ["-200px", "200px"]);

  // Horizontal movement for the entire container (image + content)
  const xContainer = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"]);

  return (
    <section ref={ref} className="parallax-section">
      {/* Fixed background text */}
      <div className="background-text">Euklydia</div>

      {/* Title with horizontal movement */}
      <motion.h2 className="parallax-title" style={{ x: xTitle }}>
        {caption}
      </motion.h2>

      {/* Parallax container with horizontal movement */}
      <motion.div
        className={`parallax-container ${reverse ? "flex-row-reverse" : ""}`}
        style={{ x: xContainer }}
      >
        <motion.div className="parallax-img" style={{ y: yImage }}>
          <img src={image} alt="Parallax" />
        </motion.div>
        <motion.div
          className="parallax-content flex flex-col gap-1 text-cloud-container relative"
          style={{ y: yText }}
        >
          <Title text={title} color={"primary-inverse"} fontSize="title3" />
          <TextBodySmall
            text={description}
            TagName="p"
            color={"primary-inverse"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
