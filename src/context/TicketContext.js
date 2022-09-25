// react
import { createContext, useState, useEffect } from "react";

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

  // State for sum of visitors
  const [sumOfVisitors, setSumOfVisitors] = useState(0);

  //get sumOfVisitors
  const getSumOfVisitors = () => {
    let sum = 0;
    userTicketData.visitors.forEach((item) => {
      sum += item.value;
    });
    setSumOfVisitors(sum);
  };

  //showNextStep - mozda ovo moze jednostavnije preko niza nekog
  const showNextStep = (step) => {
    setStep1ActiveMidStep(step);
  };

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
    // OVO MOZDA POGLEDATI MALO JER DA NEMA OVOGA KAD KLIKNEM NA PLUS NE BI MI U STEP1 LOGOVALO DA IMA VISITORA
    getSumOfVisitors();
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
    getSumOfVisitors();
  };

  return (
    <TicketContext.Provider
      value={{
        userTicketData,
        step1ActiveMidStep,
        sumOfVisitors,
        selectDate,
        selectTime,
        addVisitor,
        removeVisitor,
        showNextStep,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
