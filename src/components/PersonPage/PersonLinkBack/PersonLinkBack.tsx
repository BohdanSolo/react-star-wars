import React from 'react';

import {useNavigate} from "react-router-dom";

import styles from "./PersonLinkBack.module.scss"
import back from "../../../assets/img/back.svg"


const PersonLinkBack = () => {
    const nav = useNavigate()
    const goBack = () => {
      nav(-1)
    }
    return (
        <button className={styles.button} onClick={goBack}>
            <img src={back} alt="Back arrow"/> Go back
        </button>
    );
};

export default PersonLinkBack;