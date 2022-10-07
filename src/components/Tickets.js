// Context
import { TicketProvider } from "../context/TicketContext";
// Components
import AllSteps from "./ticketSteps/allSteps/AllSteps";
import TicketsNavItem from "./ticketSteps/TicketsNavItem";

const Tickets = () => {
  return (
    <div className="w-full mx-auto  py-5 bg-transparent lg:px-[100px] sm:px-3">
      <TicketProvider>
        {/* Nav in tickets for displaying which step is active */}
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
            <TicketsNavItem key={index} step={obj.step} text={obj.text} />
          ))}
        </div>

        {/* All steps */}
        <AllSteps />
      </TicketProvider>
    </div>
  );
};

export default Tickets;
