// react
import { useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";
//icons
import { FaCheck } from "react-icons/fa";

const TicketsStep4 = () => {
  // context
  const {
    userTicketData: { date, time, visitors },
    calculatePrice,
  } = useContext(TicketContext);

  return (
    <div className="w-full mt-10 ">
      {/* Title */}
      <div className="w-full">
        <h1 className="text-3xl text-center font-bold ">
          Your order has beeen received
        </h1>
        <div className="w-[60px] h-[60px] mx-auto my-3 bg-green-500 rounded-full flex items-center justify-center">
          <FaCheck className="text-2xl text-white" />
        </div>
        <p className="w-full text-center text-md">
          Thank you for your purchase!
        </p>
        <p className="my-3 text-md text-center">ORDER ID: here go order id</p>
      </div>

      <div>
        {/* Order title */}
        <div className="w-full mb-3 flex items-center justify-center border-b-[1px] border-rose-500">
          <h1 className="w-2/4 text-center text-xl font-bold">Order Info</h1>
        </div>
        {/* Order body */}
        <div className="w-full flex flex-col items-start justify-center border-b-[1px] border-rose-500 sm:flex-row sm:justify-between">
          {/* left */}
          <div className="w-full mb-3 flex flex-col items-center sm:w-2/4">
            <img
              className="w-[240px] mb-2"
              src="https://sagradafamilia-tickets.com/wp-content/uploads/2020/03/9-300x300.jpg"
              alt="Sagrada"
            />
            <p className="text-lg italic">Sagrada familia tickets</p>
          </div>
          {/* right */}
          <div className="w-full mb-3 sm:w-2/4 ">
            <div className="w-full flex items-center justify-left">
              <h2 className="w-2/4 text-lg text-rose-500 font-bold">
                Visitors:
              </h2>
              <div>
                {visitors.map(
                  (item, index) =>
                    item.value !== 0 && (
                      <div
                        key={index}
                        className="w-[130px] flex items-center justify-between"
                      >
                        <p>
                          {item.id === "general"
                            ? "General:"
                            : item.id === "under11"
                            ? "Children:"
                            : item.id === "disabled"
                            ? "Disabled:"
                            : item.id === "under30"
                            ? "Under age of 30:"
                            : item.id === "student"
                            ? "Students:"
                            : "Seniors:"}
                        </p>
                        <p>{item.value}</p>
                      </div>
                    )
                )}
              </div>
            </div>

            <div className="mt-3 flex items-left justify-left ">
              <h2 className="w-2/4 text-lg text-rose-500 font-bold">
                Booking date:
              </h2>
              <p>{new Date(date).toString().slice(0, 15)}</p>
            </div>

            <div className="flex items-center justify-left mt-3">
              <h2 className="w-2/4 text-lg text-rose-500 font-bold">
                Booking time:
              </h2>
              <p>{time} h</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="w-full flex items-center justify-center">
          <h1 className="mr-3 my-3 text-2xl font-bold">TOTAL :</h1>
          <h1 className="text-2xl font-bold text-rose-500">
            {calculatePrice()} €
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TicketsStep4;
