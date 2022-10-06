// react
import { useContext, useState, useEffect } from "react";
// context
import calendarContext from "../context/CalendarContext";
import SagradaContext from "../context/SagradaContext";
import TicketContext from "../context/TicketContext";

const yesterdayTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate() - 1
).getTime();

const DayBtn = ({ date, year, month }) => {
  // Context stuff
  const { selectedDate, handleClick } = useContext(calendarContext);
  const { availableTimes } = useContext(SagradaContext);
  const { selectDate } = useContext(TicketContext);

  // DayBtn disabled state
  const [disabled, setDisabled] = useState(false);
  // DayBtn class state
  const [btnClass, setBtnClass] = useState("");
  // DayBtnTime state
  const [dayBtnTime, setDayBtnTime] = useState(
    new Date(year, month, date).getTime()
  );
  // Is full state - if in this day all tickets are saled
  const [isFull, setIsFull] = useState(false);

  // Use effect function
  useEffect(() => {
    isDisabled();
    getClass();
    setDayBtnTime(new Date(year, month, date).getTime());
    isFullFunc();
  });

  // onClick function
  const onClick = (e) => {
    selectDate(handleClick(year, month, e));
  };

  // is Full function
  const isFullFunc = () => {
    let isFull = false;
    availableTimes &&
      availableTimes.forEach((item) => {
        if (
          new Date(item.year, item.month, item.day).getTime() ===
          new Date(year, month, date).getTime()
        ) {
          // Check is all times for that day are booked, if true disable that btn and mark it
          let sumOfAvailable = 0;
          item.time.forEach((time) => {
            sumOfAvailable += time.availableVisitors;
          });
          isFull = sumOfAvailable === 0 ? true : false;
        }
      });
    setIsFull(isFull);
  };

  // isDisabled function
  const isDisabled = () => {
    dayBtnTime <= yesterdayTime || isFull
      ? setDisabled(true)
      : setDisabled(false);
  };

  // getClass function
  const getClass = () => {
    if (disabled) {
      return isFull
        ? setBtnClass(
            "w-full h-full border-orange-500 border-[4px] text-slate-400 cursor-not-allowed"
          )
        : setBtnClass(
            "w-full h-full bg-slate-100 text-slate-400 cursor-not-allowed"
          );
    }
    if (dayBtnTime === selectedDate)
      return setBtnClass(
        "w-full h-full border-[4px] border-red-600 cursor-pointer font-bold text-red-600"
      );
    return setBtnClass(
      "w-full h-full cursor-pointer hover:border-red-500 hover:border-[4px]"
    );
  };

  return (
    <td className="w-10 h-10 text-xl text-center">
      <button onClick={onClick} disabled={disabled} className={btnClass}>
        {date}
      </button>
    </td>
  );
};

export default DayBtn;
