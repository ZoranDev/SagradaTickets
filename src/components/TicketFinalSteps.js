import {
  FaTicketAlt,
  FaShoppingCart,
  FaCheck,
  FaChevronRight,
} from "react-icons/fa";

// List of all countries
const countryList = require("country-list").getData();

const TicketFinalSteps = () => {
  return (
    <div className="max-w-[700px] my-10 mx-2 p-4 shadow-[0_0_10px_rgba(0,0,0,0.7)] flex flex-col items-start md:mx-auto">
      {/* Order status */}
      <div className="w-full mb-5 flex items-center justify-between md:px-20">
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
                className={`w-[60px] h-[60px] ${
                  item.id === 2
                    ? "bg-red-800 text-neutral-200"
                    : "bg-neutral-200 text-red-800"
                } rounded-full flex items-center justify-center relative sm:w-[100px] sm:h-[100px]`}
              >
                {item.id === 1 ? (
                  <FaTicketAlt className="w-[30px] h-[30px]" />
                ) : item.id === 2 ? (
                  <FaShoppingCart className="w-[30px] h-[30px]" />
                ) : (
                  <FaCheck className="w-[30px] h-[30px]" />
                )}
                <div
                  className={`-top-3 -right-4 px-2 text-sm bg-red-800 rounded-2xl text-white absolute sm:px-4 sm:py-[2px] sm:top-0 sm:-right-5 ${
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
              className="w-[20px] h-[20px] text-red-800 sm:w-[40px] sm:h-[40px]"
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
          <select
            name="country"
            id="conutry"
            className="w-full border-[1px] border-neutral-200 p-3"
          >
            <option value={"default"}>Choose a country</option>
            {countryList.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default TicketFinalSteps;
