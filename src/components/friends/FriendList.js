import React, { useContext, useState } from "react";
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/usersProvider";
import { Dropdown } from "reactstrap";

export default () => {
  return (
    <fieldset>
      <div className="form-group">
        <label htmlFor="searchTerms">UkeBuddy Collections:</label>
        <Dropdown title="SelectUkeBuddy" />
      </div>
    </fieldset>
  );
};
