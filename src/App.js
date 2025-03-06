import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNotes from "./pages/marina-diana_lungu/AddNotes";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Note App</h1>
        <Routes>
          <Route path="/" element={<MentorNotes />} />
          <Route path="/marina-diana_lungu" element={<AddNotes />} />
          {/* Add your route here */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
