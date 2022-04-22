import React, {useEffect} from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Favorite from "../Favorite/Favorite";
import droid from "../../assets/img/header/droid.svg";
import lightSaber from "../../assets/img/header/lightsaber.svg";
import spaceStation from "../../assets/img/header/space-station.svg";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  DARK_THEME,
  LIGHT_THEME,
} from "../../constants/api-constants";

const Layout = (): JSX.Element => {
  const theme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
  },[theme])
  return (
    <>
      <header className={styles.container}>
        <img
            className={styles.logo}
          src={
            theme === LIGHT_THEME
              ? lightSaber
              : theme === DARK_THEME
              ? droid
              : spaceStation // Or you can use switch case in UseEffect prescribing img in useSate
          }
          alt="Star wars"
        />
        <ul className={styles.list__container}>
          <li>
            <NavLink to={"/"} className={styles.top}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"people/?page=1"}>People</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/error"}>Fail</NavLink>
          </li>
        </ul>
        <Favorite />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
