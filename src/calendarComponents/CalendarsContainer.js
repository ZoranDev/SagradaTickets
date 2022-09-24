import { useState, useEffect } from "react";
import Calendar from "./Calendar";

const CalendarsContainer = ({ selectDate }) => {
  // Treba dobiti niz na osnovu kojeg ce se prikazivati kalendari
  const [indexCalendar, setIndexCalendar] = useState(0);

  //State for allMonthsToDisplay - (months to the end of the year and next year)
  const [allMonthsToDisplay, setAllMonthsToDisplay] = useState([]);

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

  // On render component set this state
  useEffect(() => {
    setAllMonthsToDisplay(getAllDisplayedMonthsArray());
  }, []);

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
    allMonthsToDisplay.length !== 0 && (
      <div className="pb-3 px-4 overflow-auto flex flex-col justify-center items-baseline sm:flex-row">
        <Calendar
          year={allMonthsToDisplay[indexCalendar].year}
          month={allMonthsToDisplay[indexCalendar].month}
          moveCalendarLeft={moveCalendarLeft}
          moveCalendarRight={moveCalendarRight}
          selectDate={selectDate}
        />
      </div>
    )
  );
};
export default CalendarsContainer;
