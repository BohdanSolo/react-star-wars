import React from "react";

import { useRoutes } from "react-router-dom";

import PeoplePage from "../PeoplePage/peoplePage";
import SearchPage from "../SearchPage/SearchPage";
import PersonPage from "../PersonPage/PersonPage";
import Layout from "../../components/Layout/Layout";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import FavoritePage from "../FavoritePage/FavoritePage";
import styles from "./App.module.scss";

const App = (): JSX.Element => {

  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "people", element: <PeoplePage /> },
        { path: "people/:id", element: <PersonPage /> }, // : means dynamic param
        { path: "favorites", element: <FavoritePage /> },
        { path: "*", element: <NotFoundPage /> },
        { path: "error", element: <ErrorMessage /> },
        { path: "search", element: <SearchPage /> },
      ],
    },
  ]);
  return <div className={styles.wrapper}>{element}</div>;
};

export default App;
