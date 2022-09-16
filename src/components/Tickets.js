// React
import { useState } from "react";
// Calendar context
import { CalendarProvider } from "../context/CalendarContext";
// Icons
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// Components
import CalendarsContainer from "../calendarComponents/CalendarsContainer";

const Tickets = () => {
  // State for adults and childrens
  const [visitors, setVisitors] = useState({
    adults: 0,
    childrens: 0,
  });

  // Add visitors directly in input
  const addVisitors = (e) => {
    setVisitors({
      adults:
        e.target.id === "adults"
          ? isNaN(parseInt(e.target.value))
            ? 0
            : parseInt(e.target.value)
          : visitors.adults,
      childrens:
        e.target.id === "childrens"
          ? isNaN(parseInt(e.target.value))
            ? 0
            : parseInt(e.target.value)
          : visitors.childrens,
    });
  };

  //addAdult
  const addAdult = () => {
    setVisitors({ ...visitors, adults: visitors.adults + 1 });
  };

  //removeAdult
  const removeAdult = () => {
    visitors.adults !== 0 &&
      setVisitors({ ...visitors, adults: visitors.adults - 1 });
  };

  // Add child
  const addChild = () => {
    setVisitors({ ...visitors, childrens: visitors.childrens + 1 });
  };

  // Remove child
  const removeChild = () => {
    visitors.childrens !== 0 &&
      setVisitors({ ...visitors, childrens: visitors.childrens - 1 });
  };

  return (
    <CalendarProvider>
      <div className="w-[500px]  mx-auto my-7 border-2 border-black">
        {/* Adults */}
        <div className="w-full p-4">
          <h1 className="w-full mb-3 text-center ">
            Adults (36 EUR per person){" "}
          </h1>
          <div className="flex items-center justify-center">
            <FaMinusCircle
              onClick={removeAdult}
              className="text-red-600 h-10 w-10 cursor-pointer active:scale-[0.96]"
            />
            <input
              className="w-14 h-10 mx-4 text-center border-2 border-red-200 focus:outline-0"
              type="number"
              id="adults"
              onChange={addVisitors}
              value={visitors.adults}
            />
            <FaPlusCircle
              onClick={addAdult}
              className="text-red-600 h-10 w-10 cursor-pointer active:scale-[0.96]"
            />
          </div>
        </div>

        {/* Childrens */}
        <div className="w-full">
          <h1 className="w-full mb-3 text-center ">Under 11 (free)</h1>
          <div className="flex items-center justify-center">
            <FaMinusCircle
              onClick={removeChild}
              className="text-red-600 h-10 w-10 cursor-pointer active:scale-[0.96]"
            />
            <input
              className="w-14 h-10 mx-4 text-center border-2 border-red-200 focus:outline-0"
              type="number"
              id="childrens"
              onChange={addVisitors}
              value={visitors.childrens}
            />
            <FaPlusCircle
              onClick={addChild}
              className="text-red-600 h-10 w-10 cursor-pointer active:scale-[0.96]"
            />
          </div>
        </div>

        {/* Calendar */}
        <CalendarsContainer />
      </div>
    </CalendarProvider>
  );
};

export default Tickets;
