import React from "react";

import cn from "classnames"

import styles from "./ErrorMessage.module.scss";
import video from "./video/han-solo.mp4";

const ErrorMessage = () => {
  return (
    <>
      <p className={cn('error__text', styles.text)}>
        The dark side of the force has won...
        <br /> We cannot display data.
        <br /> Come back when we win and fix everything!
      </p>
      <video loop autoPlay muted className={styles.video}>
        <source src={video} />
      </video>
    </>
  );
};

export default ErrorMessage;
