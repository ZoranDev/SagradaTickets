// react
import { useEffect, useState, useContext } from "react";
// Context
import TicketContext from "../../../context/TicketContext";
// components
import CalendarsContainer from "../../../calendarComponents/CalendarsContainer";
import SelectHours from "../step1/SelectHours";
import SelectVisitors from "./SelectVisitors";
// Icons
import { FaUsers, FaRegCalendarAlt, FaRegClock, FaPen } from "react-icons/fa";

// headlineInfo
const headlineInfoArr = [
  {
    id: "calendar",
    text1: "When do you want to come?",
    text2: "Selected date:",
  },
  {
    id: "time",
    text1: "At what time?",
    text2: "Selected time:",
  },
  {
    id: "visitors",
    text1: "How many of you will be there?",
    text2: "Selected visitors:",
  },
];

const Step1Item = ({ id }) => {
  // Context
  const {
    userTicketData: { date, time, visitors },
    step1ActiveMidStep,
    selectDate,
    selectTime,
    showNextStep,
    sumOfVisitors,
  } = useContext(TicketContext);
  // State for active
  const [active, setActive] = useState(false);
  // State for component basic info
  const [headlineInfo, setHeadlineInfo] = useState({
    text1: "",
    text2: "",
  });
  //State for haveData
  const [haveData, setHaveData] = useState(false);

  useEffect(() => {
    isActive();
    ifData();
    getHeadlineInfo();
  }, []);

  useEffect(() => {
    isActive();
    ifData();
    getHeadlineInfo();
  }, [step1ActiveMidStep, visitors]);

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

  // haveData?
  const ifData = () => {
    (id === "visitors" && sumOfVisitors !== 0) ||
    (id === "calendar" && date) ||
    (id === "time" && time)
      ? setHaveData(true)
      : setHaveData(false);
  };

  //editStepInfo - when user click on
  const editStepInfo = () => {
    showNextStep(id);
  };

  return (
    <div className="w-full flex items-center justify-start flex-col">
      {/* Headline */}
      <div className="w-full mb-3 flex items-center justify-between">
        {/* Left icon */}
        {id === "calendar" ? (
          <FaRegCalendarAlt className="w-[10%] h-[30px]" />
        ) : id === "time" ? (
          <FaRegClock className="w-[10%] h-[30px]" />
        ) : (
          <FaUsers className="w-[10%] h-[30px]" />
        )}

        {/* Text content */}
        <div
          className={`${
            !haveData || (haveData && active) ? "w-[90%]" : "w-[80%]"
          } flex items-center justify-left`}
        >
          {/* Ukrasni div */}
          <div
            className={`h-[30px] border-[15px] border-t-transparent border-b-transparent ${
              !active && haveData
                ? "border-l-black border-r-0"
                : "border-r-black border-l-0"
            }`}
          ></div>
          {/* Headline content */}
          <div
            className={`w-[95%] h-[40px] px-5 py-[5px] bg-black text-white text-xl rounded-br-xl relative ${
              !active &&
              haveData &&
              'before:content-[""] before:absolute before:top-[5px] before:left-0 before:h-[30px] before:bg-transparent before:border-[15px] before:border-t-black before:border-b-black before:border-l-white before:border-r-0'
            }`}
          >
            {/* date,time or sumofvisitors */}
            {haveData ? (
              <div className="w-full flex items-center justify-between">
                <h1>{headlineInfo.text2}</h1>
                <h1>
                  {id === "calendar" && new Date(date).toString().slice(0, 15)}
                  {id === "time" && time}
                  {id === "visitors" && sumOfVisitors}
                </h1>
              </div>
            ) : (
              <h1>{headlineInfo.text1}</h1>
            )}
          </div>
        </div>
        {/* Pen icon */}
        {haveData && !active && (
          <FaPen
            onClick={editStepInfo}
            className="w-[10%] h-[30px] hover:text-red-800 hover:scale-[0.90] hover:cursor-pointer transition-color duration-[400ms]  "
          />
        )}
      </div>

      <div className={`w-[80%] flex items-center justify-center`}>
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
