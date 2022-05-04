import React from "react";

import styles from "./PersonImg.module.scss";
import StarSVG from "../../../assets/img/StarSVG";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import {
  addPersonToFavorite,
  removePersonToFavorite,
} from "../../../redux/slices/favoriteSlice";


interface Props {
  personImg: string | undefined;
  name: string | undefined;
  isFavorite: boolean;
  setIsFavorite: (prop: boolean) => void;
}

const PersonImg = ({ personImg, name, isFavorite, setIsFavorite }: Props) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const getPeopleId = (pathname: string): number => {
    return +pathname.replace("/people/", "");
  };
  const id = getPeopleId(pathname);

  const dispatchFavoritePeople = () => {
    if (isFavorite) {
      dispatch(removePersonToFavorite(id))
      setIsFavorite(false)
    }  else {
      dispatch(
          addPersonToFavorite({
            [id]: {
              name: name,
              img: personImg,
            },
          })
      );
      setIsFavorite(true)
    }
  }
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personImg} alt={name} />
        <StarSVG dispatchFavoritePeople={dispatchFavoritePeople} isFavorite={isFavorite}/>
      </div>


    </>
  );
};

export default PersonImg;
