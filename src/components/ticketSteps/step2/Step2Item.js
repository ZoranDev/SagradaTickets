// components
import PersonalInfo from "../step2/PersonalInfo";

// Icons
import { FaBars } from "react-icons/fa";

const Step2Item = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col">
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
            <h1>Personal data</h1>
          </div>
        </div>
      </div>

      <div className={`w-[80%] flex items-center justify-center`}>
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Step2Item;
