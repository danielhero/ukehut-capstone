import React, { useState, useEffect } from "react";
import { UkuleleProvider } from "./ukuleles/UkuleleProvider";
import UkuleleList from "./ukuleles/UkuleleList";
import { UkeShapeProvider } from "./ukuleles/UkeShapeProvider";
import { UkeSizeProvider } from "./ukuleles/UkeSizeProvider";
import { SearchBar } from "./users/UserSearchBar";
import { UserProvider } from "./users/usersProvider";
import { SearchResults } from "./users/UserSearch";
import { FriendProvider } from "./friends/FriendsProvider";
import FriendDropDown from "./friends/FriendDropDown";
import "./Ukehut.css";
import "./UkeHutHeader.css";

export default () => {
  const [searchTerms, setTerms] = useState(null);
  const [dropTerms, setDrops] = useState(null);

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h1>UkeHut</h1>
        <small>A place for uke enthusiasts to show off their ukes!</small>
      </div>
      <div className="ukeContainer">
        <UserProvider>
          <FriendProvider>
            <UkuleleProvider>
              <UkeSizeProvider>
                <UkeShapeProvider>
                  <SearchBar setTerms={setTerms} />
                  <SearchResults searchTerms={searchTerms} />
                  <FriendDropDown />
                  <UkuleleList />
                </UkeShapeProvider>
              </UkeSizeProvider>
            </UkuleleProvider>
          </FriendProvider>
        </UserProvider>
      </div>
    </div>
  );
};
