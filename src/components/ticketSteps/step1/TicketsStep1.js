// components
import Step1Item from "../../ticketSteps/step1/Step1Item";

const TicketsStep1 = () => {
  return (
    <div className="w-full">
      {/* Display midsteps */}
      {["calendar", "time", "visitors"].map((item, index) => (
        <Step1Item key={index} id={item} />
      ))}
    </div>
  );
};

export default TicketsStep1;
