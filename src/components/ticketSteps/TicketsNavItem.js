// react
import { useContext } from "react";
// context
import TicketContext from "../../context/TicketContext";
// Icons
import { FaTicketAlt, FaUserAlt, FaCreditCard, FaCheck } from "react-icons/fa";

const TicketsNavItem = ({ step, text }) => {
  // context
  const { activeStep } = useContext(TicketContext);

  return (
    <div className="relative w-[200px] flex justify-center lg:justify-start">
      <div
        className={`relative -left-3 w-[50px] h-[50px] ${
          step === activeStep ? "bg-black" : "bg-neutral-400"
        }  text-white text-xl rounded-full border-[1px] border-white flex items-center justify-center z-20`}
      >
        {step === 1 ? (
          <FaTicketAlt />
        ) : step === 2 ? (
          <FaUserAlt />
        ) : step === 3 ? (
          <FaCreditCard />
        ) : (
          <FaCheck />
        )}
      </div>

      <div
        className={`${step === activeStep ? "bg-black" : "bg-neutral-400"} ${
          step === 4 && "hidden lg:block"
        } w-full absolute top-2/4 -translate-y-2/4 translate-x-2/4 z-10 py-1 text-white rounded-md lg:translate-x-0 lg:pl-11`}
      >
        <h1 className="text-[0px] lg:text-lg">{text}</h1>
      </div>
    </div>
  );
};

export default TicketsNavItem;
