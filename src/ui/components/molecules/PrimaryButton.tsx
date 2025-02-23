import { Link } from "react-router-dom";
import { Component } from "../../../common";
import { Icon, TextBody } from "../atoms";
import clsx from "clsx";

type PrimaryButtonProps = {
  link: string;
  text: string;
  className?: string;
  isReverse?: boolean;
};

export const PrimaryButton: Component<PrimaryButtonProps> = ({
  link,
  text,
  isReverse = false,
  className,
}) => {
  return (
    <Link
      to={link}
      className={clsx(
        "flex animate-shadow-pulse gap-0.5 items-center px-1 py-0.5 rounded-[2rem] bg-[#47A593]",
        className
      )}
    >
      <TextBody
        TagName="span"
        text={text}
        className="Text relative z-[2] text-text-primary-inverse group-hover:text-text-primary"
      />

      <span
        className={clsx(
          "flex p-0.5 animate-pulse-scale rounded-infinity bg-[#00211C]"
        )}
      >
        <Icon
          name={"buttonArrow"}
          className="relative top-[4px] -right-[1px] fiil-[white]"
        />
      </span>
    </Link>
  );
};
