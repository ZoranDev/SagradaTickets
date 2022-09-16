import {
  FaTicketAlt,
  FaShoppingCart,
  FaCheck,
  FaChevronRight,
} from "react-icons/fa";

const TicketFinalSteps = () => {
  return (
    <div className="w-[800px] h-[800px] mx-auto my-10 border-2 border-black flex flex-col items-start">
      {/* Order status */}
      <div className="w-full flex items-center justify-between">
        {[
          { id: 1, text: "Ticket selected" },
          {},
          { id: 2, text: "Order details" },
          {},
          { id: 3, text: "Order complete" },
        ].map((item, index) =>
          item.id === 1 || item.id === 2 || item.id === 3 ? (
            <div key={index}>
              <div
                className={`w-[100px] h-[100px] ${
                  item.id === 2
                    ? "bg-red-800 text-neutral-200"
                    : "bg-neutral-200 text-red-800"
                } rounded-full flex items-center justify-center relative`}
              >
                {item === 1 ? (
                  <FaTicketAlt className="w-[30px] h-[30px]" />
                ) : item === 2 ? (
                  <FaShoppingCart className="w-[30px] h-[30px]" />
                ) : (
                  <FaCheck className="w-[30px] h-[30px]" />
                )}
                <div
                  className={`px-4 py-[2px] bg-red-800 rounded-2xl text-white absolute top-0 -right-5 ${
                    item.id === 2 && "border-2 border-white"
                  }`}
                >
                  Step {item.id}
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ) : (
            <FaChevronRight
              className="w-[40px] h-[40px] text-red-800"
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TicketFinalSteps;
