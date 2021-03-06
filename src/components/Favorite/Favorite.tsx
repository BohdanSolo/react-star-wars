import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import styles from "./Favorite.module.scss";
import FavoritesSVG from "../../assets/img/FavoritesSVG";
import { useAppSelector } from "../../hooks/reduxHooks";

const Favorite = () => {
  const objOfFav = useAppSelector((state) => state.favorite.favList);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(objOfFav.length);
  }, [objOfFav]);
  return (
    <div className={styles.container}>
      <NavLink to={"favorites"} className={styles.link}>
        <span className={styles.counter}>{count}</span>
        <div className={styles.icon}>
          <FavoritesSVG />
        </div>
      </NavLink>
    </div>
  );
};

export default Favorite;
