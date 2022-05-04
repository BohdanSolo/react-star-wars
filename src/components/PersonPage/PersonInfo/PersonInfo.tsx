import React from "react";
import styles from "./PersonInfo.module.scss";


interface Props {
  personInfo: Array<any> | null;
}
const PersonInfo = ({ personInfo }: Props) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {personInfo?.map(
          ({ title, data }: any) =>
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.list__title}>{title}</span>: {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default PersonInfo;
