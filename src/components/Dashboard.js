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
import FriendUkuleleList from "./ukuleles/FriendUkuleleList";

export default () => {
  const [searchTerms, setTerms] = useState(null);
  const [friendCollectionId, setCollectionId] = useState(null);

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h1>UkeHut</h1>
        <small>A place for uke enthusiasts to show off their ukes!</small>
      </div>
      <div className="dataContainer">
        <UserProvider>
          <FriendProvider>
            <UkuleleProvider>
              <UkeSizeProvider>
                <UkeShapeProvider>
                  <div className="ukeBuddyContainer">
                    <SearchBar setTerms={setTerms} />
                    <SearchResults searchTerms={searchTerms} />
                    <FriendDropDown setCollectionId={setCollectionId} />
                  </div>
                  <div className="collectionContainer">
                    <UkuleleList />
                    <FriendUkuleleList
                      friendCollectionId={friendCollectionId}
                    />
                  </div>
                </UkeShapeProvider>
              </UkeSizeProvider>
            </UkuleleProvider>
          </FriendProvider>
        </UserProvider>
      </div>
    </div>
  );
};
