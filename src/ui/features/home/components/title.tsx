import React, { useEffect, useState } from "react";
import "./styles.css";
import { TextBody, TextBodySmall, Title } from "../../../components";
import { AtomButton } from "./atom-button/AtomButton";

export const HomeTitle = () => {
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = (): void => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      const scrollY: number = window.scrollY;
      const sectionTop: number = homeSection.offsetTop;
      const sectionHeight: number = homeSection.offsetHeight;

      // Calculer la progression du scroll dans la section
      const progress: number = (scrollY - sectionTop) / sectionHeight;

      if (progress >= 0 && progress <= 1) {
        setScale(1 + progress * 1); // de 1 à 2
        setOpacity(1 - progress); // de 1 à 0
      } else {
        setScale(1);
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="home" className="home-title-section pt-[7rem]">
        <div className="home-title-heading max-w-[750px] m-auto text-center flex flex-col gap-0.25 items-center">
          <Title
            text={"Marketing couldn’t monetize"}
            fontSize={"title2"}
            className="home-title-fade ease-in duration-moderate3"
            style={{ opacity, transition: "opacity 0.3s ease" }}
            color={"primary-inverse"}
          />

          <Title
            text={"AI. Precision Marketing did"}
            fontSize={"title2"}
            className="home-title-focus ease-in duration-moderate3"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
            color={"primary-inverse"}
          />

          <TextBody
            text={
              "Deliver the Right Message to the Right Audience at the Right Time"
            }
            className="w-eighty m-auto text-center pb-2"
            style={{ opacity, transition: "opacity 0.3s ease" }}
            color={"primary-inverse"}
          />

          <AtomButton />
        </div>
      </section>
    </>
  );
};
