import React, { useState, useEffect } from "react";

export const UkeSizeContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const UkeSizeProvider = (props) => {
  const [ukeSize, setUkeSize] = useState([]);

  const getUkeSize = () => {
    return fetch("http://localhost:8088/ukeSize")
      .then((res) => res.json())
      .then(setUkeSize);
  };

  /*
        Load all sizes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
  useEffect(() => {
    getUkeSize();
  }, []);

  useEffect(() => {
    console.log("****  UKESIZE APPLICATION STATE CHANGED  ****");
  }, [ukeSize]);

  return (
    <UkeSizeContext.Provider
      value={{
        ukeSize,
      }}
    >
      {props.children}
    </UkeSizeContext.Provider>
  );
};
