import React, { useState } from "react";

const SearchForm = ({ onSearchSend }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => onSearchSend(inputValue)}
        >
          Button
        </button>
      </div>
    </>
  );
};
export default SearchForm;
