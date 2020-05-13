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
  const [friendCollectionId, setFriendCollectionId] = useState(null);
  const [activeList, setActiveList] = useState();
  const [components, setComponents] = useState();

  const showFriendUkeList = () => (
    <div className="collectionContainer">
      <UkuleleProvider>
        <UkeSizeProvider>
          <UkeShapeProvider>
            <FriendUkuleleList friendCollectionId={friendCollectionId} />
          </UkeShapeProvider>
        </UkeSizeProvider>
      </UkuleleProvider>
    </div>
  );

  const showMyUkeList = () => (
    <div className="collectionContainer">
      <UkuleleProvider>
        <UkeSizeProvider>
          <UkeShapeProvider>
            <UkuleleList />
          </UkeShapeProvider>
        </UkeSizeProvider>
      </UkuleleProvider>
    </div>
  );

  useEffect(() => {
    if (activeList === "friendUkeList") {
      setComponents(showFriendUkeList);
    } else {
      setComponents(showMyUkeList);
    }
  }, [activeList, friendCollectionId]);

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h1 className="pageHeader">UkeHut</h1>
        <small className="pageTag">
          A place for uke enthusiasts to show off their ukes!
        </small>
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
                    <FriendDropDown
                      setFriendCollectionId={setFriendCollectionId}
                      setActiveList={setActiveList}
                    />
                  </div>
                  <div className="ukeCollectionContainer">{components}</div>
                </UkeShapeProvider>
              </UkeSizeProvider>
            </UkuleleProvider>
          </FriendProvider>
        </UserProvider>
      </div>
    </div>
  );
};
