//react
import { useContext, useState, useEffect } from "react";
// context
import TicketContext from "../../context/TicketContext";
import SagradaContext from "../../context/SagradaContext";
// icons
import { FaAngleRight, FaLock } from "react-icons/fa";

const CalculatePrice = () => {
  // context
  const {
    userTicketData,
    calculatePrice,
    isStepOneFulfiled,
    isStepTwoFulfiled,
    isStepThreeFulfiled,
    activeStep,
    changeActiveStep,
  } = useContext(TicketContext);

  const { updateAvailableTimes } = useContext(SagradaContext);

  // State for move on to the next step
  const [canMoveOn, setCanMoveOn] = useState(false);

  useEffect(() => {
    (isStepOneFulfiled() && activeStep === 1) ||
    (isStepTwoFulfiled() && activeStep === 2) ||
    (isStepThreeFulfiled() && activeStep === 3)
      ? setCanMoveOn(true)
      : setCanMoveOn(false);
  }, [userTicketData]);

  // moveToNextStep
  const moveToNextStep = () => {
    if (canMoveOn && activeStep <= 3) {
      changeActiveStep(activeStep + 1);
      activeStep === 3 && updateAvailableTimes(userTicketData);
    }
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
