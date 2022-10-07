// react
import { useContext, useState, useEffect } from "react";
// context
import TicketContext from "../../../context/TicketContext";
import SagradaContext from "../../../context/SagradaContext";

const Hour = ({ hour }) => {
  // context
  const {
    selectTime,
    userTicketData: { date, time },
  } = useContext(TicketContext);
  const { availableTimes } = useContext(SagradaContext);

  // state for available tickets left
  const [ticketsLeft, setTicketsLeft] = useState(null);

  useEffect(() => {
    setTicketsLeft(getTicketsLeft());
  }, []);

  // getTicketsLeft
  const getTicketsLeft = () => {
    let tickets = 50;
    // get data for selected day if that day is alredy in base - othervwise just continue because in that case we have all tickets available
    availableTimes &&
      availableTimes.forEach((item) => {
        if (
          new Date(item.year, item.month, item.day).getTime() ===
          new Date(date).getTime()
        ) {
          item.time.forEach((item) => {
            if (item.time === hour) {
              tickets = item.availableVisitors;
            }
          });
        }
      });
    return tickets;
  };

  //onClick
  const onclick = () => {
    ticketsLeft !== 0 && selectTime(hour);
  };

  return (
    <div
      className={`w-[100px] m-2 p-2 border-[3px] ${
        time === hour ? "border-red-500 text-red-500 font-bold" : "border-black"
      } flex flex-col items-center hover:border-red-500 hover:cursor-pointer hover:text-red-500 flex items-center justify-center`}
      id={hour}
      onClick={onclick}
    >
      {hour}
      <p
        className={`text-[12px] ${
          ticketsLeft >= 10 ? "text-green-500" : "text-red-500"
        } `}
      >
        {ticketsLeft} tickets left
      </p>
    </div>
  );
};

export default Hour;
