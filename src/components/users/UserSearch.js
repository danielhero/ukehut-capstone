import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./usersProvider";
import { FriendContext } from "../friends/FriendsProvider";
import User from "./User";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export const SearchResults = ({ searchTerms }) => {
  const { users } = useContext(UserContext);

  const [filteredUsers, setFiltered] = useState([]);
  const [selectedUser, setUser] = useState({
    user: { id: 0 },
    username: null,
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      setFiltered([]);
    }
  }, [searchTerms, users]);

  return (
    <div className="searchResults">
      <h3>Results</h3>
      <div className="users">
        {filteredUsers.map((user) => (
          <div className="fakeLink href" key={user.id}>
            {user.username}
          </div>
        ))}
      </div>
    </div>
  );
};
