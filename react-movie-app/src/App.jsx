import { useState } from "react";
import "./App.css";


import FetchButton from "./components/FetchButton";


function App() {
  
  return (
  <div id="app">
    <h1>Movie List</h1>
   
    <FetchButton/>
    
  </div>
  )
}

export default App;
