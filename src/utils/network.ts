import axios from "axios";
import { HTTP, HTTPS } from "../constants/api-constants";

export const changeToHttps = (url: string): string =>
  url ? url.replace(HTTP, HTTPS) : url;
const instance = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface PromiseTypes {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<any>;
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color?: string;
  films?: Array<string> | null;
  gender?: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  species?: [];
  starships: Array<string> | null;
  vehicles: Array<string>;
}

export const getApiResource = async (
  url: string
): Promise<PromiseTypes | false> => {
  try {
    let res = await instance.get(url);
    if (res.status === 404) {
      console.error("Could not fetch due to 404 err: ", res.status);
      return false;
    }
    return await res.data;
  } catch (e: any) {
    console.error("Could not fetch: ", e.message);
    return false;
  }
};

/*(async () => {
    const body = await getApiResource('people/');
    console.log(body);
})()*/

export const makeCuncurrentRequest = async (
  url: Array<string> | null | undefined
) => {
  return await Promise.all(
    url!.map((res) => axios.get(res).then((res) => res.data))
  );
};
