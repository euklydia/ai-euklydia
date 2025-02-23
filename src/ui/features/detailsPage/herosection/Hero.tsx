import { motion, useScroll, useTransform } from "motion/react";
import {
  TextBody,
  TextBodySmall,
  TextCaption,
  Title,
} from "../../../components";
import "./styles.css";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Define scroll range for the effect
  });

  // Apply a slight horizontal movement based on scroll position (e.g., -30%)
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="mt-3 bg-[#00423B] relative">
      <div className="background-text">SMART DECISIONS</div>
      <motion.div
        className="max-w-[1090px] m-auto flex pt-4 pb-4 items-center justify-between"
        style={{ x: xMovement }} // Apply the horizontal transform (left movement)
      >
        <div className="max-w-[490px]">
          <Title
            text={"Smart decisions in real time"}
            className="!text-[#47A593]"
            fontSize="title4"
          />
          <Title
            text={"So much to do and so little time"}
            fontSize="title1"
            color={"primary-inverse"}
            className="w-[400px]"
          />
          <TextBodySmall
            text={
              "At Euklydia, we build AI agents that help businesses work faster and smarter. They automate tasks, analyze data, and make precise decisions in real time. Acting as conductors of modern automation, our AI scales seamlessly, optimizing workflows, boosting performance, and driving effortless business growth with agility and innovation."
            }
            className="!text-[#DEEAFF] pt-0.5"
          />
        </div>
        <div>
          <img src="/ai-euklydia/targeting_ai.png" />
        </div>
      </motion.div>
    </section>
  );
};
