import React, { useContext, useState } from "react";
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/usersProvider";
import { Dropdown } from "reactstrap";

export default () => {
  // const { friends } = useContext(FriendContext);
  // const { users } = useContext(UserContext);

  // const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  return (
    <div className="friends">
      {/* {friends
          .filter((friend) => friend.userId === currentUserId)
          .map((friend) => {
            const friendUsername =
              users.find((user) => user.id === friend.following) || [];}              */}

      <Dropdown>
        <Dropdown.Menu>
          <ul>Friend Here</ul>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
