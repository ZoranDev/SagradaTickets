//react
import { useContext, useState, useEffect } from "react";
// context
import TicketContext from "../../context/TicketContext";
// icons
import { FaAngleRight, FaLock } from "react-icons/fa";

const CalculatePrice = ({ changeActiveStep, activeStep }) => {
  // context
  const {
    userTicketData,
    calculatePrice,
    userTicketData: {
      date,
      time,
      visitors,
      personalInfo: {
        name,
        lastName,
        phone,
        email1,
        email2,
        country,
        isErrInForm,
      },
      termsAndConditions: { general, privacy, information },
      creditCardInfo: {
        num1,
        num2,
        num3,
        num4,
        expireMonth,
        expireYear,
        cvc,
        isErrInCardInfo,
      },
    },
    sumOfVisitors,
  } = useContext(TicketContext);

  // State for move on to the next step
  const [canMoveOn, setCanMoveOn] = useState(false);

  useEffect(() => {
    (isStepOneFulfiled() && activeStep === 1) ||
    (isStepTwoFulfiled() && activeStep === 2) ||
    (isStepThreeFulfiled() && activeStep === 3)
      ? setCanMoveOn(true)
      : setCanMoveOn(false);
  }, [userTicketData]);

  // MOZDA OVE PREBACITI U CONTEXT MOZDA JE LAKSE TAKO

  // check is step 1 fulfiled - true (have selected date and time, and sum of visitors > 0 but children only could not get ticket
  const isStepOneFulfiled = () => {
    // Get childrens and adults
    let childrens = parseInt(visitors[1].value);
    let adults = parseInt(sumOfVisitors - childrens);

    // 2 child per 1 adult or only one child
    let fulfiled =
      !date ||
      !time ||
      sumOfVisitors === childrens ||
      childrens - adults > childrens / 2
        ? false
        : true;

    return fulfiled;
  };

  // check is step 2 fulfiled - true (have all info with no errors()
  const isStepTwoFulfiled = () => {
    let fulfiled =
      name !== "" &&
      lastName !== "" &&
      phone !== "" &&
      email1 !== "" &&
      email2 !== "" &&
      country !== "" &&
      !isErrInForm &&
      general &&
      privacy
        ? true
        : false;
    return fulfiled;
  };

  // check is step 3 fulfiled - true (have all info with no errors()
  const isStepThreeFulfiled = () => {
    let fulfiled =
      num1 !== "" &&
      num2 !== "" &&
      num3 !== "" &&
      num4 !== "" &&
      cvc !== "" &&
      expireMonth !== "" &&
      expireYear !== "" &&
      !isErrInCardInfo
        ? true
        : false;
    return fulfiled;
  };

  // moveToNextStep
  const moveToNextStep = () => {
    canMoveOn && activeStep <= 3 && changeActiveStep(activeStep + 1);
  };

  return (
    <div className="w-full mt-6 flex flex-col items-center justify-end sm:flex-row">
      <div className="mb-3 flex flex-col items-center justify-center sm:mb-0">
        <h1 className="w-full text-md uppercase text-center">Total amount</h1>
        <h1 className="w-full text-3xl font-bold text-center">
          {calculatePrice()}
          <span className="ml-2">€</span>
        </h1>
      </div>
      <button
        onClick={moveToNextStep}
        className={`h-[60px] px-[20px] ml-5 text-[20px] text-white ${
          canMoveOn
            ? "bg-red-500 cursor-pointer"
            : "bg-neutral-400 cursor-not-allowed"
        } rounded flex items-center justify-center transition-color duration-[400ms] active:scale-[0.95]`}
      >
        {activeStep === 3 && <FaLock className="mr-2" />}
        {activeStep === 1
          ? "CONTINUE"
          : activeStep === 2
          ? "PAY"
          : "PLACE ORDER"}
        <FaAngleRight className="ml-2 text-[20px]" />
      </button>
    </div>
  );
};

export default CalculatePrice;
