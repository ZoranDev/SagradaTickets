// React
import { useState, useContext, useEffect } from "react";
// Calendar context
import CalendarContext from "../../src/context/CalendarContext";
// Icons
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// Components
import CalendarsContainer from "../calendarComponents/CalendarsContainer";
import Error from "./Error";
import TicketFinalSteps from "./TicketFinalSteps";

const Tickets = () => {
  // Context stuff
  const { selectedDate } = useContext(CalendarContext);

  // State for displaying step 1 (book tickets), setp 2 (fill form), step 3 (pay)
  const [stepToDisplay, setStepToDisplay] = useState({
    step1: true,
    step2: false,
    step3: false,
  });

  // State for adults and childrens
  const [visitors, setVisitors] = useState({
    adults: 0,
    childrens: 0,
    date: null,
    time: null,
  });

  // State for error
  const [isError, setIsError] = useState({ active: false, message: "" });

  useEffect(() => {
    setVisitors({ ...visitors, date: selectedDate });
  }, [selectedDate]);

  // removeError
  const removeError = () => {
    setTimeout(() => {
      setIsError({ active: false, message: "" });
    }, 3000);
  };

  // Add visitors directly in input
  const addVisitors = (e) => {
    setVisitors({
      ...visitors,
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

  //setTime
  const setTime = (e) => {
    setVisitors({ ...visitors, time: e.target.id });
  };

  //handleBookNow
  const handleBookNow = () => {
    if (visitors.adults > 10) {
      setIsError({ active: true, message: "Max 10 adults!" });
      removeError();
      return;
    } else {
      setStepToDisplay({ step1: false, step2: true, step3: false });
    }
  };

  //showThirdStep
  const showThirdStep = () => {
    setStepToDisplay({
      step1: false,
      step2: false,
      step3: true,
    });
  };

  return stepToDisplay.step1 ? (
    <div className="w-full py-10 px-2 flex flex-col items-center justify-evenly lg:flex-row lg:items-start">
      <div className="w-full max-w-[490px] mb-5 p-4 shadow-[0_0_10px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Adding adults and childrens */}
        {[
          {
            title: "Adults (36 € per person)",
            id: "adults",
          },
          {
            title: "Under 11 (free)",
            id: "childrens",
          },
        ].map((item, index) => (
          <div className="w-full p-4" key={index}>
            <h1 className="w-full mb-3 text-center ">{item.title}</h1>
            <div className="flex items-center justify-center">
              <FaMinusCircle
                onClick={item.id === "adults" ? removeAdult : removeChild}
                className="text-red-400 hover:text-red-600 h-10 w-10 cursor-pointer active:scale-[0.85] transition-color duration-[400ms]"
              />
              <input
                className="w-14 h-10 mx-4 text-center border-2 border-red-200 focus:outline-0"
                type="number"
                id={item.id}
                onChange={addVisitors}
                value={
                  item.id === "adults" ? visitors.adults : visitors.childrens
                }
              />
              <FaPlusCircle
                onClick={item.id === "adults" ? addAdult : addChild}
                className="text-red-400 hover:text-red-600 h-10 w-10 cursor-pointer active:scale-[0.85] transition-color duration-[400ms]"
              />
            </div>
          </div>
        ))}

        {/* Calendar */}

        <CalendarsContainer />

        {/* Hours */}
        <div className="w-full mb-2 px-4 flex items-center justify-between">
          {[
            { time: "09:00 - 11:45", desc: "morning" },
            { time: "12:00 - 14:45", desc: "noon" },
            { time: "15:00 - 19:00", desc: "afternoon" },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-[33.33%] ${
                visitors.time === item.desc
                  ? "bg-red-500 text-white"
                  : "bg-transparent text-red-800"
              } p-4 text-center font-lg hover:bg-red-500 hover:text-white cursor-pointer`}
              id={item.desc}
              onClick={setTime}
            >
              {item.time}
            </div>
          ))}
        </div>

        {/* Book now btn */}
        <button
          className={`w-full my-4 p-3 text-3xl text-white capitalize rounded  ${
            visitors.adults > 0 && visitors.time && visitors.date
              ? "bg-green-400 cursor-pointer active:scale-[0.98] hover:bg-green-500 transition-color duration-[400ms]"
              : "bg-red-200"
          } `}
          onClick={handleBookNow}
          disabled={
            visitors.adults > 0 && visitors.time && visitors.date ? false : true
          }
        >
          Book now
        </button>

        <p className="w-full mb-4 text-sm text-red-500">
          * Max 10 adults per one book.
        </p>

        {/* Error component */}
        {isError.active && <Error message={isError.message} />}
      </div>

      {/* Additional info */}
      <div className="max-w-[490px] ">
        <div className="w-full  overflow-hidden">
          <img
            src="https://sagradafamilia-tickets.com/wp-content/uploads/2020/03/9.jpg"
            alt="Sagrada"
            className="w-full h-full hover:scale-[1.1] transition-transform duration-1000"
          />
        </div>

        <div>
          <p className="w-full text-justify my-3">
            To experience the beauty of this architectural gem and the effort
            that Anton Gaudí put into her construction, enjoy a tour of Sagrada
            Família with an audio guide.
          </p>
          <p className="w-full text-justify my-3">
            From the moment that you turn your audio guide on, you will be
            introduced to a wealth of historical knowledge and information
            regarding the current construction projects that are taking place.
          </p>
          <h1 className="w-full text-2xl text-justify my-3">Audio Guide:</h1>
          <p className="w-full text-justify my-3">
            Our full-length audio guide is 45 minutes in length. If you would
            like a quicker experience, then a 25-minute audio guide is also
            available.
          </p>
          <p className="w-full text-justify my-3">
            Our audio guides are available in Catalan, Spanish, English, French,
            German, Italian, Chinese, Japanese, Portuguese, Russian, Hungarian,
            Korean, Swedish, Finnish, Dutch and Polish.
          </p>
          <p className="w-full text-justify my-3">
            After your audio guide concludes, you are welcome to continue
            exploring on your own.
          </p>
        </div>
      </div>
    </div>
  ) : stepToDisplay.step2 ? (
    <TicketFinalSteps
      numOfAdults={visitors.adults}
      bookingDate={selectedDate}
      showThirdStep={showThirdStep}
      bookingTime={
        visitors.time === "morning"
          ? "09:00 - 11:45"
          : visitors.time === "noon"
          ? "12:00 - 14:45"
          : "15:00 - 19:00"
      }
    />
  ) : (
    <div>Payment div</div>
  );
};

export default Tickets;
