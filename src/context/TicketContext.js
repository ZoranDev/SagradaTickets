// react
import { createContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  // State for data that user insert through step 1,2,3,4
  const [userTicketData, setUserTicketData] = useState({
    date: null,
    time: null,
    visitors: [
      { id: "general", value: 0 },
      { id: "under11", value: 0 },
      { id: "disabled", value: 0 },
      { id: "under30", value: 0 },
      { id: "student", value: 0 },
      { id: "senior", value: 0 },
    ],
  });

  // State for active mid step in step 1
  const [step1ActiveMidStep, setStep1ActiveMidStep] = useState("calendar");

  // selectDate
  const selectDate = (date) => {
    setUserTicketData({ ...userTicketData, date: date });
    setStep1ActiveMidStep("time");
  };

  // selectTime
  const selectTime = (e) => {
    setUserTicketData({ ...userTicketData, time: e.target.id });
    setStep1ActiveMidStep("visitors");
  };

  //removeVisitor
  const removeVisitor = (id) => {
    setUserTicketData({
      ...userTicketData,
      visitors: userTicketData.visitors.map((visitor) => {
        if (visitor.id === id) {
          visitor.value -= 1;
        }
        return visitor;
      }),
    });
  };

  //addVisitor
  const addVisitor = (id) => {
    setUserTicketData({
      ...userTicketData,
      visitors: userTicketData.visitors.map((visitor) => {
        if (visitor.id === id) {
          visitor.value += 1;
        }
        return visitor;
      }),
    });
  };

  return (
    <TicketContext.Provider
      value={{
        userTicketData,
        step1ActiveMidStep,
        selectDate,
        selectTime,
        addVisitor,
        removeVisitor,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
