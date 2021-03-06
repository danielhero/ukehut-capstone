import React, { useState, useEffect } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("****  Users APPLICATION STATE CHANGED  ****");
  }, [users]);

  return (
    <UserContext.Provider
      value={{
        users,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
