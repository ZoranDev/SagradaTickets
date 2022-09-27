// components
import Step2Item from "./Step2Item";
import ConditionItem from "./ConditionItem";

const TicketsStep2 = () => {
  return (
    <form>
      <Step2Item id="personalInfo" />
      <Step2Item id="paymentMethods" />
      {/* Accept conditions */}
      <div>
        {["general", "privacy", "information"].map((item, index) => (
          <ConditionItem key={index} id={item} />
        ))}
        <p>(*) Required</p>
      </div>
    </form>
  );
};

export default TicketsStep2;
