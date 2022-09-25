// react
import { useState, useContext } from "react";
// Context
import TicketContext from "../../../context/TicketContext";
// components
import Step1Item from "../../ticketSteps/step1/Step1Item";

const TicketsStep1 = () => {
  // Context
  const {
    userTicketData: { date, time, visitors },
  } = useContext(TicketContext);

  return (
    <div className="w-full">
      <Step1Item id="calendar" data={date} />
      <Step1Item id="time" data={time} />
      <Step1Item id="visitors" data={null} />

      <hr className="mb-5 border-[20px] border-red-200" />
    </div>
  );
};

export default TicketsStep1;
