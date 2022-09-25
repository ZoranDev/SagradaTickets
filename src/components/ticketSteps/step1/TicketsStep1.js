// components
import Step1Item from "../../ticketSteps/step1/Step1Item";

const TicketsStep1 = () => {
  return (
    <div className="w-full">
      {["calendar", "time", "visitors"].map((item, index) => (
        <Step1Item key={index} id={item} />
      ))}

      <hr className="mb-5 border-[20px] border-red-200" />
    </div>
  );
};

export default TicketsStep1;
