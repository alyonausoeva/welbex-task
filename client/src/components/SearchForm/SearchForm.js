import React, { useState } from "react";

const SearchForm = ({ onSearchSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");

  return (
    <>
      <div className="input-group justify-content-between mb-3">
        <div className=" d-flex flex-row">
          <label
            className="input-group-text rounded-0"
            htmlFor="inputGroupSelect01"
          >
            Колонка
          </label>
          <select
            className="form-select mr-3 border #e8ecef text-secondary"
            style={{ width: "200px" }}
            id="inputGroupSelect01"
            onChange={(event) => setFirstSelect(event.target.value)}
          >
            <option defaultValue>Выбрать...</option>
            <option value="quantity">Количество</option>
            <option value="distance">Расстояние</option>
            <option value="title">Название</option>
          </select>
        </div>
        <div className=" d-flex flex-row">
          <label
            className="input-group-text rounded-0"
            htmlFor="inputGroupSelect02"
          >
            Условие
          </label>
          <select
            style={{ width: "200px" }}
            className="form-select mr-3 border #e8ecef text-secondary"
            id="inputGroupSelect02"
            onChange={(event) => setSecondSelect(event.target.value)}
          >
            <option defaultValue>Выбрать...</option>
            <option value="contain">Содержит</option>
            <option value="greater">Больше</option>
            <option value="less">Меньше</option>
            <option value="equal">Равно</option>
          </select>
        </div>
        <div className=" d-flex flex-row ">
          <input
            style={{ width: "300px" }}
            type="text"
            className="form-control"
            placeholder="Значение для фильтрации..."
            aria-label="Значение для фильтрации..."
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
            Поиск
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchForm;
