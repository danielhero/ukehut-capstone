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
import FriendUkuleleList from "./ukuleles/FriendUkuleleList";
import "./Ukehut.css";
import "./UkeHutHeader.css";
import "./ukuleles/Ukulele.css";
import "./Layout.css";

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
      <div className="headerContainer"></div>
      <div className="dataContainer">
        <UserProvider>
          <FriendProvider>
            <UkuleleProvider>
              <UkeSizeProvider>
                <UkeShapeProvider>
                  <div className="ukeCollectionContainer">{components}</div>
                  <div className="ukeBuddyContainer">
                    <SearchBar setTerms={setTerms} />
                    <SearchResults searchTerms={searchTerms} />
                    <div className="dropdownContainer">
                      <FriendDropDown
                        setFriendCollectionId={setFriendCollectionId}
                        setActiveList={setActiveList}
                      />
                    </div>
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
