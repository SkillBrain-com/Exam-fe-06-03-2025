import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNotes from "./pages/lungu_marina-diana/AddNotes";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Note App</h1>
        <Routes>
          <Route path="/" element={<MentorNotes />} />
          <Route path="/lungu_marina-diana" element={<AddNotes />} />
          {/* Add your route here */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
