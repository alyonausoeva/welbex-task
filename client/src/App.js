import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import SearchForm from "./components/SearchForm/SearchForm";

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrectPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState(true);
  const [condition, setCondition] = useState("");
  const [columnTitle, setColumnTitle] = useState("");

  const getFiltredRows = () => {
    if (!searchText || !columnTitle || !condition) {
      return rows;
    }

    return rows.filter((item) => {
      console.log(typeof item[columnTitle].toString());
      if (condition === "equal") {
        return item[columnTitle] == searchText;
      }
      if (condition === "less") {
        return item[columnTitle] < searchText;
      }
      if (condition === "greater") {
        return item[columnTitle] > searchText;
      }
      if (condition === "contain") {
        return item[columnTitle].toString();
      }
      return rows;
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

  const onSearchSend = (text, firstSelect, secondSelect) => {
    setSearchText(text);
    setColumnTitle(firstSelect);
    setCondition(secondSelect);
  };

  const sortData = (sortField) => {
    const clonedRows = rows.concat();
    let orderedRows;
    if (sort) {
      orderedRows = clonedRows.sort((a, b) => {
        return a[sortField] > b[sortField] ? 1 : -1;
      });
    } else {
      orderedRows = clonedRows.sort((a, b) => {
        return a[sortField] < b[sortField] ? 1 : -1;
      });
    }
    setRows(orderedRows);
    setSort(!sort);
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
