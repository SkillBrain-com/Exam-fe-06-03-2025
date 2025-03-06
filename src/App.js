import React from "react";
// import MentorNotes from "./pages/mentor/AddNotes";
import RaduCiucescuNotes from "./pages/raduciucescu/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Note App</h1>
        <Routes>
          {/* <Route path="/" element={<MentorNotes />} /> */}
          <Route path="/" element={<RaduCiucescuNotes />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
