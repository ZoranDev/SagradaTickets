import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// From context
import { CalendarProvider } from "./context/CalendarContext";
// Components
import Navbar from "./components/Navbar";
import Covid from "./components/Covid";
import CovidWarning from "./components/CovidWarning";
import Home from "./components/Home";
import Tickets from "./components/Tickets";
import TicketFinalSteps from "./components/TicketFinalSteps";
import Faq from "./components/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <CovidWarning />
      <CalendarProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/nextSteps" element={<TicketFinalSteps />} />
          <Route path="/covid-info" element={<Covid />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </CalendarProvider>
    </Router>
  );
}

export default App;
