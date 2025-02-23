import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { Icon, TextBody, Title } from "../../../../components";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { AtomButton } from "../atom-button/AtomButton";

const data = [
  {
    id: "Datamuse",
    title: "Datamuse",
    subtitle: "The Art and Science of Brand Identity.",
    description:
      "Powered by advanced machine learning, Datamuse predicts the perfect brand structure, color palette, and archetype to resonate with your audience.",
    image: "/ai-euklydia/targeting_ai.png",
  },
  {
    id: "AI-emotion",
    title: "AI emotion",
    subtitle: "The Science of Emotional Precision in Marketing.",
    description:
      "AI Emotion replaces outdated KPIs like views by leveraging neural networks to diagnose emotions, predict behavior, optimize targeting, and scale your audiance Engagement through real-time analytics",
    image: "/ai-euklydia/ai-emotion.png",
  },
  {
    id: "CompetAI",
    title: "CompetAI",
    subtitle: "Master the competition—analyze, adapt, and lead",
    description:
      "leverages advanced AI to track competitors across platforms like LinkedIn and Meta, analyzing theirsuccesses and failures while decoding consumer trends to keep you always ahead in the market.",
    image: "/ai-euklydia/CompetAi.png",
  },
  {
    id: "AI-agents",
    title: "AI agents",
    subtitle: "Automating tasks, optimizing teamwork, boosting productivity.",
    description:
      "Our AI agents empower marketing teams and businesses by automating repetitive tasks, enhancing collaboration, and driving efficiency, delivering smarter workflows, optimized productivity, and measurable growth impact.",
    image: "/ai-euklydia/ai-agent.png",
  },
];

export default function HeroSection() {
  return (
    <div style={container} className="flex flex-col gap-3">
      {data.map((elem, i) => (
        <Card i={i} elem={elem} key={elem.id} />
      ))}
    </div>
  );
}

interface CardProps {
  elem: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  i: number;
}

function Card({ elem, i }: CardProps) {
  const background = `linear-gradient(306deg, #00423b, #00ffe6)`;

  return (
    <section
      className={clsx(
        "gap-2 justify-between container items-center",
        i % 2 === 0 ? "flex" : "flex flex-row-reverse"
      )}
    >
      <motion.div
        className="flex-1"
        style={{
          position: "sticky",
          top: "100px", // Adjust this value based on where you want it to stick
          zIndex: 10,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Title
          text={elem.title}
          fontSize="title2"
          style={{
            background: "linear-gradient(94.6deg, #47A593 0%, #43DDAA 99.78%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        />
        <Title
          text={`“${elem.subtitle}”`}
          fontSize="title4"
          style={{
            background: "linear-gradient(94.6deg, #47A593 0%, #43DDAA 99.78%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        />
        <TextBody text={elem.description} className="!text-[#DEEAFF]" />
        <div className="pt-2 flex">
          <AtomButton />
        </div>
      </motion.div>

      <motion.div
        className={`card-container-${i} flex-1`}
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants} className="card">
          <img src={elem.image} alt={elem.title} />
        </motion.div>
      </motion.div>
    </section>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  // margin: "100px auto",
  // maxWidth: 500,
  // paddingBottom: 100,
  // width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  // marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#003f3b",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};
