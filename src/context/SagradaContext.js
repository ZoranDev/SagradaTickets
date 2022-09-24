// React
import { createContext, useState } from "react";

const sagradaContext = createContext();

export const SagradaProvider = ({ children }) => {
  // Log in state
  const [logInInfo, setLogInInfo] = useState("login");

  // getAllDisplayedMonthsArray function
  const getAllDisplayedMonthsArray = () => {
    return Array(12 - new Date().getMonth() + 12)
      .fill(null)
      .map((u, i) =>
        i < 12 - new Date().getMonth()
          ? {
              year: new Date().getFullYear(),
              month: new Date().getMonth() + i,
              days: Array(
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() + i,
                  0
                ).getDate()
              )
                .fill(null)
                .map((day, index) => {
                  return {
                    "09:00 - 09:45": 50,
                    "10:00 - 10:45": 50,
                    "11:00 - 11:45": 50,
                    "12:00 - 12:45": 50,
                    "13:00 - 13:45": 50,
                    "14:00 - 14:45": 50,
                    "15:00 - 15:45": 50,
                    "16:00 - 16:45": 50,
                    "17:00 - 17:45": 50,
                    "18:00 - 18:45": 50,
                  };
                }),
            }
          : {
              year: new Date().getFullYear() + 1,
              month: new Date().getMonth() + i - 12,
              days: Array(
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() + i,
                  0
                ).getDate()
              )
                .fill(null)
                .map((day, index) => {
                  return {
                    "09:00 - 09:45": 50,
                    "10:00 - 10:45": 50,
                    "11:00 - 11:45": 50,
                    "12:00 - 12:45": 50,
                    "13:00 - 13:45": 50,
                    "14:00 - 14:45": 50,
                    "15:00 - 15:45": 50,
                    "16:00 - 16:45": 50,
                    "17:00 - 17:45": 50,
                    "18:00 - 18:45": 50,
                  };
                }),
            }
      );
  };

  /*  console.log(getAllDisplayedMonthsArray()); */

  return (
    <sagradaContext.Provider
      value={{
        logInInfo,
      }}
    >
      {children}
    </sagradaContext.Provider>
  );
};

export default sagradaContext;
