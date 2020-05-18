import React, { useRef } from "react";

export const SearchBar = ({ setTerms }) => {
  const { terms } = useRef();

  return (
    <div className="searchBarContainer">
      <fieldset>
        <div className="form-group">
          <h2 htmlFor="searchTerms">UkeBuddy Search</h2>
          <input
            onKeyUp={(e) => setTerms(e.target.value)}
            type="text"
            id="searchTerms"
            ref={terms}
            required
            autoFocus
            className="form-control"
          />
        </div>
      </fieldset>
    </div>
  );
};
