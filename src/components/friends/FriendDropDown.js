import React, { useContext, useState } from "react";
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/usersProvider";

export default ({ setFriendCollectionId, setActiveList }) => {
  const { friends } = useContext(FriendContext);
  const { users } = useContext(UserContext);

  const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  return (
    <>
      <h2>UkeBuddy Collections</h2>
      <fieldset>
        <div className="dropdown">
          <select
            onChange={(e) => {
              if (e.target.value === "0") {
                setActiveList("myUkeList");
              } else {
                setFriendCollectionId(e.target.value);
                setActiveList("friendUkeList");
              }
            }}
          >
            <option value="0">My Collection</option>
            {friends
              .filter((friend) => friend.userId === currentUserId)
              .map((friend) => {
                const userFriend =
                  users.find((user) => user.id === friend.following) || {};

                return (
                  <option key={friend.id} value={userFriend.id}>
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
