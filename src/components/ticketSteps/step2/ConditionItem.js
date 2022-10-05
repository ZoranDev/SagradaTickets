// react
import { useState, useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";
//icons
import { FaExclamation } from "react-icons/fa";

const info = [
  {
    id: "general",
    text: "I accept the general conditions of online purchase and the terms ans conditions of the service*",
  },
  { id: "privacy", text: "I accept the Privacy Policy.*" },
  {
    id: "information",
    text: "I agree to receive information about the Basilica, visits and activities, as well as commercial information regarding other products and related services.",
  },
];

const ConditionItem = ({ id }) => {
  // Context
  const { fillTermAndCondition } = useContext(TicketContext);

  // State show message
  const [showReqiuredMessage, setShowRequiredMessage] = useState(false);

  // mouseEnter function
  const mouseEnter = () => setShowRequiredMessage(true);

  // mouse leave function
  const mouseLeave = () => setShowRequiredMessage(false);

  return (
    <div className="w-full mb-4 relative ">
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        onChange={fillTermAndCondition}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={` mr-3 cursor-pointer bg-neutral-200 hover:bg-red-400 focus:ring-red-500 text-red-500 `}
      />

      {info.map((item, index) => (
        <label key={index} htmlFor={item.id}>
          {item.id === id && item.text}
        </label>
      ))}

      {/* Required message div */}
      {(id === "general" || id === "privacy") && (
        <div
          className={`bg-red-500 px-3 py-1 top-0 left-0 translate-x-[40px] absolute ${
            !showReqiuredMessage
              ? "opacity-0"
              : " opacity-1 transition-opacity duration-[600ms]"
          }     text-white rounded flex items-center justify-center `}
        >
          Required <FaExclamation className="ml-2" />
        </div>
      )}
    </div>
  );
};

export default ConditionItem;
