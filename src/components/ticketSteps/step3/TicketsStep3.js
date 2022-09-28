// react
import { useState, useContext } from "react";
// Context
import TicketContext from "../../../context/TicketContext";
// Icons
import { FaQuestion } from "react-icons/fa";

const TicketsStep3 = () => {
  // Context
  const {
    userTicketData: {
      creditCardInfo: { num1, num2, num3, num4, month, year, cvc },
    },
    getCardNumber,
  } = useContext(TicketContext);

  // showImage state
  const [showImage, setShowImage] = useState(false);

  //mouseEnter
  const mouseEnter = () => setShowImage(true);

  //mouseLeave
  const mouseLeave = () => setShowImage(false);

  //getCurrentYear
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="w-full mb-5 text-center text-lg ">Almost done!</h1>
      <div className=" w-[500px] overflow-hidden">
        {/* Card number */}
        <div className="w-full mb-5 ">
          <h2 className="w-full py-2 px-4 text-xl bg-neutral-800 text-white rounded-tl-lg rounded-tr-lg">
            Card number:
          </h2>
          <div className="py-3 px-4 flex items-center justify-between border-2 border-black rounded-bl-lg rounded-br-lg">
            {[
              { id: "num1", value: "" },
              { id: "/" },
              { id: "num2", value: "" },
              { id: "/" },
              { id: "num3", value: "" },
              { id: "/" },
              { id: "num4", value: "" },
            ].map((item, index) =>
              item.id !== "/" ? (
                <input
                  key={index}
                  value={
                    item.id === "num1"
                      ? num1
                      : item.id === "num2"
                      ? num2
                      : item.id === "num3"
                      ? num3
                      : num4
                  }
                  onChange={getCardNumber}
                  type="text"
                  id={item.id}
                  placeholder="0000"
                  className="w-[100px] px-2 py-1 text-center text-xl bg-transparent border-b-2 border-b-neutral-500 placeholder:text-neutral-600 focus:outline-0"
                />
              ) : (
                <p className="mx-2 text-2xl">/</p>
              )
            )}
          </div>
        </div>
        {/* Expire date */}
        <div className="w-full mb-5">
          <h2 className="w-full py-2 px-4 text-xl bg-neutral-800 text-white rounded-tl-lg rounded-tr-lg">
            Expire date
          </h2>
          <div className="py-2 px-4 border-2 border-black rounded-bl-lg rounded-br-lg">
            {/* Month */}
            <select
              name="month"
              id="month"
              className="py-2 px-4 border-black border-b-2 cursor-pointer text-xl focus:outline-0"
              onChange={getCardNumber}
            >
              <option value="default">MM</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {/* Year */}
            <select
              name="year"
              id="year"
              onChange={getCardNumber}
              className="ml-5 py-2 px-4 border-black border-b-2 cursor-pointer text-xl focus:outline-0"
            >
              <option value="default">YY</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 9].map((item, index) => (
                <option key={index} value={getCurrentYear() + item}>
                  {getCurrentYear() + item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full">
          <h2 className="w-full py-2 px-4 text-xl bg-neutral-800 text-white rounded-tl-lg rounded-tr-lg">
            CVC
          </h2>
          <div className="py-2 px-4 relative border-2 border-black rounded-bl-lg rounded-br-lg">
            <div className="w-[100px] h-[40px] border-black border-b-2  flex items-center justify-between relative">
              <input
                type="text"
                placeholder="CVC"
                className="w-full h-full text-xl border-0 focus:outline-0 text-center placeholder:text-black"
                id="cvc"
                onChange={getCardNumber}
              />
              <FaQuestion
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className="absolute right-0 t-2/4 hover:text-red-500 cursor-pointer"
              />
            </div>
            {showImage && (
              <img
                src="https://ccbill.com/kb/wp-content/uploads/2022/04/cvv-cvc-location-payment-card.jpg"
                alt=""
                className="w-[200px] h-[100px] rounded-lg absolute -top-[100px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsStep3;
