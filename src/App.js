// react
import { useState } from "react";
// Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// From context
import { CalendarProvider } from "./context/CalendarContext";
import { SagradaProvider } from "./context/SagradaContext";
// Components
import LogIn from "./components/LogIn";
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
  // State for show log in form
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <Router>
      <SagradaProvider>
        <Navbar />
        <CovidWarning />
        <CalendarProvider>
          <Routes>
            <Route path="logIn" element={<LogIn />} />
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
