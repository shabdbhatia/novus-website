import React from "react";
import Navbar from "./Header/Navbar";
import Landing from "./HomePage/MainHomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="home">
        <Navbar />
      </div>

      <Landing />
    </div>
  );
}

export default App;
