// react
import { createContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  // State for data that user insert through step 1,2,3,4
  const [userTicketData, setUserTicketData] = useState({
    date: null,
    time: null,
    visitors: [
      { id: "general", value: 0, price: 26 },
      { id: "under11", value: 0, price: 0 },
      { id: "disabled", value: 0, price: 0 },
      { id: "under30", value: 0, price: 24 },
      { id: "student", value: 0, price: 24 },
      { id: "senior", value: 0, price: 21 },
    ],
    personalInfo: {
      name: "",
      lastName: "",
      phone: "",
      email1: "",
      email2: "",
      country: "",
    },
    termsAndConditions: {
      general: false,
      privacy: false,
      information: false,
    },
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

  // calculatePrice
  const calculatePrice = () => {
    let price = 0;
    userTicketData.visitors.forEach((item) => {
      price += parseInt(item.value * item.price);
    });
    return price;
  };

  //addPersonalInfo
  const addPersonalInfo = (e) => {
    let whatToSet = e.target.id;
    let value = e.target.value;
    setUserTicketData({
      ...userTicketData,
      personalInfo: {
        name: whatToSet === "name" ? value : userTicketData.personalInfo.name,
        lastName:
          whatToSet === "lastName"
            ? value
            : userTicketData.personalInfo.lastName,
        phone:
          whatToSet === "phone" ? value : userTicketData.personalInfo.phone,
        email1:
          whatToSet === "email1" ? value : userTicketData.personalInfo.email1,
        email2:
          whatToSet === "email2" ? value : userTicketData.personalInfo.email2,
        country:
          whatToSet === "country" ? value : userTicketData.personalInfo.country,
      },
    });
  };

  //setTermAndCondition
  const setTermAndCondition = (e) => {
    setUserTicketData({
      ...userTicketData,
      termsAndConditions: {
        general:
          e.target.value === "general"
            ? e.target.checked
              ? true
              : false
            : userTicketData.termsAndConditions.general,
        privacy:
          e.target.value === "privacy"
            ? e.target.checked
              ? true
              : false
            : userTicketData.termsAndConditions.privacy,
        information:
          e.target.value === "information"
            ? e.target.checked
              ? true
              : false
            : userTicketData.termsAndConditions.information,
      },
    });
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
        calculatePrice,
        addPersonalInfo,
        setTermAndCondition,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
