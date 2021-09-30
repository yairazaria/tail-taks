import React, { useState, createContext } from "react";

export const StoreContext = createContext({});

export const StoreProvider = (props) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const [userInPage, setUserInPage] = useState(1);

  

  return (
    <StoreContext.Provider
      value={{

        data,
        setData,
        isFetching,
        setIsFetching,
        numberOfPages,
        setNumberOfPages,
        userInPage,
        setUserInPage,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

StoreProvider.displayName = "StoreProvider";
