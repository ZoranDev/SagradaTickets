// react
import { useState } from "react";

const InputItem = ({ id, title, type }) => {
  // State for labelUp
  const [labelUp, setLabelUp] = useState(false);

  //moveLabelUp
  const moveLabelUp = () => {
    setLabelUp(true);
  };

  return (
    <div className="w-[350px] bg-blue-200 m-4 relative">
      <label
        htmlFor={id}
        className={`p-1 bg-white absolute ${
          labelUp ? "top-2/4 -translate-y-[40px]" : "top-2/4 -translate-y-2/4 "
        } left-5 transition-transform duration-[300ms] cursor-text z-10`}
        onClick={moveLabelUp}
      >
        {title} <span className="ml-1 text-red-500">*</span>
      </label>
      <input
        type={type}
        id={id}
        required={true}
        className={`w-full h-full p-3 focus:outline-0 border-2 border-neutral-300  shadow-[3px_3px_2px_rgba(0,0,0,0.3)] z-0`}
        onClick={moveLabelUp}
      />
    </div>
  );
};

export default InputItem;
