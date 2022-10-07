// react
import { useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";
// Import components
import TicketsStep1 from "../step1/TicketsStep1";
import TicketsStep2 from "../step2/TicketsStep2";
import TicketsStep3 from "../step3/TicketsStep3";
import TicketsStep4 from "../step4/TicketsStep4";
import CalculatePrice from "../CalculatePrice";

const AllSteps = () => {
  // context
  const { activeStep } = useContext(TicketContext);

  return (
    <div>
      {activeStep === 1 && <TicketsStep1 />}
      {activeStep === 2 && <TicketsStep2 />}
      {activeStep === 3 && <TicketsStep3 />}
      {activeStep === 4 && <TicketsStep4 />}
      {activeStep !== 4 && <CalculatePrice />}
    </div>
  );
};

export default AllSteps;
