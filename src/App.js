import React from "react";
import Dashboard from "./Dashboard"; // Ensure this path is correct
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* <Route path="/plants" element={<PlantLibrary />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
