// react
import { useState } from "react";
// Icons
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Question = ({ question, answer }) => {
  // State for open
  const [open, setOpen] = useState(false);

  //openAnswer
  const openAnswer = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`mb-7  shadow-[0px_5px_10px_rgba(0,0,0,0.3)] rounded overflow-hidden`}
    >
      {/* Title */}
      <div
        onClick={openAnswer}
        className="w-full  p-4 flex items-center justify-between cursor-pointer lg:h-16"
      >
        <h1 className="w-full text-xl">{question}</h1>
        {!open ? (
          <FaAngleDown className="text-xl" />
        ) : (
          <FaAngleUp className="text-xl" />
        )}
      </div>
      {/* Content */}
      <div
        className={
          open
            ? "max-h-[1200px] duration-300 ease-in lg:max-h-[200px]}"
            : "max-h-[0px]  duration-300 ease-out"
        }
      >
        <p className="pl-4 pr-4 pb-4">{answer}</p>
      </div>
    </div>
  );
};

export default Question;
