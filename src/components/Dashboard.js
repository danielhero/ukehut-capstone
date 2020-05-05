import React, { useState, useEffect } from "react";
import { UkuleleProvider } from "./ukuleles/UkuleleProvider";
import UkuleleList from "./ukuleles/UkuleleList";
import { UkeShapeProvider } from "./ukuleles/UkeShapeProvider";
import { UkeSizeProvider } from "./ukuleles/UkeSizeProvider";
import { SearchBar } from "./users/UserSearchBar";
import { UserProvider } from "./users/usersProvider";
import { SearchResults } from "./users/UserSearch";

export default () => {
  const [searchTerms, setTerms] = useState(null);

  return (
    <div className="mainContainer">
      <UserProvider>
        <UkuleleProvider>
          <UkeSizeProvider>
            <UkeShapeProvider>
              <SearchBar setTerms={setTerms} />
              <SearchResults searchTerms={searchTerms} />
              <UkuleleList />
            </UkeShapeProvider>
          </UkeSizeProvider>
        </UkuleleProvider>
      </UserProvider>
    </div>
  );
};
