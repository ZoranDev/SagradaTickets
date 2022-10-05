// react
import { useState, useEffect, useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";
// List of all countries
const countryList = require("country-list").getData();

const InputItem = ({ id, title, type, value }) => {
  // Context
  const {
    fillPersonalInfo,
    isErrorInPersonalInfo,
    userTicketData: {
      personalInfo: { email1, email2 },
    },
  } = useContext(TicketContext);
  // State for labelUp
  const [labelUp, setLabelUp] = useState(false);
  // State for ok info
  const [okInfo, setOkInfo] = useState(true);
  // State for error
  const [error, setError] = useState({
    active: false,
    message: "",
  });

  // use this to send if error is occured in any input
  useEffect(() => {
    isErrorInPersonalInfo(error.active);
  }, [error]);

  // Validate template strings if string has numbers, string has characters, and validate ok email address
  let hasNumber = /\d/;
  var hasChar = /[a-zA-Z]/g;
  let validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //moveLabelUp - when move label up check to see if inside value is ok
  const moveLabelUp = () => {
    setLabelUp(true);
    ifOk();
  };

  // handleKeyUp
  const handleKeyUp = (e) => {
    ifOk();
  };

  //ifValueOk
  const ifOk = () => {
    // If user did not enter anything or deleted all from input field - show red border around field with no error message
    if (value === "") {
      setOkInfo(false);
      setError({ active: false, message: "" });
    } else {
      // Here check is input field correctly entered
      if (
        ((id === "name" || id === "lastName") && hasNumber.test(value)) ||
        (id === "phone" && hasChar.test(value)) ||
        (id === "email1" && !validEmail.test(value)) ||
        (id === "email2" && !validEmail.test(value)) ||
        (id === "country" && value === "")
      ) {
        setOkInfo(false);
        setError({ active: true, message: "Invalid !" });
      } else if (
        (id === "email2" && email1 !== email2) ||
        (id === "email1" && email2 !== "" && email1 !== email2)
      ) {
        // here if email1 is different from email 2
        setOkInfo(false);
        setError({ active: true, message: "Dont match e-mails!" });
      } else {
        // if data correctly entered
        setOkInfo(true);
        setError({ active: false, message: "" });
      }
    }
  };

  return (
    <div className="w-full bg-blue-200 my-5 mx-2 relative sm:w-[350px] sm:mx-4">
      <label
        htmlFor={id}
        className={`p-1 bg-white absolute ${
          labelUp ? "top-2/4 -translate-y-[40px]" : "top-2/4 -translate-y-2/4 "
        } left-5 transition-transform duration-[200ms] cursor-text z-10`}
        onClick={moveLabelUp}
      >
        {title} <span className="ml-1 text-red-500">*</span>
      </label>
      {id === "country" && (
        <select
          name={id}
          onClick={moveLabelUp}
          onChange={fillPersonalInfo}
          id={id}
          required={true}
          className={`w-full h-full p-3 focus:outline-0 border-2 ${
            okInfo
              ? "border-neutral-300 shadow-[3px_3px_2px_rgba(0,0,0,0.3)]"
              : "border-red-500 shadow-[3px_3px_2px_rgba(255,0,0,0.3)]"
          }   z-0`}
        >
          <option value=""></option>
          {countryList.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      {id !== "country" && (
        <input
          name={id}
          onClick={moveLabelUp}
          onChange={fillPersonalInfo}
          onKeyUp={handleKeyUp}
          type={type}
          id={id}
          value={value}
          required={true}
          className={`w-full h-full p-3 focus:outline-0 border-2 ${
            okInfo
              ? "border-neutral-300 shadow-[3px_3px_2px_rgba(0,0,0,0.3)]"
              : "border-red-500 shadow-[3px_3px_2px_rgba(255,0,0,0.3)]"
          }   z-0`}
        />
      )}
      {error.active && (
        <div className="absolute left-4 text-red-500">{error.message}</div>
      )}
    </div>
  );
};

export default InputItem;
