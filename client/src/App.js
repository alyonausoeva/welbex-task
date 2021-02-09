import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/getCurrentRows";
import SearchForm from "./components/SearchForm/SearchForm";
import getFiltredRows from "./components/Filter/filter";
import getSortedData from "./components/Sort/sort";

import "./App.css";
import getCurrentRows from "./components/Pagination/paginator";

function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrectPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState(true);
  const [condition, setCondition] = useState("");
  const [columnTitle, setColumnTitle] = useState("");

  useEffect(() => {
    const fetchRows = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/api");
      setRows(res.data);
      setLoading(false);
    };
    fetchRows();
  }, []);

  const filtredRows = getFiltredRows(searchText, columnTitle, condition, rows);
  const currentRows = getCurrentRows(
    filtredRows,
    currentPage,
    rowsPerPage,
    setCurrectPage
  );

  const paginate = (pageNumber) => {
    setCurrectPage(pageNumber);
  };

  const onSearchSend = (text, firstSelect, secondSelect) => {
    setSearchText(text);
    setColumnTitle(firstSelect);
    setCondition(secondSelect);
  };

  const sortData = (sortField) => {
    getSortedData(sortField, rows, sort, setRows, setSort);
  };

  return (
    <div className="container">
      <h1>Тестовое задание Welbex</h1>
      <SearchForm onSearchSend={onSearchSend} />
      <Table rows={currentRows} loading={loading} sortData={sortData} />

      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={filtredRows.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
