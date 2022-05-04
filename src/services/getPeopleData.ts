import {
  GUIDE_IMG_EXTENSIONS,
  HTTP,
  HTTPS,
  SWAPI_PARAM_PAGE,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_IMG_PERSON
} from "../constants/api-constants";

const checkProtocol = (url: string): typeof HTTP | typeof HTTPS => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS;
  }
  return HTTP;
};

const getId = (url: string, category: string): number => {
  const protocol = checkProtocol(url);

  return +url
    .replace(protocol + SWAPI_ROOT + SWAPI_PEOPLE, "")
    .replace(/\//g, "");
};

export const getPeopleId = (url: string): number => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = (id: number): string =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSIONS}`;

export const getPeoplePageId = (url: string | undefined): number => {
  const pos = url!.lastIndexOf(SWAPI_PARAM_PAGE);
  return +url!.slice(pos + SWAPI_PARAM_PAGE.length, url!.length)
}

