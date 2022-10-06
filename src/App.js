// Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// From context
import { CalendarProvider } from "./context/CalendarContext";
import { SagradaProvider } from "./context/SagradaContext";
// Components
import Navbar from "./components/Navbar";
import Covid from "./components/Covid";
import CovidWarning from "./components/CovidWarning";
import Home from "./components/Home";
import Tickets from "./components/Tickets";
import Faq from "./components/Faq";
import OpeningHours from "./components/OpeningHours";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <SagradaProvider>
        <Navbar />
        <CovidWarning />
        <CalendarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/hours" element={<OpeningHours />} />
            <Route path="/covid-info" element={<Covid />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CalendarProvider>
        <Footer />
      </SagradaProvider>
    </Router>
  );
}

export default App;
