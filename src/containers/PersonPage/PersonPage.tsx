import React, { Suspense, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getApiResource } from "../../utils/network";
import { API_PERSON } from "../../constants/api-constants";
import withErrorApi from "../../hoc/withErrorApi";
import { getPeopleImg } from "../../services/getPeopleData";
import PersonImg from "../../components/PersonPage/PersonImg/PersonImg";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import styles from "./PersonPage.module.scss";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import UILoading from "../../UI/UILoading/UILoading";
import { useAppSelector } from "../../hooks/reduxHooks";

const PersonFilms = React.lazy(
  () => import("../../components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrApi }: any) => {
  const [personInfo, setPersonInfo] = useState<null | Array<any>>(null);
  const [name, setName] = useState<string | undefined>("");
  const [personImg, setPersonImg] = useState<string | undefined>("");
  const [personFilms, setPersonFilms] = useState<
    Array<string> | undefined | null
  >(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { id } = useParams();

  const fav = useAppSelector((state) => state.favorite.favList);
  const objOfFav = { ...fav };

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setName(res.name);
        setPersonImg(getPeopleImg(Number(id)));
        setPersonFilms(res.films);
        setErrApi(!res);
        for (let i = 0; i < Object.keys(objOfFav).length; i++) {
          if (objOfFav[i][Number(id)]) {
            setIsFavorite(true);
          }
        }
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <h1 className={styles.person__name}>{name}</h1>
        <div className={styles.container}>
          <PersonImg
            personImg={personImg}
            name={name}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);
