import React from "react";

const LogIn = () => {
  return (
    <form className="min-w-[300px] w-[500px] my-10 mx-auto p-10 border-2 border-red-500 ">
      {/* Log in or register */}
      <div className="w-full">
        <button className="w-[50%] py-2 text-center bg-red-200">Log In</button>
        <button className="w-[50%] py-2 text-center bg-green-200">
          Register
        </button>
      </div>
      {/* User info */}
      <div>
        <div>
          <h2>E-mail</h2>
          <input type="email" required={true} placeholder="Enter your e-mail" />
        </div>
        <div>
          <h2>Password</h2>
          <input
            type="email"
            required={true}
            placeholder="Enter your password"
          />
        </div>
        <div>
          {["name", "lastName", "phone"].map((item, index) => (
            <div key={index}>
              <h2>
                {item === "name"
                  ? "Name"
                  : item === "lastName"
                  ? "Last Name"
                  : "Phone number"}
              </h2>
              <input
                type="text"
                name={item}
                placeholder={`Enter your ${
                  item === "name"
                    ? "name"
                    : item === "lastName"
                    ? "last name"
                    : "phone number"
                }`}
              />
            </div>
          ))}
        </div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default LogIn;
