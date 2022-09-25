// react
import { useEffect, useState, useContext } from "react";
// Context
import TicketContext from "../../../context/TicketContext";
// components
import CalendarsContainer from "../../../calendarComponents/CalendarsContainer";
import SelectHours from "../step1/SelectHours";
import SelectVisitors from "./SelectVisitors";
// Icons
import {
  FaExclamationCircle,
  FaUsers,
  FaRegCalendarAlt,
  FaRegClock,
  FaPen,
} from "react-icons/fa";

// headlineInfo
const headlineInfoArr = [
  {
    id: "calendar",
    text1: "When do you want to come?",
    text2: "You selected date:",
  },
  {
    id: "time",
    text1: "At what time?",
    text2: "You selected time:",
  },
  {
    id: "visitors",
    text1: "How many of you will there be?",
    text2: "You selected this many visitors:",
  },
];

const Step1Item = ({ id, data }) => {
  // Context
  const { step1ActiveMidStep, selectDate, selectTime } =
    useContext(TicketContext);
  // State for active
  const [active, setActive] = useState(false);
  // State for component basic info
  const [headlineInfo, setHeadlineInfo] = useState({
    text1: "",
    text2: "",
  });

  useEffect(() => {
    isActive();
    getHeadlineInfo();
  }, [step1ActiveMidStep]);

  //get headline info
  const getHeadlineInfo = () => {
    headlineInfoArr.forEach((item) => {
      item.id === id &&
        setHeadlineInfo({
          text1: item.text1,
          text2: item.text2,
        });
    });
  };

  // isActive
  const isActive = () => {
    id === step1ActiveMidStep ? setActive(true) : setActive(false);
  };

  // Left icon class
  let headlineIconClass = "w-[10%] h-[30px]";

  //showNextStep
  const showNextStep = () => {
    console.log(`Show: ${id}`);
  };

  return (
    <div className="w-full flex items-center justify-start flex-col">
      {/* Headline */}
      <div className="w-[80%] mb-3 flex items-center justify-between">
        {/* Left icon */}
        {id === "calendar" ? (
          <FaRegCalendarAlt className={headlineIconClass} />
        ) : id === "time" ? (
          <FaRegClock className={headlineIconClass} />
        ) : (
          <FaUsers className={headlineIconClass} />
        )}

        {/* Text content */}
        <div
          className={`${
            data ? "w-[80%]" : "w-[90%]"
          } flex items-center justify-left`}
        >
          {/* Ukrasni div */}
          <div
            className={`h-[30px] border-[15px] border-t-transparent border-b-transparent ${
              active || !data
                ? "border-r-black border-l-0"
                : "border-l-black border-r-0"
            }  `}
          ></div>
          {/* Headline content */}
          <div
            className={`w-[95%] h-[40px] px-5 py-[5px] bg-black text-white text-xl rounded-br-xl relative ${
              !active &&
              data &&
              'before:content-[""] before:absolute before:top-[5px] before:left-0 before:h-[30px] before:bg-transparent before:border-[15px] before:border-t-black before:border-b-black before:border-l-white before:border-r-0'
            }`}
          >
            {data ? (
              <div className="w-full flex items-center justify-between">
                <h1>{headlineInfo.text2}</h1>
                <h1>
                  {/* {new Date(inputData.date).toString().slice(0, 15)} */}{" "}
                  {id === "calendar"
                    ? new Date(data).toString().slice(0, 15)
                    : data}
                </h1>
              </div>
            ) : (
              <h1>{headlineInfo.text1}</h1>
            )}
          </div>
        </div>
        {/* Pen icon */}
        {data && (
          <FaPen
            onClick={showNextStep}
            className="w-[10%] h-[30px] hover:text-red-800 hover:scale-[0.90] hover:cursor-pointer transition-color duration-[400ms]  "
          />
        )}
      </div>

      <div className={`w-[60%] flex items-center justify-center`}>
        {id === "calendar" && step1ActiveMidStep === "calendar" && (
          <CalendarsContainer selectDate={selectDate} />
        )}
        {id === "time" && step1ActiveMidStep === "time" && (
          <SelectHours selectHours={selectTime} />
        )}
        {id === "visitors" && step1ActiveMidStep === "visitors" && (
          <SelectVisitors />
        )}
      </div>
    </div>
  );
};

export default Step1Item;
