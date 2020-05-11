import React, { useContext, useState } from "react";
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/usersProvider";

export default (setDrops) => {
  const { friends } = useContext(FriendContext);
  const { users } = useContext(UserContext);

  const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  return (
    <>
      <h2>UkeBuddy Collections</h2>
      <fieldset>
        <div>
          <select onChange={(e) => setDrops(e.target.value)}>
            <option value="0">Choose a Collection</option>
            {friends
              .filter((friend) => friend.userId === currentUserId)
              .map((friend) => {
                const userFriend =
                  users.find((user) => user.id === friend.following) || {};

                return (
                  <option key={friend.id} value={userFriend.username}>
                    {userFriend.username}
                  </option>
                );
              })}
          </select>
        </div>
      </fieldset>
    </>
  );
};
