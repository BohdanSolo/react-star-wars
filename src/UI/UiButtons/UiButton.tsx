import React from "react";
import styles from "./UiButton.module.scss";
import cn from "classnames"


interface Props {
  text: string;
  handleNavClick: () => void;
  isDisabled: boolean;
  theme: string
}

const UiButton = ({ text, handleNavClick, isDisabled, theme }: Props) => {
  return (
    <button
      onClick={handleNavClick}
      className={cn(styles.button, styles[theme])}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default UiButton;
