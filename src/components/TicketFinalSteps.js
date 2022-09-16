import {
  FaTicketAlt,
  FaShoppingCart,
  FaCheck,
  FaChevronRight,
} from "react-icons/fa";

const TicketFinalSteps = () => {
  return (
    <div className="w-[800px] mx-auto my-10 border-2 border-black flex flex-col items-start">
      {/* Order status */}
      <div className="w-full mb-5 flex items-center justify-between">
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

      {/* Form */}
      <form className="w-full">
        {[
          { title: "Name", id: "name" },
          { title: "Last Name", id: "lastName" },
          { title: "E-mail", id: "email" },
          { title: "Phone number", id: "phone" },
          { title: "Postcode", id: "postCode" },
          { title: "ID Number", id: "idNumber" },
          { title: "Adress", id: "address" },
        ].map((item, index) => (
          <div key={index} className="w-full mb-5 flex flex-col">
            <label htmlFor={item} className="mb-3 text-lg text-red-800">
              {item.title} *
            </label>
            <input
              type="text"
              id={item.id}
              placeholder={item.title}
              className="w-full p-3 border-[1px] border-neutral-200 focus:outline-0"
              required={true}
            />
          </div>
        ))}
        {/* Under 30 */}
        <div className="w-full mb-5 flex flex-col">
          <label htmlFor={"under30"} className="mb-3 text-lg text-red-800">
            How many adults under 30 ? *
          </label>
          <input
            type="number"
            id="under30"
            className="w-full p-3 border-[1px] border-neutral-200 focus:outline-0"
            required={true}
          />
        </div>
        {/* Conutry */}
        <div className="w-full mb-5 flex flex-col">
          <label htmlFor="conutry" className="mb-3 text-lg text-red-800">
            Country
          </label>
          <select name="country" id="conutry"></select>
        </div>
      </form>
    </div>
  );
};

export default TicketFinalSteps;
