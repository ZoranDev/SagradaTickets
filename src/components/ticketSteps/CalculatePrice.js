//react
import { useContext, useState, useEffect } from "react";
// context
import TicketContext from "../../context/TicketContext";
// icons
import { FaAngleRight } from "react-icons/fa";

const CalculatePrice = ({ changeActiveStep, activeStep }) => {
  // context
  const {
    calculatePrice,
    userTicketData,
    userTicketData: {
      date,
      time,
      personalInfo: { name, lastName, email1, email2, phone, country },
      termsAndConditions: { general, privacy, information },
    },
    sumOfVisitors,
  } = useContext(TicketContext);

  //state for move on next step
  const [moveOn, setMoveOn] = useState(false);

  useEffect(() => {
    activeStep === 1 && date && time && sumOfVisitors !== 0
      ? setMoveOn(true)
      : setMoveOn(false);
    activeStep === 2 &&
    name !== "" &&
    lastName !== "" &&
    phone !== "" &&
    country !== "" &&
    email1 !== "" &&
    email2 !== "" &&
    general &&
    privacy
      ? setMoveOn(true)
      : setMoveOn(false);
  }, [userTicketData]);

  //handleClick
  const handleClick = () => {
    activeStep === 1 && date && time && sumOfVisitors !== 0
      ? changeActiveStep(2)
      : changeActiveStep(3);
  };

  return (
    <div className="w-full mt-6 flex items-center justify-end">
      <div className="flex flex-col items-center justify-center">
        <h1 className="w-full text-md uppercase text-center">Total amount</h1>
        <h1 className="w-full text-3xl font-bold text-center">
          {calculatePrice()}
          <span className="ml-2">€</span>
        </h1>
      </div>
      <button
        onClick={handleClick}
        className={`h-[60px] px-[20px] ml-5 text-[20px] text-white ${
          moveOn
            ? "bg-red-500 cursor-pointer"
            : "bg-neutral-400 cursor-not-allowed"
        } rounded flex items-center justify-center transition-color duration-[400ms] active:scale-[0.95]`}
      >
        {activeStep === 1 ? "CONTINUE" : "PAY"}
        <FaAngleRight className="ml-2 text-[20px]" />
      </button>
    </div>
  );
};

export default CalculatePrice;
