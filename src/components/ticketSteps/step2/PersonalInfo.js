//react
import { useState } from "react";
// components
import InputItem from "./InputItem";

const info = [
  { id: "name", title: "Name", type: "text" },
  { id: "lastName", title: "Last Name", type: "text" },
  { id: "phone", title: "Phone", type: "text" },
  { id: "email1", title: "E-mail address", type: "email" },
  { id: "email2", title: "Repeat e-mail address", type: "email" },
  { id: "country", title: "Country", type: "select" },
];

const PersonalInfo = () => {
  return (
    <form className="w-full">
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
          />
        ))}
      </div>
    </form>
  );
};

export default PersonalInfo;
