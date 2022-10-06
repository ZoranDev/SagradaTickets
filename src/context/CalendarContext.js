import { useState, createContext, useEffect } from "react";

const calendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  // Index to move calendar left or right
  const [indexCalendar, setIndexCalendar] = useState(0);

  //State for allMonthsToDisplay - (months to the end of the year and next year)
  const [allMonthsToDisplay, setAllMonthsToDisplay] = useState([]);

  // State for selected dates - selected by user
  const [selectedDate, setSelectedDate] = useState(null);

  // On render component set this state
  useEffect(() => {
    setAllMonthsToDisplay(getAllDisplayedMonthsArray());
  }, []);

  // getAllDisplayedMonthsArray function
  const getAllDisplayedMonthsArray = () => {
    return Array(12 - new Date().getMonth() + 12)
      .fill(null)
      .map((u, i) =>
        i < 12 - new Date().getMonth()
          ? {
              year: new Date().getFullYear(),
              month: new Date().getMonth() + i,
            }
          : {
              year: new Date().getFullYear() + 1,
              month: new Date().getMonth() + i - 12,
            }
      );
  };

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

  //moveCalendarLeft
  const moveCalendarLeft = () => {
    indexCalendar > 0 && setIndexCalendar(indexCalendar - 1);
  };

  //moveCalendarRight
  const moveCalendarRight = () => {
    indexCalendar < allMonthsToDisplay.length - 1 &&
      setIndexCalendar(indexCalendar + 1);
  };

  return (
    <calendarContext.Provider
      value={{
        selectedDate,
        indexCalendar,
        allMonthsToDisplay,
        handleClick,
        moveCalendarLeft,
        moveCalendarRight,
      }}
    >
      {children}
    </calendarContext.Provider>
  );
};

export default calendarContext;
