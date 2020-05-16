import React, { useRef } from "react";

export const SearchBar = ({ setTerms }) => {
  const { terms } = useRef();

  return (
    <div className="searchBarContainer">
      <fieldset>
        <div className="form-group">
          <h4 htmlFor="searchTerms">UkeBuddy Search:</h4>
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
