// @ts-ignore
import React from "react";
import { Link } from "react-router-dom";
import styles from "./PeopleNav.module.scss";
import UiButton from "../../UI/UiButtons/UiButton";

interface PropTypes {
  prevPage: string;
  nextPage: string;
  counterPage: number;
  getResource: (url: string) => Promise<getResourceTypes>;
}

interface getResourceTypes {
  id: number;
  name: string;
  img: string;
}

const PeopleNav = ({
  prevPage,
  nextPage,
  counterPage,
  getResource,
}: PropTypes): JSX.Element => {
  const handlePrev = () => getResource(prevPage);
  const handleNext = () => getResource(nextPage);

  return (
    <div className={styles.container}>
      <Link className={styles.links} to={`/people/?page=${counterPage - 1}`}>
        <UiButton
            theme={'dark'}
          isDisabled={!prevPage}
          handleNavClick={handlePrev}
          text={"Prev"}
        />
      </Link>
      <Link className={styles.links} to={`/people/?page=${counterPage + 1}`}>
        <UiButton
            theme={'dark'}
          isDisabled={!nextPage}
          handleNavClick={handleNext}
          text={"Next"}
        />
      </Link>
    </div>
  );
};

export default PeopleNav;
