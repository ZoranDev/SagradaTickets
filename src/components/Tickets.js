// React
import { useState } from "react";
// Context
import { TicketProvider } from "../context/TicketContext";
// Components
import TicketsStep1 from "./ticketSteps/step1/TicketsStep1";
import TicketsStep2 from "./ticketSteps/step2/TicketsStep2";
import TicketsStep3 from "./ticketSteps/step3/TicketsStep3";
import TicketsStep4 from "./ticketSteps/step4/TicketsStep4";
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
    <div className="w-full mx-auto  py-5 bg-transparent lg:px-[100px] sm:px-3">
      {/* Display active step section */}
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
          <div
            key={index}
            className="relative w-[200px] flex justify-center lg:justify-start"
          >
            <div
              className={`relative -left-3 w-[50px] h-[50px] ${
                obj.step === activeStep ? "bg-black" : "bg-neutral-400"
              }  text-white text-xl rounded-full border-[1px] border-white flex items-center justify-center z-20`}
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
              className={`${
                obj.step === activeStep ? "bg-black" : "bg-neutral-400"
              } ${
                obj.step === 4 && "hidden lg:block"
              } w-full absolute top-2/4 -translate-y-2/4 translate-x-2/4 z-10 py-1 text-white rounded-md lg:translate-x-0 lg:pl-11`}
            >
              <h1 className="text-[0px] lg:text-lg">{obj.text}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Steps */}
      <TicketProvider>
        {activeStep === 1 && <TicketsStep1 />}
        {activeStep === 2 && <TicketsStep2 />}
        {activeStep === 3 && <TicketsStep3 />}
        {activeStep === 4 && <TicketsStep4 />}
        {activeStep !== 4 && (
          <CalculatePrice
            changeActiveStep={changeActiveStep}
            activeStep={activeStep}
          />
        )}
      </TicketProvider>
    </div>
  );
};

export default Tickets;
