import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import CovidWarning from "./components/CovidWarning";
import Home from "./components/Home";
import Covid from "./components/Covid";
import Faq from "./components/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <CovidWarning />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid-info" element={<Covid />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
