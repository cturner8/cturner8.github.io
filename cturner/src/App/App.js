import React from 'react';
import './App.css';
import { MenuBar } from "../Layout/MenuBar";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes />
    </div>
  );
}

export default App;
