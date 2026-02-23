import { useState } from "react";

const stocks = [
  {
    name: "SBI",
    type: "BSE",
  },
  {
    name: "ICICI",
    type: "NSE",
  },
  {
    name: "Fashion",
    type: "NSE",
  },
  {
    name: "Zomato",
    type: "BSE",
  },
];

export default function WatchListFilter() {
  const [filterType, setFilterType] = useState("ALL");

  const filterStocks = stocks.filter(function (stock) {
    if (filterType === "ALL") {
      return true;
    }
    return stock.type === filterType;
  });

  // const filteredStocks = stocks.filter((stock) => {
  //   if (filterType === "ALL") return true;
  //   return stock.type === filterType;
  // });

  return (
    <>
      <h3>WatchList Filter</h3>
      <select
        onChange={(e) => setFilterType(e.target.value)}
        value={filterType}
        name="filter"
        id=""
        {...sessionStorage.setItem("filterType", filterType)}
      >
        <option value="ALL">ALL </option>
        <option value="NSE"> NSE </option>
        <option value="BSE">BSE</option>
      </select>

      <ul>
        {filterStocks.map((stock, index) => (
          <li key={index}>
            {stock.name} <strong>{stock.type}</strong>
          </li>
        ))}
      </ul>
        {...sessionStorage.getItem("filterType")}
    </>
  );
}
