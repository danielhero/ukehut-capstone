import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./usersProvider";
import { FriendContext } from "../friends/FriendsProvider";

import User from "./User";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export const SearchResults = ({ searchTerms }) => {
  const { users } = useContext(UserContext);
  const { friends, addFriend } = useContext(FriendContext);

  const [filteredUsers, setFiltered] = useState([]);

  const [selectedUser, setUsers] = useState({
    users: { id: 0 },
    username: null,
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const constructNewFriend = () => {
    const userId = parseInt(localStorage.getItem("ukehut_user"));

    addFriend({
      userId: userId,
      following: selectedUser.users.id,
    });
  };

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
      <h3>UkeHutters</h3>
      <div className="users">
        {filteredUsers.map((user) => (
          <div
            className=" fakeLink href hover"
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
        <ModalFooter>
          <Button
            color="info"
            onClick={(event) => {
              const AlreadyAFriend =
                friends.find(
                  (friend) => friend.following === selectedUser.users.id
                ) || {};
              if (selectedUser.users.id === AlreadyAFriend.following) {
                window.alert("Already a UkeBuddy!");
              } else {
                constructNewFriend();

                toggle();
              }
            }}
          >
            Add UkeBuddy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
