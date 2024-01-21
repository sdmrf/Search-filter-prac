import React, { useState } from "react";
import "./App.scss";

// Components Imports
import {Users} from "./users";
import Table from "./Table";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="app">
      <input type="text" placeholder="Search.." className="search" onChange={handleChange}  />
      <ul className="list">
        <Table data={Users} />
      </ul>
    </div>
  );
};

export default App;
