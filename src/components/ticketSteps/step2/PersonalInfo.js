//react
import { useContext } from "react";
// context
import TicketContext from "../../../context/TicketContext";
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
  // Context
  const {
    addPersonalInfo,
    userTicketData: {
      personalInfo: { name, lastName, phone, email1, email2, country },
    },
  } = useContext(TicketContext);

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
            handleOnChange={addPersonalInfo}
            value={
              item.id === "name"
                ? name
                : item.id === "lastName"
                ? lastName
                : item.id === "phone"
                ? phone
                : item.id === "email1"
                ? email1
                : item.id === "email2"
                ? email2
                : country
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
