// @ts-ignore
import React, {useId} from "react"; // Maybe, there are some conflicts between React 18 and TS
import { useAppDispatch } from "../../hooks/reduxHooks";
import { changeTheme } from "../../redux/slices/themeSlice";
import {
  DARK_THEME,
  LIGHT_THEME,
  NEUTRAL_THEME,
} from "../../constants/api-constants";
import styles from "./ChooseSide.module.scss";
import lightSide from "../../assets/img/themeButtons/light-side.jpg";
import darkSide from "../../assets/img/themeButtons/dark-side.jpg";
import neutralSide from "../../assets/img/themeButtons/falcon.jpg";
import cn from "classnames";

interface Props {
  theme: typeof LIGHT_THEME | typeof DARK_THEME | typeof NEUTRAL_THEME;
  text: string;
  img: string;
  themeStyles: string;
}
const ChooseSideItem = ({ theme, text, img, themeStyles }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={cn(styles.item,  themeStyles)} onClick={() => dispatch(changeTheme(theme))}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt="" />
    </div>
  );
};

const ChooseSide = () => {
    const id = useId()
  const elements: Array<Props> = [
    {
      theme: LIGHT_THEME,
      themeStyles: styles.light__side,
      text: "Light Side",
      img: lightSide,
    },
    {
      theme: DARK_THEME,
      themeStyles: styles.dark__side,
      text: "Dark Side",
      img: darkSide,
    },
    {
      theme: NEUTRAL_THEME,
      themeStyles: styles.neutral__side,
      text: "Neutral Side",
      img: neutralSide,
    },
  ];
  return (
    <div className={styles.container}>
      <span className="header__text">Choose your sideeeeee:</span>
      <br />
      {elements?.map(({ theme, themeStyles, text, img }) => (
        <ChooseSideItem
          key={id}
          theme={theme}
          themeStyles={themeStyles}
          text={text}
          img={img}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
