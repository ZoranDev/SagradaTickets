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
      isErrInForm: false,
    },
    termsAndConditions: {
      general: false,
      privacy: false,
      information: false,
    },
    creditCardInfo: {
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      expireMonth: "",
      expireYear: "",
      cvc: "",
      isErrInCardInfo: false,
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
  const selectTime = (hour) => {
    setUserTicketData({ ...userTicketData, time: hour });
    setStep1ActiveMidStep("visitors");
  };

  //addVisitor
  const addVisitor = (id, maxVisitors) => {
    setUserTicketData({
      ...userTicketData,
      visitors: userTicketData.visitors.map((visitor) => {
        if (visitor.id === id && maxVisitors > sumOfVisitors) {
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

  // fillPersonalInfo
  const fillPersonalInfo = (e) => {
    setUserTicketData({
      ...userTicketData,
      personalInfo: {
        ...userTicketData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // isErrorInPersonalInfo
  const isErrorInPersonalInfo = (err) => {
    setUserTicketData({
      ...userTicketData,
      personalInfo: {
        ...userTicketData.personalInfo,
        isErrInForm: err,
      },
    });
  };

  //fillTermAndCondition
  const fillTermAndCondition = (e) => {
    setUserTicketData({
      ...userTicketData,
      termsAndConditions: {
        ...userTicketData.termsAndConditions,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // fillCardInfo
  const fillCardInfo = (e) => {
    setUserTicketData({
      ...userTicketData,
      creditCardInfo: {
        ...userTicketData.creditCardInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // isErrorInCreditCardInfo
  const isErrorInCreditCardInfo = (err) => {
    setUserTicketData({
      ...userTicketData,
      creditCardInfo: {
        ...userTicketData.creditCardInfo,
        isErrInCardInfo: err,
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
        fillPersonalInfo,
        isErrorInPersonalInfo,
        fillTermAndCondition,
        fillCardInfo,
        isErrorInCreditCardInfo,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
