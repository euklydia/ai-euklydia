import clsx from "clsx";
import { Component } from "../../../common";
import { Clickable } from "./Clickable";
import { Icon } from "../atoms";

export const BackToTop: Component = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Clickable
      className={clsx(
        "bg-[#0ECCEE] hover:bg-[#1d447a]",
        "fixed bottom-[6rem] right-1 rounded-infinity",
        "transition-display z-[5] p-0.75"
        // isVisible && firstScrollUserEnd ? "flex" : "hidden"
      )}
      onClick={scrollToTop}
      content={{
        icon: (
          <Icon
            name={"ChevronRight"}
            className={"fill-text-primary-inverse rotate-180 animate-up-down"}
            width={32}
            height={32}
          />
        ),
      }}
      ariaLabel={"revenir au top de la page"}
    />
  );
};
