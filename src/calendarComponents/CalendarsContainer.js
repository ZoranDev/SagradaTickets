// react
import { useContext } from "react";
// context
import calendarContext from "../context/CalendarContext";
// components
import Calendar from "./Calendar";

const CalendarsContainer = () => {
  // context
  const { allMonthsToDisplay, indexCalendar } = useContext(calendarContext);

  return (
    allMonthsToDisplay.length !== 0 && (
      <div className="pb-3 overflow-auto flex flex-col justify-center items-baseline sm:px-4">
        <Calendar
          year={allMonthsToDisplay[indexCalendar].year}
          month={allMonthsToDisplay[indexCalendar].month}
        />
        {/* Legend for calendar btns */}
        <div>
          <div className="my-2 flex items-center justify-left">
            <div className="w-[30px] h-[30px] bg-slate-200 text-slate-400"></div>
            <p className="ml-2">Disabled</p>
          </div>
          <div className="flex items-center justify-left">
            <div className="w-[30px] h-[30px] border-orange-500 border-[4px] text-slate-400"></div>
            <p className="ml-2">Not available tickets</p>
          </div>
        </div>
      </div>
    )
  );
};
export default CalendarsContainer;
