import React, { useContext, useRef } from "react";
import { FriendContext } from "./FriendsProvider";

import { Button } from "reactstrap";

export default (props) => {
  const { addFriend } = useContext(FriendContext);

  const constructNewFriend = () => {
    const userId = parseInt(localStorage.getItem("ukehut_user"));

    addFriend({
      userId: userId,
      following: selectedUser.users.id,
    }).then(props.toggler);
  };

  return (
    <>
      <Button
        onClick={() => {
          constructNewFriend();
        }}
        className="primary"
      >
        Add UkeBuddy
      </Button>
    </>
  );
};
