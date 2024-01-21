import React from "react";
import "./App.scss";

// Users Data
import { Users } from "./users";

const App = () => {
  return (
    <div className="app">
      <input type="text" placeholder="Search.." className="search" />
      <ul className="list">
        {Users.map((user) => (
          <li className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
