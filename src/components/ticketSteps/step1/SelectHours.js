// react
import { useContext, useState, useEffect } from "react";
// context
import TicketContext from "../../../context/TicketContext";
import SagradaContext from "../../../context/SagradaContext";
// components
import Hour from "./Hour";

const SelectHours = () => {
  //Context
  const {
    userTicketData: { date, time },
  } = useContext(TicketContext);
  const { availableTimes } = useContext(SagradaContext);

  // state for hours
  const [hours, setHours] = useState(null);

  useEffect(() => {
    getHours();
  }, []);

  // get hours if have
  const getHours = () => {
    // get data for selected day if that day is alredy in base - othervwise just continue because in that case we have all tickets available
    availableTimes &&
      availableTimes.forEach((item) => {
        if (
          new Date(item.year, item.month, item.day).getTime() ===
          new Date(date).getTime()
        ) {
          setHours(item.time);
        }
      });
  };

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
        <Hour key={index} hour={hour} time={time} /* hours={hours} */ />
      ))}
    </div>
  );
};

export default SelectHours;
