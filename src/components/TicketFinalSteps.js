// React
import { useState } from "react";

// Icons
import {
  FaTicketAlt,
  FaShoppingCart,
  FaCheck,
  FaChevronRight,
  FaLock,
} from "react-icons/fa";

// List of all countries
const countryList = require("country-list").getData();

const TicketFinalSteps = ({
  numOfAdults,
  bookingDate,
  bookingTime,
  showThirdStep,
}) => {
  // State for user info
  const [userInfo, setUserInfo] = useState({
    name: null,
    lastName: null,
    email: null,
    phone: null,
    postCode: null,
    idNumber: null,
    address: null,
    under30: 0,
    country: "Andorra",
  });

  //fillUserInfo from all input fields
  const fillUserInfo = (e) => {
    let whatToFill = e.target.id;
    let value = e.target.value;
    setUserInfo({
      name: whatToFill === "name" ? value : userInfo.name,
      lastName: whatToFill === "lastName" ? value : userInfo.lastName,
      email: whatToFill === "email" ? value : userInfo.email,
      phone: whatToFill === "phone" ? value : userInfo.phone,
      postCode: whatToFill === "postCode" ? value : userInfo.postCode,
      idNumber: whatToFill === "idNumber" ? value : userInfo.idNumber,
      address: whatToFill === "address" ? value : userInfo.address,
      under30: whatToFill === "under30" ? value : userInfo.under30,
      country: whatToFill === "country" ? value : userInfo.country,
    });
  };

  // Get  an array for adults (in input under30 to show that)
  const adultsArray = Array.apply(null, Array(numOfAdults + 1));

  // Total price
  const totalPrice = () => {
    let basicPrice = 24; // Basic price is 24 eur per person
    let under30 = userInfo.under30 ? parseInt(userInfo.under30) : 0;
    let allAdults = parseInt(numOfAdults);
    // If adult is over 30 fee is 12 eur otherwise fee is 10 eur
    const price =
      under30 === 0
        ? allAdults * basicPrice + allAdults * 12
        : (allAdults - under30) * basicPrice +
          (allAdults - under30) * 12 +
          under30 * basicPrice +
          under30 * 10;

    return price;
  };

  //submitForm
  const submitForm = (e) => {
    e.preventDefault();
    showThirdStep();
    setUserInfo({
      name: null,
      lastName: null,
      email: null,
      phone: null,
      postCode: null,
      idNumber: null,
      address: null,
      under30: 0,
      country: "Andorra",
    });
  };

  return (
    <div className="max-w-[700px] my-10 mx-2 p-4 bg-white shadow-[0_0_10px_rgba(0,0,0,0.7)] flex flex-col items-start  md:mx-auto">
      {/* Order status */}
      <div className="w-full mb-5 flex items-center justify-between md:px-20">
        {[
          { id: 1, text: "Ticket selected" },
          {}, // if this is emty add chevron right
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
      <form className="w-full" onSubmit={submitForm}>
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
              type={item.id === "email" ? "email" : "text"}
              id={item.id}
              placeholder={item.title}
              className="w-full p-3 border-[1px] border-neutral-200 focus:outline-0"
              required={true}
              onChange={fillUserInfo}
            />
          </div>
        ))}
        {/* Under 30 */}
        <div className="w-full mb-5 flex flex-col">
          <label htmlFor={"under30"} className="mb-3 text-lg text-red-800">
            How many adults under 30 ? *
          </label>
          <select
            name="under30"
            id="under30"
            className="w-full p-3 border-[1px] border-neutral-200 focus:outline-0"
            required={true}
            onChange={fillUserInfo}
          >
            {adultsArray.map((item, index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
        </div>
        {/* Conutry */}
        <div className="w-full mb-5 flex flex-col">
          <label htmlFor="conutry" className="mb-3 text-lg text-red-800">
            Country
          </label>
          <select
            name="country"
            id="country"
            className="w-full border-[1px] border-neutral-200 p-3"
            onChange={fillUserInfo}
            required={true}
          >
            {countryList.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Odrer price and confirmation section */}
        <div className="w-full mt-10 ">
          <h1 className="w-full mb-5 text-2xl text-center">Your Order</h1>
          <table className="w-full">
            <thead className="w-full border-b-[1px] border-red-500">
              <tr className="w-full">
                <th className="py-2">Product</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full">
                <td className="p-3 flex flex-col items-center justify-left sm:flex-row">
                  <img
                    className="w-[70px] mr-2"
                    src="https://sagradafamilia-tickets.com/wp-content/uploads/2020/03/9-300x300.jpg"
                    alt="Sagrada"
                  />
                  <p>Sagrada familia tickets</p>
                </td>
                <td>
                  <p>x {numOfAdults} adults</p>
                  <p>
                    <span className="font-bold mr-2">Booking date:</span>
                    {new Date(bookingDate).toString().slice(0, 15)}
                  </p>
                  <p>
                    <span className="font-bold mr-2">Booking time:</span>
                    {bookingTime} h
                  </p>
                </td>
              </tr>
              <tr className="w-full">
                <td className="p-3 text-xl font-bold">Total</td>
                <td className="p-3 text-xl font-bold text-red-800">
                  {totalPrice()} €
                </td>
              </tr>
            </tbody>
          </table>

          {/* Submit form */}
          <button
            type="submit"
            className="w-full my-5 p-4 bg-rose-500 flex items-center justify-center text-white text-xl rounded hover:bg-rose-600 hover:cursor-pointer"
          >
            <FaLock className="mr-2" /> Place order{" "}
            <span className="ml-2">€ {totalPrice()}</span>
          </button>

          {/* Fees section */}
          <p className="w-full px-3 text-justify text-sm text-neutral-400">
            <span className="mr-1 text-red-800">*</span> Booking fees are
            already included in the total price, 10-12 euros per adult ticket
            according to the age, which includes the cost of booking the
            tickets, as well as the cost of processing the payment. It also
            includes customer service and the fees charged by our suppliers.
          </p>
        </div>
      </form>
    </div>
  );
};

export default TicketFinalSteps;
