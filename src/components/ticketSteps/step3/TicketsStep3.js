// react
import { useState, useContext, useEffect } from "react";
// Context
import TicketContext from "../../../context/TicketContext";
// Icons
import { FaQuestion, FaExclamationTriangle } from "react-icons/fa";

//get current year
const currentYear = new Date().getFullYear();

const TicketsStep3 = () => {
  // Context
  const {
    userTicketData: {
      creditCardInfo: { num1, num2, num3, num4, expireMonth, expireYear, cvc },
    },
    fillCardInfo,
    isErrorInCreditCardInfo,
  } = useContext(TicketContext);

  // Check if value has some character
  var hasChar = /[a-zA-Z]/g;

  // State for error in card number
  const [cardNumberErr, setCardNumberErr] = useState(false);

  // State for error in expire date
  const [expireDateErr, setExpireDateErr] = useState(false);

  // State for cvc error
  const [cvcErr, setCvcErr] = useState(false);

  // showImage state
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    isCharInCardNumber();
  }, [num1, num2, num3, num4]);

  useEffect(() => {
    checkExpireDate();
  }, [expireMonth, expireYear]);

  useEffect(() => {
    cardNumberErr || expireDateErr || cvcErr
      ? isErrorInCreditCardInfo(true)
      : isErrorInCreditCardInfo(false);
  }, [cardNumberErr, cvcErr, expireDateErr]);

  // is char in credit card number
  const isCharInCardNumber = () => {
    hasChar.test(num1) ||
    hasChar.test(num2) ||
    hasChar.test(num3) ||
    hasChar.test(num4)
      ? setCardNumberErr(true)
      : setCardNumberErr(false);
  };

  // handleOnChange function
  const handleOnChange = (e) => {
    if (
      e.target.id === "num1" ||
      e.target.id === "num2" ||
      e.target.id === "num3" ||
      e.target.id === "num4"
    ) {
      let value = e.target.value;
      let fieldIndex = parseInt(e.target.id.slice(3, 4));
      let parent = e.target.parentElement;

      if (fieldIndex === 1 && value.length === 4) {
        parent.children[1].focus();
        parent.children[1].select();
      } else if (fieldIndex === 2 && value.length === 4) {
        parent.children[2].focus();
        parent.children[2].select();
      } else if (fieldIndex === 3 && value.length === 4) {
        parent.children[3].focus();
        parent.children[3].select();
      }
    } else if (e.target.id === "cvc") {
      hasChar.test(e.target.value) ? setCvcErr(true) : setCvcErr(false);
    }

    fillCardInfo(e);
  };

  // check expire date
  const checkExpireDate = () => {
    expireMonth === "default" ||
    expireYear === "default" ||
    (expireMonth !== "" &&
      expireYear !== "" &&
      new Date(expireYear, expireMonth) < new Date())
      ? setExpireDateErr(true)
      : setExpireDateErr(false);
  };

  //mouseEnter
  const mouseEnter = () => setShowImage(true);

  //mouseLeave
  const mouseLeave = () => setShowImage(false);

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-[450px] px-5 py-7 border-2 border-neutral-400 rounded shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        <h1 className="w-full mb-3 text-center text-lg text-neutral-700">
          Almost done!
        </h1>
        {/* Card number */}
        <div className="w-full mb-2">
          <h2 className="w-full py-2 px-4 text-xl bg-transparent text-neutral-500">
            Card number:
          </h2>
          <div
            className={`h-[50px] py-2 px-4 flex items-center justify-between ${
              !cardNumberErr
                ? "border-2 border-neutral-300"
                : "border-2 border-red-400"
            } `}
          >
            {["num1", "num2", "num3", "num4"].map((item, index) => (
              <input
                key={index}
                name={item}
                value={
                  item === "num1"
                    ? num1
                    : item === "num2"
                    ? num2
                    : item === "num3"
                    ? num3
                    : num4
                }
                onChange={handleOnChange}
                type="text"
                id={item}
                maxLength={4}
                placeholder="0000"
                className="w-[80px] px-2 py-1 text-center text-xl text-neutral-500 bg-transparent border-0 placeholder:text-neutral-500 focus:outline-0"
              />
            ))}
          </div>
          {cardNumberErr && (
            <div className="flex items-center justify-left text-red-500">
              <FaExclamationTriangle className="mr-2" /> Check card number!
            </div>
          )}
        </div>

        {/* Expire date */}
        <div className="w-full mb-2">
          <h2 className="w-full py-2 px-4 text-xl bg-transparent text-neutral-500">
            Expire date
          </h2>
          <div className="w-full h-[50px] flex items-center">
            {/* Month */}
            <select
              name="expireMonth"
              id="month"
              className="h-full w-2/4 py-2 px-4 border-2 border-r-0 border-neutral-300 cursor-pointer text-xl text-neutral-500 focus:outline-0"
              onChange={handleOnChange}
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
              name="expireYear"
              id="year"
              onChange={handleOnChange}
              className="h-full w-2/4 py-2 px-4 border-2 border-neutral-300 cursor-pointer text-neutral-500 text-xl focus:outline-0"
            >
              <option value="default">YY</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 9].map((item, index) => (
                <option key={index} value={currentYear + item}>
                  {currentYear + item}
                </option>
              ))}
            </select>
          </div>
          {expireDateErr && (
            <div className="flex items-center justify-left text-red-500">
              <FaExclamationTriangle className="mr-2" /> Check expire date!
            </div>
          )}
        </div>

        {/* CVC */}
        <div className="w-full">
          <h2 className="w-full py-2 px-4 text-xl bg-transparent text-neutral-500">
            CVC
          </h2>
          <div className="h-[50px] relative ">
            <div className="w-2/4 h-full border-2 border-neutral-300 flex items-center justify-between relative">
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                className="w-full h-full py-2 px-4 text-xl border-0 focus:outline-0 text-left text-neutral-500 placeholder:text-neutral-500"
                id="cvc"
                maxLength={3}
                value={cvc}
                onChange={handleOnChange}
              />
              <FaQuestion
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className="absolute right-0 t-2/4 text-neutral-500 hover:text-red-500 cursor-pointer"
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
          {cvcErr && (
            <div className="flex items-center justify-left text-red-500">
              <FaExclamationTriangle className="mr-2" /> Check cvc!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketsStep3;
