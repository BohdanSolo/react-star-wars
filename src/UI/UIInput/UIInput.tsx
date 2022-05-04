import React from "react";
import styles from "./UIInput.module.scss";
import cn from "classnames";
import {json} from "stream/consumers";

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
      <button
        onClick={() => value && handleInputChange("")}
        className={styles.input__cancel}
      >
        &times;
      </button>
    </div>
  );
};

export default UiInput;

function loadJson(url: string) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // Error: 404

async function loadJsonAsync(url: string) {
  let response = await fetch(url);
  if (response.status === 200) {
     let json = await response.json();
     return  json
  } else {
    throw new Error(response.status);
  }
}
