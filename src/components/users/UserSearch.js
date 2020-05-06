import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./usersProvider";

import User from "./User";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export const SearchResults = ({ searchTerms }) => {
  const { users } = useContext(UserContext);

  const [filteredUsers, setFiltered] = useState([]);
  const [selectedUser, setUsers] = useState({
    users: { id: 0 },
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
          <div
            key={user.id}
            onClick={() => {
              setUsers({ users: user });
              toggle();
            }}
          >
            {user.username}
          </div>
        ))}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedUser.users.username}</ModalHeader>
        <ModalBody>
          <User user={selectedUser.users} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};
