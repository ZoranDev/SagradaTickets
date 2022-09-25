import { useState, createContext, useEffect } from "react";

const calendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  // State for selected dates - selected by user
  const [selectedDate, setSelectedDate] = useState(null);

  // handle click function
  const handleClick = (year, month, e) => {
    // Get date based on clicked number
    let clickedDate = new Date(
      year,
      month,
      parseInt(e.target.textContent)
    ).getTime();

    setSelectedDate(clickedDate);
    return clickedDate;
  };

  return (
    <calendarContext.Provider
      value={{
        selectedDate,
        handleClick,
      }}
    >
      {children}
    </calendarContext.Provider>
  );
};

export default calendarContext;
