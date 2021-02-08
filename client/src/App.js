import axios from "axios";
import React, { useState, useEffect } from "react";

import Table from "./components/Table";
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm/SearchForm";

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrectPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("asc");

  const getFiltredRows = () => {
    if (!searchText) {
      return rows;
    }

    return rows.filter((item) => {
      console.log(searchText);
      return item["title"].includes(searchText);
    });
  };

  const filtredRows = getFiltredRows();

  useEffect(() => {
    const fetchRows = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/api");
      setRows(res.data);
      setLoading(false);
    };
    fetchRows();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filtredRows.slice(indexOfFirstRow, indexOfLastRow);
  const paginate = (pageNumber) => setCurrectPage(pageNumber);

  const onSearchSend = (text) => {
    setSearchText(text);
  };

  const sortData = (sortField) => {
    const clonedRows = rows.concat();
    const orderedRows = clonedRows.sort((a, b) => {
      return a.sortField > b.sortField ? 1 : -1;
    });
    console.log(orderedRows);
  };

  return (
    <div className="container">
      <h1>My Table</h1>
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
