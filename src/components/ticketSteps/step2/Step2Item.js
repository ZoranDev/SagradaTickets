// components
import PersonalInfo from "../step2/PersonalInfo";
import PaymentMethods from "./PaymentMethods";

// Icons
import { FaBars } from "react-icons/fa";

const Step2Item = ({ id }) => {
  return (
    <div className="w-full mb-4 flex items-center justify-start flex-col ">
      {/* Headline */}
      <div className="w-full mb-3 flex items-center justify-between">
        {/* Left icon */}
        <FaBars className="w-[10%] h-[30px]" />

        {/* Text content */}
        <div className={`w-[90%] flex items-center justify-left`}>
          {/* Ukrasni div */}
          <div
            className={`h-[30px] border-[15px] border-t-transparent border-b-transparent border-r-black border-l-0`}
          ></div>
          {/* Headline content */}
          <div
            className={`w-[95%] h-[40px] px-5 py-[5px] bg-black text-white text-xl rounded-br-xl relative `}
          >
            {id === "personalInfo" ? (
              <h1>Personal info</h1>
            ) : (
              <h1>Payment methods</h1>
            )}
          </div>
        </div>
      </div>

      <div className={`w-[80%] flex items-center justify-center`}>
        {id === "personalInfo" ? <PersonalInfo /> : <PaymentMethods />}
      </div>
    </div>
  );
};

export default Step2Item;
