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
      creditCardInfo: { num1, num2, num3, num4, month, year, cvc },
    },
    sumOfVisitors,
  } = useContext(TicketContext);

  //state for move on next step
  const [moveOn, setMoveOn] = useState(false);

  useEffect(() => {
    setMoveOn(false);
    activeStep === 1 && isStep1Fulfiled() && setMoveOn(true);
    activeStep === 2 && isStep2Fulfiled() && setMoveOn(true);
    activeStep === 3 && isStep3Fulfiled() && setMoveOn(true);
  }, [userTicketData, activeStep]);

  //handleClick
  const handleClick = () => {
    moveOn && activeStep === 1
      ? changeActiveStep(2)
      : activeStep === 2
      ? changeActiveStep(3)
      : changeActiveStep(4);
  };

  // check if have all info for step 1
  const isStep1Fulfiled = () => {
    return date && time && sumOfVisitors !== 0;
  };

  // check if have all info for step 2
  const isStep2Fulfiled = () => {
    return (
      name !== "" &&
      lastName !== "" &&
      phone !== "" &&
      country !== "" &&
      email1 !== "" &&
      email2 !== "" &&
      general &&
      privacy
    );
  };

  //isStep3Fulfiled
  const isStep3Fulfiled = () => {
    return (
      num1 !== "" &&
      num2 !== 0 &&
      num3 !== "" &&
      num4 !== "" &&
      month !== "" &&
      year !== "" &&
      cvc !== ""
    );
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
