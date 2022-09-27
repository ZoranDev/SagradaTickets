// react
import { useState, useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";

// List of all countries
const countryList = require("country-list").getData();

const InputItem = ({ id, title, type, handleOnChange, value }) => {
  //Context
  const {
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
    setOkInfo(true);
    setError({ active: false, message: "" });
    // Just when user click on field
    value === "" ? setOkInfo(false) : setOkInfo(true);
    // Vhen user type/select something
    if (
      ((id === "name" || id === "lastName") && hasNumber.test(value)) ||
      (id === "phone" && hasChar.test(value)) ||
      (id === "email1" && !validEmail.test(value)) ||
      (id === "email2" && !validEmail.test(value)) ||
      (id === "country" && value === "")
    ) {
      setOkInfo(false);
      setError({ active: true, message: "Invalid !" });
    } else if (id === "email2" && email1 !== email2) {
      setOkInfo(false);
      setError({ active: true, message: "Dont match e-mails!" });
    }
  };

  return (
    <div className="w-[350px] bg-blue-200 mx-4 my-5 relative">
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
          onClick={moveLabelUp}
          onChange={handleOnChange}
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
          onClick={moveLabelUp}
          onChange={handleOnChange}
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
