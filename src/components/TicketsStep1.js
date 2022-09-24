// react
import { useState } from "react";
// components
import CalendarsContainer from "../calendarComponents/CalendarsContainer";
import AddRemoveVisitor from "./AddRemoveVisitor";
// Icons
import {
  FaExclamationCircle,
  FaUsers,
  FaRegCalendarAlt,
  FaRegClock,
  FaPen,
} from "react-icons/fa";

const TicketsStep1 = () => {
  // State for input data
  const [inputData, setInputData] = useState({
    date: null,
    time: null,
    visitors: [
      { id: "general", value: 0 },
      { id: "under11", value: 0 },
      { id: "disabled", value: 0 },
      { id: "under30", value: 0 },
      { id: "student", value: 0 },
      { id: "senior", value: 0 },
    ],
  });

  // State for displaying midsteps
  const [midsteps, setMidsteps] = useState({
    caledar: {
      active: true,
      body: true,
      data: false,
    },
    hours: {
      active: false,
      body: false,
      data: false,
    },
    visitors: {
      active: false,
      body: false,
      data: false,
    },
  });

  // selectDate
  const selectDate = (date) => {
    setMidsteps({
      ...midsteps,
      caledar: { active: false, body: false, data: true },
      hours: { active: true, body: true, data: false },
    });
    setInputData({ ...inputData, date: date });
  };

  //selectTime
  const selectTime = (e) => {
    setInputData({ ...inputData, time: e.target.id });
    setMidsteps({
      ...midsteps,
      hours: { active: false, body: false, data: true },
      visitors: { active: true, body: true, data: false },
    });
  };

  //removeVisitor
  const removeVisitor = (id) => {
    setInputData({
      ...inputData,
      visitors: inputData.visitors.map((visitor) => {
        if (visitor.id === id) {
          visitor.value -= 1;
        }
        return visitor;
      }),
    });
  };

  //addVisitor
  const addVisitor = (id) => {
    setInputData({
      ...inputData,
      visitors: inputData.visitors.map((visitor) => {
        if (visitor.id === id) {
          visitor.value += 1;
        }
        return visitor;
      }),
    });
  };

  return (
    <div className="w-full">
      {/* Pick a date ----------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full flex items-center justify-start flex-col">
        {/* Headline */}
        <div className="w-[80%] mb-3 flex items-center justify-between">
          <FaRegCalendarAlt className="w-[10%] h-[30px]" />
          {/* Text content */}
          <div
            className={`${
              midsteps.caledar.data ? "w-[80%]" : "w-[90%]"
            } flex items-center justify-left`}
          >
            {/* Ukrasni div */}
            <div
              className={`h-[30px] border-[15px] border-t-transparent border-b-transparent ${
                midsteps.caledar.active
                  ? "border-r-black border-l-0"
                  : "border-l-black border-r-0"
              }  `}
            ></div>
            <div
              className={`w-[95%] h-[40px] px-5 py-[5px] bg-black text-white text-xl rounded-br-xl relative ${
                !midsteps.caledar.active &&
                'before:content-[""] before:absolute before:top-[5px] before:left-0 before:h-[30px] before:bg-transparent before:border-[15px] before:border-t-black before:border-b-black before:border-l-white before:border-r-0'
              }`}
            >
              {midsteps.caledar.data ? (
                <div className="w-full flex items-center justify-between">
                  <h1>You selected date:</h1>
                  <h1>{new Date(inputData.date).toString().slice(0, 15)}</h1>
                </div>
              ) : (
                <h1>When do you want to come?</h1>
              )}
            </div>
          </div>
          {midsteps.caledar.data && <FaPen className="w-[10%] h-[30px]" />}
        </div>

        {/* Body */}
        {midsteps.caledar.body && (
          <div className="w-[60%]">
            <CalendarsContainer selectDate={selectDate} />
          </div>
        )}
      </div>

      {/* Pick a time ----------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full flex items-center justify-start flex-col">
        {/* Headline */}
        <div className="w-[80%] mb-3 flex items-center justify-between">
          <FaRegClock className="w-[10%] h-[30px]" />
          {/* Text content */}
          <div
            className={`${
              midsteps.hours.data ? "w-[80%]" : "w-[90%]"
            } flex items-center justify-left`}
          >
            {/* Ukrasni div */}
            <div
              className={`h-[30px] border-[15px] border-t-transparent border-b-transparent ${
                midsteps.hours.active || !midsteps.hours.data
                  ? "border-r-black border-l-0"
                  : "border-l-black border-r-0"
              }  `}
            ></div>
            <div
              className={`w-[95%] h-[40px] px-5 py-[5px] bg-black text-white text-xl rounded-br-xl relative ${
                !midsteps.hours.active &&
                midsteps.hours.data &&
                'before:content-[""] before:absolute before:top-[5px] before:left-0 before:h-[30px] before:bg-transparent before:border-[15px] before:border-t-black before:border-b-black before:border-l-white before:border-r-0'
              }`}
            >
              {midsteps.hours.data ? (
                <div className="w-full flex items-center justify-between">
                  <h1>You selected hour:</h1>
                  <h1>{inputData.time}</h1>
                </div>
              ) : (
                <h1>At what time?</h1>
              )}
            </div>
          </div>
          {midsteps.hours.data && <FaPen className="w-[10%] h-[30px]" />}
        </div>

        {/* Body */}
        {midsteps.hours.body && (
          <div className="w-[60%]">
            <div className="w-full flex items-center justify-center flex-wrap">
              {[
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
              ].map((hour, index) => (
                <div
                  className="m-2 p-2 border-2 border-black hover:border-red-500 hover:cursor-pointer"
                  onClick={selectTime}
                  key={index}
                  id={hour}
                >
                  {hour}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pick a visitors ----------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full flex items-center justify-start flex-col">
        {/* Headline */}
        <div className="w-[80%] mb-3 flex items-center justify-between">
          <FaUsers className="w-[10%] h-[30px]" />
          {/* Text content */}
          <div
            className={`${
              midsteps.visitors.data ? "w-[80%]" : "w-[90%]"
            } flex items-center justify-left`}
          >
            {/* Ukrasni div */}
            <div
              className={`h-[30px] border-[15px] border-t-transparent border-b-transparent ${
                midsteps.visitors.active || !midsteps.visitors.body
                  ? "border-r-black border-l-0"
                  : "border-l-black border-r-0"
              }  `}
            ></div>
            <div
              className={`w-[95%] h-[40px] px-5 py-[5px] bg-black text-white text-xl rounded-br-xl relative ${
                !midsteps.visitors.active &&
                midsteps.visitors.data &&
                'before:content-[""] before:absolute before:top-[5px] before:left-0 before:h-[30px] before:bg-transparent before:border-[15px] before:border-t-black before:border-b-black before:border-l-white before:border-r-0'
              }`}
            >
              {midsteps.visitors.data ? (
                <div>
                  <h1>You selected total visitors:</h1>
                  <h1>{"Here goes selected date"}</h1>
                </div>
              ) : (
                <h1>How many of you will there be?</h1>
              )}
            </div>
          </div>
          {midsteps.visitors.data && <FaPen className="w-[10%] h-[30px]" />}
        </div>

        {/* Body */}
        {midsteps.visitors.body && (
          <div className="w-[60%] flex">
            <div className="w-full">
              <h1>
                Select the number of people by type of entry. The maximum number
                of entries must be between 1 and 9.
              </h1>
              <div className="flex items-center justify-between flex-wrap">
                {[
                  "general",
                  "under11",
                  "disabled",
                  "under30",
                  "student",
                  "senior",
                ].map((visitor, index) => (
                  <AddRemoveVisitor
                    id={visitor}
                    key={index}
                    addVisitor={addVisitor}
                    removeVisitor={removeVisitor}
                    value={inputData.visitors[index].value}
                    visitors={inputData.visitors}
                  />
                ))}
              </div>
              {/* Additional info */}
              <div className="w-full">
                <div className="mb-3 flex items-center justify-left">
                  <FaExclamationCircle className="w-[20px] h-[20px] mr-3 text-red-800" />
                  <h1 className="text-lg">Attention</h1>
                </div>
                <ul className="w-[80%] px-5 list-disc ">
                  <li>
                    Some areas of the Basilica are currently undergoing
                    rehabilitation works. Please pardon any inconvenience.
                  </li>
                  <li>
                    One adult ticket must be purchased for every two children
                    (under 11)
                  </li>
                  <li>
                    Persons entitled to tickets with discount (pensioners, under
                    30, students, disabled persons, companions, etc.) must
                    certify their condition to access on the Basilica grounds.
                  </li>
                  <li>
                    A maximum of two disabled tickets may be purchased at a
                    time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketsStep1;
