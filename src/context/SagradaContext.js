// React
import { createContext, useState } from "react";

const sagradaContext = createContext();

export const SagradaProvider = ({ children }) => {
  // Log in state
  const [logInInfo, setLogInInfo] = useState("login");

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
