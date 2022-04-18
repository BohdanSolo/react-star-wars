import React from "react";
import { PeopleTypes } from "../../containers/SearchPage/SearchPage";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.scss"

type Props = {
  people: Array<PeopleTypes>;
};

const SearchPageInfo = ({ people }: Props) => {
  return (
    <>
      {people.length ? (
        <ul className={styles.container}>
          {people.map(({ id, name, img }) => (
            <li className={styles.person__item} key={id}>
              <Link to={`/people/${id}`}>
                <img className={styles.person__photo} src={img} alt={name} />
                <p className={styles.person__text}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.person__comment}>No results</h2>
      )}
    </>
  );
};

export default SearchPageInfo;
