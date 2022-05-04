import React from "react";

import { useLocation } from "react-router-dom";
import notFoundImg from "../../assets/img/notFound.png";
import styles from "./NotFoundPage.module.scss";


const NotFoundPage = (): JSX.Element => {
  const location = useLocation();
    return (
    <>
      <div className={styles.img}><img  src={notFoundImg} alt="Not found text" /></div>
      <p className={styles.text}>
        No match found for:  <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
