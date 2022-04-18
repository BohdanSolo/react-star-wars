
// @ts-ignore
import React, { useState } from "react";
// @ts-ignore
import ErrorMessage from "../components/errorMessage/ErrorMessage.tsx";

const withErrorApi = (View: any) => {
  return (props: any) => {
    const [errApi, setErrApi] = useState<boolean>(false);
    return (
      <>{errApi ? <ErrorMessage/> : <View setErrApi={setErrApi} {...props} />}</>
    );
  };
};

export default withErrorApi;
