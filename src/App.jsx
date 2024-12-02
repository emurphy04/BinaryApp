import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import PreviousTrees from "./components/PreviousTrees";

function App() {
  return (
    <Router>
      <div>
        <h1>Binary Search Tree App</h1>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/previous-trees" element={<PreviousTrees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

