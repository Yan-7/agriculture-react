// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Dashboard />
            </div>
          }
        />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
