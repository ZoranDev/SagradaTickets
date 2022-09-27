// React
import { useState } from "react";
// Context
import { TicketProvider } from "../context/TicketContext";
// Components
import TicketsStep1 from "./ticketSteps/step1/TicketsStep1";
import TicketsStep2 from "./ticketSteps/step2/TicketsStep2";
import TicketsStep3 from "./ticketSteps/step3/TicketsStep3";
import CalculatePrice from "./ticketSteps/CalculatePrice";
// Icons
import { FaTicketAlt, FaUserAlt, FaCreditCard, FaCheck } from "react-icons/fa";

const Tickets = () => {
  // Active step - 1 (date,time,visitors), 2 (personal info), 3 (pay) - 4 (confirmation)
  const [activeStep, setActiveStep] = useState(1);

  // changeActiveStep
  const changeActiveStep = (stepID) => {
    setActiveStep(stepID);
  };

  return (
    <div className="w-full py-10 px-2 flex flex-col items-center justify-evenly lg:flex-col lg:items-start">
      {/* New design */}
      <div className="w-full mx-auto px-[100px] py-5 bg-transparent border-2 border-black ">
        {/* Active step section */}
        <div className={`w-full flex items-center justify-center mb-5`}>
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
          {activeStep === 1 && (
            <TicketsStep1 changeActiveStep={changeActiveStep} />
          )}
          {activeStep === 2 && <TicketsStep2 />}
          {activeStep === 3 && <TicketsStep3 />}
          <CalculatePrice
            changeActiveStep={changeActiveStep}
            activeStep={activeStep}
          />
        </TicketProvider>
      </div>
    </div>
  );
};

export default Tickets;
