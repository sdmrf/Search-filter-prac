import React, { useState } from "react";
import "./App.scss";

// Components Imports
import { Users } from "./users";
import Table from "./Table";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const keys = ["first_name", "last_name", "email"];


  // Search Function
  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) =>
        item[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search.."
        className="search"
        onChange={handleChange}
      />
      <ul className="list">
        <Table data={Search(Users)} />
      </ul>
    </div>
  );
};

export default App;
