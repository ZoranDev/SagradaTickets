//react
import { useState } from "react";
// components
import InputItem from "./InputItem";

const info = [
  { id: "name", title: "Name", type: "text" },
  { id: "lastName", title: "Last Name", type: "text" },
  { id: "phone", title: "Phone", type: "text" },
  { id: "email1", title: "Email address", type: "email" },
  { id: "email2", title: "Repeat email address", type: "email" },
  { id: "country", title: "Country", type: "select" },
];

const PersonalInfo = () => {
  // State for input data
  const [inputData, setInputData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email1: "",
    email2: "",
    country: "",
  });

  //handleOnChange
  const handleOnChange = (e) => {
    let whatToSet = e.target.id;
    let value = e.target.value;
    setInputData({
      name: whatToSet === "name" ? value : inputData.name,
      lastName: whatToSet === "lastName" ? value : inputData.lastName,
      phone: whatToSet === "phone" ? value : inputData.phone,
      email1: whatToSet === "email1" ? value : inputData.email1,
      email2: whatToSet === "email2" ? value : inputData.email2,
      country: whatToSet === "country" ? value : inputData.country,
    });
  };

  return (
    <div className="w-full">
      <h1 className="mb-2 w-full text-lg text-center">
        Enter your personal details to receive your tickets
      </h1>
      <div className="w-full flex items-center justify-between flex-wrap">
        {info.map((item, index) => (
          <InputItem
            id={item.id}
            title={item.title}
            type={item.type}
            key={index}
            handleOnChange={handleOnChange}
            inputData={inputData}
            value={
              item.id === "name"
                ? inputData.name
                : item.id === "lastName"
                ? inputData.lastName
                : item.id === "phone"
                ? inputData.phone
                : item.id === "email1"
                ? inputData.email1
                : item.id === "email2"
                ? inputData.email2
                : inputData.country
            }
          />
        ))}
        <p>
          <span className="mr-2 text-red-500">*</span>Required fields
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
