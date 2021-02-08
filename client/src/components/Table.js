import React from "react";
import Loader from "./Loader/Loader";

const Table = ({ rows, loading, sortData }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th
            onClick={() => {
              sortData("title");
            }}
          >
            Название
          </th>
          <th
            onClick={() => {
              sortData("quantity");
            }}
          >
            Количество
          </th>
          <th
            onClick={() => {
              sortData("distance");
            }}
          >
            Расстояние
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr key={item.id}>
            <td>{item.date} </td>
            <td>{item.title} </td>
            <td>{item.quantity} </td>
            <td>{item.distance} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
