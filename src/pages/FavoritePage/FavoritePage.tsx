import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks/reduxHooks";

import PeopleList from "../../components/people-page/people-list/people-list";
import styles from "./FavoritePage.module.scss";

interface PeopleTypes {
  id: number;
  name: string;
  img: string;
}

const FavoritePage = () => {
  const [people, setPeople] = useState<null | Array<PeopleTypes>>(null);
  const fav = useAppSelector((state) => state.favorite.favList);
  const arr = Object.values({ ...fav });
  const peopleResult = arr.map((item) => {
    return {
      id: +Object.keys(item),
      name: Object.values(item)
        .map((item) => item.name)
        .join(),
      img: Object.values(item)
        .map((item) => item.img)
        .join(),
    };
  });
  useEffect(() => {
    const arrOfFav = Object.values({ ...fav });
    const peopleResult = arrOfFav.map((item) => {
      return {
        id: +Object.keys(item),
        name: Object.values(item)
          .map((item) => item.name)
          .join(),
        img: Object.values(item)
          .map((item) => item.img)
          .join(),
      };
    });
    setPeople(peopleResult);
  }, []);

  return (
    <div>
      <h1 className={styles.header}>Favorites page</h1>
      {people?.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>
          No data about your favorite heroes. <br />* Click on the star to add
          hero to your favorite list
        </h2>
      )}
    </div>
  );
};

export default FavoritePage;
