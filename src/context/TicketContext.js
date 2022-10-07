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

  // Active step - 1 (date,time,visitors), 2 (personal info), 3 (pay) - 4 (confirmation)
  const [activeStep, setActiveStep] = useState(1);

  // State for active mid step in step  - show calendar, hours or visitors selection
  const [step1ActiveMidStep, setStep1ActiveMidStep] = useState("calendar");

  // State for sum of visitors
  const [sumOfVisitors, setSumOfVisitors] = useState(0);

  // changeActiveStep
  const changeActiveStep = (stepID) => {
    setActiveStep(stepID);
  };

  //get sumOfVisitors
  const getSumOfVisitors = () => {
    let sum = 0;
    userTicketData.visitors.forEach((item) => {
      sum += item.value;
    });
    setSumOfVisitors(sum);
  };

  //showNextMidStep - move from calendar to hours and visitors selection
  const showNextMidStep = (step) => {
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

  // check is step 1 fulfiled - true (have selected date and time, and sum of visitors > 0 but children only could not get ticket
  const isStepOneFulfiled = () => {
    // Get childrens and adults
    let childrens = parseInt(userTicketData.visitors[1].value);
    let adults = parseInt(sumOfVisitors - childrens);

    // 2 child per 1 adult or only one child
    let fulfiled =
      !userTicketData.date ||
      !userTicketData.time ||
      sumOfVisitors === childrens ||
      childrens - adults > childrens / 2
        ? false
        : true;

    return fulfiled;
  };

  // check is step 2 fulfiled - true (have all info with no errors()
  const isStepTwoFulfiled = () => {
    let fulfiled =
      userTicketData.personalInfo.name !== "" &&
      userTicketData.personalInfo.lastName !== "" &&
      userTicketData.personalInfo.phone !== "" &&
      userTicketData.personalInfo.email1 !== "" &&
      userTicketData.personalInfo.email2 !== "" &&
      userTicketData.personalInfo.country !== "" &&
      !userTicketData.personalInfo.isErrInForm &&
      userTicketData.termsAndConditions.general &&
      userTicketData.termsAndConditions.privacy
        ? true
        : false;
    return fulfiled;
  };

  // check is step 3 fulfiled - true (have all info with no errors()
  const isStepThreeFulfiled = () => {
    let fulfiled =
      userTicketData.creditCardInfo.num1 !== "" &&
      userTicketData.creditCardInfo.num2 !== "" &&
      userTicketData.creditCardInfo.num3 !== "" &&
      userTicketData.creditCardInfo.num4 !== "" &&
      userTicketData.creditCardInfo.cvc !== "" &&
      userTicketData.creditCardInfo.expireMonth !== "" &&
      userTicketData.creditCardInfo.expireYear !== "" &&
      !userTicketData.creditCardInfo.isErrInCardInfo
        ? true
        : false;
    return fulfiled;
  };

  //buyMoreTicketsFunc,
  const buyMoreTicketsFunc = () => {
    // Set active step to 1, reset state, set active mid step to calendar and set num of visitors to 0
    setActiveStep(1);
    setUserTicketData({
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
    setStep1ActiveMidStep("calendar");
    setSumOfVisitors(0);
  };

  return (
    <TicketContext.Provider
      value={{
        userTicketData,
        activeStep,
        step1ActiveMidStep,
        sumOfVisitors,
        selectDate,
        selectTime,
        addVisitor,
        removeVisitor,
        showNextMidStep,
        changeActiveStep,
        calculatePrice,
        fillPersonalInfo,
        isErrorInPersonalInfo,
        fillTermAndCondition,
        fillCardInfo,
        isErrorInCreditCardInfo,
        buyMoreTicketsFunc,
        isStepOneFulfiled,
        isStepTwoFulfiled,
        isStepThreeFulfiled,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
