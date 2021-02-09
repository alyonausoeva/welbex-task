import React, { useState } from "react";

const SearchForm = ({ onSearchSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");

  return (
    <>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Колонка
        </label>
        <select
          className="form-select mr-3"
          id="inputGroupSelect01"
          onChange={(event) => setFirstSelect(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          <option value="quantity">Количество</option>
          <option value="distance">Расстояние</option>
          <option value="title">Название</option>
        </select>
        <label className="input-group-text " htmlFor="inputGroupSelect02">
          Условие
        </label>
        <select
          className="form-select mr-3"
          id="inputGroupSelect02"
          onChange={(event) => setSecondSelect(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          <option value="contain">Содержит</option>
          <option value="greater">Больше</option>
          <option value="less">Меньше</option>
          <option value="equal">Равно</option>
        </select>
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
          onClick={() => onSearchSend(inputValue, firstSelect, secondSelect)}
        >
          Button
        </button>
      </div>
    </>
  );
};
export default SearchForm;
