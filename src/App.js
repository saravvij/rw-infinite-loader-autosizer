import React from "react";
import MyList from "./MyList";

export default function App() {
  return (
    <div className="List-Wrapper">
      <header>
        <h2>My Company Header</h2>
      </header>
      <div className="List-Wrapper">
        <div>List Header section</div>
        <MyList />
      </div>
      <footer>
        <h3>All Rights Reserved.</h3>
      </footer>
    </div>
  );
}
