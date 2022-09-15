import calendarContext from "../context/CalendarContext";
import { useContext, useState, useEffect } from "react";

const yesterdayTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate() - 1
).getTime();

const DayBtn = ({ date, year, month }) => {
  // Context stuff
  const { selectedDate, handleClick } = useContext(calendarContext);

  // DayBtn disabled state
  const [disabled, setDisabled] = useState(false);
  // DayBtn class state
  const [btnClass, setBtnClass] = useState("");
  // DayBtnTime state
  const [dayBtnTime, setDayBtnTime] = useState(
    new Date(year, month, date).getTime()
  );

  // Use effect function
  useEffect(() => {
    isDisabled();
    getClass();
    setDayBtnTime(new Date(year, month, date).getTime());
  });

  // onClick function
  const onClick = (e) => handleClick(year, month, e);

  // isDisabled function
  const isDisabled = () => {
    setDisabled(false); // First set that to false otherwise it will set true to DayBtn we do not want
    if (dayBtnTime <= yesterdayTime) {
      setDisabled(true);
    }
  };

  // getClass function
  const getClass = () => {
    if (dayBtnTime === selectedDate)
      return setBtnClass("w-full h-full bg-red-400 cursor-pointer ");
    if (disabled)
      return setBtnClass("w-full h-full bg-slate-100 text-slate-400");
    return setBtnClass("w-full h-full cursor-pointer hover:bg-red-100");
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
