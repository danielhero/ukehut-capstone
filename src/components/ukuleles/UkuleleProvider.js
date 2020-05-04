import React, { useState, useEffect } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const UkuleleContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const UkuleleProvider = (props) => {
  const [ukuleles, setUkuleles] = useState([]);

  const getUkuleles = () => {
    return fetch("http://localhost:8088/ukuleles")
      .then((res) => res.json())
      .then(setUkuleles);
  };

  const addUkulele = (ukuleles) => {
    return fetch("http://localhost:8088/ukuleles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ukuleles),
    }).then(getUkuleles);
  };

  const deleteUkulele = (ukuleles) => {
    return fetch(`http://localhost:8088/ukuleles/${ukuleles.id}`, {
      method: "DELETE",
    }).then(getUkuleles);
  };

  const updateUkulele = (ukuleles) => {
    return fetch(`http://localhost:8088/ukuleles/${ukuleles.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ukuleles),
    }).then(getUkuleles);
  };

  /*
        Load all ukuleles when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
  useEffect(() => {
    getUkuleles();
  }, []);

  useEffect(() => {
    console.log("****  UKULELE APPLICATION STATE CHANGED  ****");
  }, [ukuleles]);

  return (
    <UkuleleContext.Provider
      value={{
        ukuleles,
        addUkulele,
        deleteUkulele,
        updateUkulele,
      }}
    >
      {props.children}
    </UkuleleContext.Provider>
  );
};
