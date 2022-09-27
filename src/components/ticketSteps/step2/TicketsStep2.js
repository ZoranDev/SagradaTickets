// components
import Step2Item from "./Step2Item";

const TicketsStep2 = () => {
  return (
    <form>
      <Step2Item id="personalInfo" />
      <Step2Item id="paymentMethods" />
      {/* Accept conditions */}
      <div>
        {["general", "privacy", "information"].map((item, index) => (
          <div key={index} className="flex items-center justify-left mb-2 ">
            <input
              type="checkbox"
              id={item}
              name={item}
              value={item}
              className={`w-[30px] h-[30px] mr-3 cursor-pointer appearance-none indeterminate:bg-gray-300`}
            />
            <label htmlFor="generalConditions">
              {item === "general" &&
                "I accept the general conditions of online purchase and the terms ans conditions of the service*"}
              {item === "privacy" && "I accept the Privacy Policy.*"}
              {item === "information" &&
                "I agree to receive information about the Basilica, visits and activities, as well as commercial information regarding other products and related services."}
            </label>
          </div>
        ))}
        <p>(*) Required</p>
      </div>
    </form>
  );
};

export default TicketsStep2;
