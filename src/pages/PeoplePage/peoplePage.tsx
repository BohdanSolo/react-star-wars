import React, {useEffect, useState} from "react";

import {API_PEOPLE} from "../../constants/api-constants";
import withErrorApi from "../../hoc/withErrorApi";
import PeopleNav from "../../components/PeopleNav/PeopleNav";
import PeopleList from "../../components/people-page/people-list/people-list";
import {changeToHttps, getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImg, getPeoplePageId,} from "../../services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";

export interface PeopleType {
  id: number;
  name: string;
  img: string;
}

interface peopleListTypes {
  name: string
  url: string
}

const PeoplePage = ({ setErrApi }: any ): JSX.Element => {
  const [people, setPeople] = useState<null | Array<PeopleType>>(null);
  const [prevPage, setPrevPage] = useState<string>('');
  const [nextPage, setNextPage] = useState<string>('');

  const [counterPage, setCounterPage] = useState<number>(1);
  const queryPage = useQueryParams().get("page");
  const getResource = async (url: string): Promise<any> => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results!.map(({ name, url }: peopleListTypes) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return {
          id,
          name,
          img,
        }
      });
      setPeople(peopleList);
      setPrevPage(changeToHttps(res.previous as string));
      setNextPage(changeToHttps(res.next as string));
      setCounterPage(getPeoplePageId(url));
      setErrApi(!res);
    }
  };

  useEffect(() => {
    getResource(`${API_PEOPLE + queryPage}`);
  }, []);

  return (
    <>
      <PeopleNav
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
        getResource={getResource}
      />
      <PeopleList people={people} />
    </>
  );
};

export default withErrorApi(PeoplePage);
