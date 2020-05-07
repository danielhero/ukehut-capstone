import React, { useContext, useState } from "react";
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/usersProvider";

export default () => {
  const { friends } = useContext(FriendContext);
  const { users } = useContext(UserContext);

  const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  return (
    <>
      <h2>UkeBuddy Collections</h2>
      <div>
        <select value={""}>
          {friends
            .filter((friend) => friend.userId === currentUserId)
            .map((friend) => {
              const userFriends = users.filter(
                (user) => user.id === friend.following
              );

              return (
                <option key={friend.id} value={""}>
                  {friend.following}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};
