import React from "react";
import styles from "./UIInput.module.scss"
import cn from "classnames"

interface Props {
  value: string;
  handleInputChange: (a: string) => void;
  placeholder: string;
  classes: string;

}
const UiInput = ({ value, handleInputChange, placeholder, classes }: Props) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
          className={styles.input}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
        placeholder={placeholder}

      />
        <button onClick={() => value && handleInputChange('')} className={styles.input__cancel}>&times;</button>
    </div>
  );
};

export default UiInput;
