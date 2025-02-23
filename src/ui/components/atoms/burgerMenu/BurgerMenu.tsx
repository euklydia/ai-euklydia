import "./styles.css";
import { Component } from "../../../../common";
import clsx from "clsx";

type burgerMenuProps = {
  handleClick: () => void;
  isActive: boolean;
};

export const BurgerMenu: Component<burgerMenuProps> = ({
  handleClick,
  isActive,
}) => {
  const onClick = () => {
    handleClick();
  };
  return (
    <div
      onClick={onClick}
      className={clsx("menu__wrapper flex tablet:hidden", isActive && "active")}
    >
      <div
        className={clsx("menu__item--hamburger", isActive && "active")}
        tabIndex={1}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
