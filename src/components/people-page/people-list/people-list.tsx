import React from "react";
import styles from "./people-list.module.scss";
import {Link} from "react-router-dom";

interface PropsTypes {
  name: string;
  id: number;
  img: string;
}

const PeopleList = ({ people }: any) => {
  return (
    <ul className={styles.list__container}>
      {people?.map(({ name, id, img }: PropsTypes) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/people/${id}`}>
            <img className={styles.person__photo} src={img} alt="" />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
