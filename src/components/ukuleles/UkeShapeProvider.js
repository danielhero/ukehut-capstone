import React, { useState, useEffect } from "react";

export const UkeShapeContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const UkeShapeProvider = (props) => {
  const [ukeShapes, setUkeShapes] = useState([]);

  const getUkeShape = () => {
    return fetch("http://localhost:8088/ukeShape")
      .then((res) => res.json())
      .then(setUkeShapes);
  };

  /*
        Load all shapes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
  useEffect(() => {
    getUkeShape();
  }, []);

  useEffect(() => {
    console.log("****  UKESHAPE APPLICATION STATE CHANGED  ****");
  }, [ukeShapes]);

  return (
    <UkeShapeContext.Provider
      value={{
        ukeShapes,
      }}
    >
      {props.children}
    </UkeShapeContext.Provider>
  );
};
