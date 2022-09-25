// React
import { useState } from "react";
// Icons
import { FaTicketAlt, FaUserAlt, FaCreditCard, FaCheck } from "react-icons/fa";
// Components
import TicketsStep1 from "./ticketSteps/step1/TicketsStep1";
// Context
import { TicketProvider } from "../context/TicketContext";

const Tickets = () => {
  // Active step
  const [activeStep, setActiveStep] = useState(1);

  // State for displaying step 1 (book tickets), setp 2 (fill form), step 3 (pay)
  const [stepToDisplay, setStepToDisplay] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });

  return (
    <div className="w-full py-10 px-2 flex flex-col items-center justify-evenly lg:flex-col lg:items-start">
      {/* New design */}
      <div className="w-full h-[1000px] bg-transparent border-2 border-black  mx-auto">
        {/* Active step section */}
        <div className={`flex items-center justify-center mb-5`}>
          {[
            { step: 1, text: "Select your tickets" },
            {
              step: 2,
              text: "Personal details",
            },
            {
              step: 3,
              text: "Payment",
            },
            {
              step: 4,
              text: "Confirmation",
            },
          ].map((obj, index) => (
            <div key={index} className="relative w-[200px]">
              <div
                className={`relative -left-3 w-[50px] h-[50px] ${
                  obj.step === activeStep ? "bg-black" : "bg-neutral-400"
                }  text-white text-xl rounded-full border-[1px] border-white flex items-center justify-center z-10`}
              >
                {obj.step === 1 ? (
                  <FaTicketAlt />
                ) : obj.step === 2 ? (
                  <FaUserAlt />
                ) : obj.step === 3 ? (
                  <FaCreditCard />
                ) : (
                  <FaCheck />
                )}
              </div>

              <div
                className={`absolute top-2/4 -translate-y-2/4 w-full pl-11 py-1 text-white rounded-md ${
                  obj.step === activeStep ? "bg-black" : "bg-neutral-400"
                }`}
              >
                {obj.text}
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <TicketProvider>
          <TicketsStep1 />
        </TicketProvider>
      </div>

      {/*  */}
    </div>
  );
};

export default Tickets;
