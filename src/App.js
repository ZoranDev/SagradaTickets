import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import CovidWarning from "./components/CovidWarning";
import Home from "./components/Home";
import Covid from "./components/Covid";

function App() {
  return (
    <Router>
      <Navbar />
      <CovidWarning />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid-info" element={<Covid />} />
      </Routes>
    </Router>
  );
}

export default App;
