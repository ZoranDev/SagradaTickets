// react
import { useContext } from "react";
// context
import calendarContext from "../context/CalendarContext";
// components
import DayBtn from "./DayBtn";
// icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = ({ year, month }) => {
  // context
  const { moveCalendarLeft, moveCalendarRight } = useContext(calendarContext);

  // get number of days for specific month and year
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get position of first day in week
  const firstDay = new Date(year, month, 0).getDay(); // izmedju 0-6

  // Get number of days in current month
  const currentMonthDays = daysInMonth(year, month);

  // Date - between 1 and length of month
  let date = 1;

  return (
    <div className="min-w-[300px] w-full h-[310px] bg-white sm:w-[500px]">
      <div className="mb-3 flex justify-center items-center text-xl relative">
        <FaAngleLeft
          className="text-xl absolute left-2 hover:scale-[1.5] hover:text-red-500 hover:cursor-pointer transition-transform duration-[400ms] "
          onClick={moveCalendarLeft}
        />

        <div className="mr-4">{months[month]}</div>
        <div>{year}</div>

        <FaAngleRight
          className="text-xl absolute right-2 hover:scale-[1.5] hover:text-red-500 hover:cursor-pointer transition-transform duration-[400ms] "
          onClick={moveCalendarRight}
        />
      </div>
      <table className="w-full">
        <thead className="border-b-8 border-transparent">
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5, 6].map((row, index) => {
            // Positioning first day of month based on week day
            if (row === 1) {
              return (
                <tr key={index}>
                  {[0, 1, 2, 3, 4, 5, 6].map((day, index) => {
                    if (day < firstDay) {
                      return <td key={index}></td>;
                    } else {
                      date = date + 1;
                      return (
                        <DayBtn
                          key={index}
                          date={date - 1}
                          year={year}
                          month={month}
                        />
                      );
                    }
                  })}
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  {[1, 2, 3, 4, 5, 6, 7].map((day, index) => {
                    if (date <= currentMonthDays) {
                      date = date + 1;
                      return (
                        <DayBtn
                          key={index}
                          date={date - 1}
                          year={year}
                          month={month}
                        />
                      );
                    } else {
                      date++;
                      return <td key={index}></td>;
                    }
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
