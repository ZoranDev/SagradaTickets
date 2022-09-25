// react
import { useState, useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";
// components
import Step1Item from "../../ticketSteps/step1/Step1Item";
// Icons
import { FaAngleRight } from "react-icons/fa";

const TicketsStep1 = () => {
  // Context
  const {
    userTicketData: { date, time },
    sumOfVisitors,
    calculatePrice,
  } = useContext(TicketContext);

  return (
    <div className="w-full">
      {/* Display midsteps */}
      {["calendar", "time", "visitors"].map((item, index) => (
        <Step1Item key={index} id={item} />
      ))}

      {/* Calculate section */}
      <div className="w-full mt-6 flex items-center justify-end">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-full text-md uppercase text-center">Total amount</h1>
          <h1 className="w-full text-3xl font-bold text-center">
            {calculatePrice()}
            <span className="ml-2">€</span>{" "}
          </h1>
        </div>
        <button
          className={`h-[60px] px-[10px] ml-5 text-[20px] text-white ${
            date && time && sumOfVisitors !== 0
              ? "bg-red-500"
              : "bg-neutral-400"
          } rounded flex items-center justify-center transition-color duration-[600ms]`}
        >
          CONTINUE
          <FaAngleRight className="ml-2 text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default TicketsStep1;
