// @ts-ignore
import React, { useCallback, useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constants/api-constants";
import withErrorApi from "../../hoc/withErrorApi";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import { debounce } from "lodash";
import UiInput from "../../UI/UIInput/UIInput";
import styles from "./SearchPage.module.scss";

interface Props {
  setErrApi: (a: boolean) => void;
}

export interface PeopleTypes {
  name: string;
  id: number;
  img: string;
}

const SearchPage = ({ setErrApi }: Props) => {
  const [value, setValue] = useState<string>("");
  const [people, setPeople] = useState<Array<PeopleTypes>>([]);

  const getResource = async (param: string) => {
    console.log(param);
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      // @ts-ignore
      const peopleList = res?.results.map(({ url, name }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return {
          name,
          id,
          img,
        };
      });
      setPeople(peopleList);
    }
    setErrApi(!res);
  };

  useEffect(() => {
    getResource("");
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResource(value), 300),
    []
  );

  const handleInputChange = (value: string): void => {
    setValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className={"header__text"}>Search</h1>
      <div className={styles.wrapper}>
      <UiInput
        value={value}
        handleInputChange={handleInputChange}
        placeholder={"Character's name"}
        classes={styles.input__search}
      />
      </div>
      <SearchPageInfo people={people} />
    </>
  );
};

export default withErrorApi(SearchPage);
