// react
import { useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";

const SelectHours = ({ selectHours }) => {
  //Context
  const {
    userTicketData: { time },
  } = useContext(TicketContext);
  return (
    <div className="w-full flex items-center justify-center flex-wrap">
      {[
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ].map((hour, index) => (
        <div
          className={`w-[100px] m-2 p-2 border-[3px] ${
            time === hour
              ? "border-red-500 text-red-500 font-bold"
              : "border-black"
          } hover:border-red-500 hover:cursor-pointer hover:text-red-500 flex items-center justify-center`}
          key={index}
          id={hour}
          onClick={selectHours}
        >
          {hour}
        </div>
      ))}
    </div>
  );
};

export default SelectHours;
