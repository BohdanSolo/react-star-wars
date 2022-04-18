import React from 'react';
import styles from "./UILoading.module.scss"

const UiLoading = () => {
    return (
        <div className={styles.loader}>
            Loading films...
        </div>
    );
};

export default UiLoading;