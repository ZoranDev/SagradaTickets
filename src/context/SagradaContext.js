// React
import { createContext, useState } from "react";

const SagradaContext = createContext();

export const SagradaProvider = ({ children }) => {
  // State for all available months to buy a ticket - this will be in jason server later
  const [availableTimes, setAvailableTimes] = useState(null);

  // Processed tickets
  const [processedTickets, setProcessedTickets] = useState([]);

  const updateAvailableTimes = (userTicketData) => {
    // here create uuid ad get id to that order and set it into state
    setProcessedTickets([...processedTickets, userTicketData]);
    // What user choose in first step when click on calendar item
    let selectedMonth = new Date(userTicketData.date).getMonth();
    let selectedYear = new Date(userTicketData.date).getFullYear();
    let selectedDay = new Date(userTicketData.date).getDate();
    let selectedTime = userTicketData.time;
    let sum = 0;
    userTicketData.visitors.forEach((visitor) => {
      sum += visitor.value;
    });
    let selectedVisitors = sum;

    if (!availableTimes) {
      setAvailableTimes([
        {
          year: selectedYear,
          month: selectedMonth,
          day: selectedDay,
          time: [
            { time: "09:00", availableVisitors: 50 },
            { time: "10:00", availableVisitors: 50 },
            { time: "11:00", availableVisitors: 50 },
            { time: "12:00", availableVisitors: 50 },
            { time: "13:00", availableVisitors: 50 },
            { time: "14:00", availableVisitors: 50 },
            { time: "15:00", availableVisitors: 50 },
            { time: "16:00", availableVisitors: 50 },
            { time: "17:00", availableVisitors: 50 },
            { time: "18:00", availableVisitors: 50 },
          ].map((item) => {
            if (item.time === selectedTime) {
              item.availableVisitors -= selectedVisitors;
            }
            return item;
          }),
        },
      ]);
    } else {
      // Check to see if object for that day is alredy created
      let created = false;
      availableTimes.forEach((item) => {
        if (
          item.year == selectedYear &&
          item.month == selectedMonth &&
          item.day == selectedDay
        ) {
          created = true;
        }
      });

      created === false
        ? setAvailableTimes([
            ...availableTimes,
            {
              year: selectedYear,
              month: selectedMonth,
              day: selectedDay,
              time: [
                { time: "09:00", availableVisitors: 50 },
                { time: "10:00", availableVisitors: 50 },
                { time: "11:00", availableVisitors: 50 },
                { time: "12:00", availableVisitors: 50 },
                { time: "13:00", availableVisitors: 50 },
                { time: "14:00", availableVisitors: 50 },
                { time: "15:00", availableVisitors: 50 },
                { time: "16:00", availableVisitors: 50 },
                { time: "17:00", availableVisitors: 50 },
                { time: "18:00", availableVisitors: 50 },
              ].map((item) => {
                if (item.time === selectedTime) {
                  item.availableVisitors =
                    item.availableVisitors - selectedVisitors;
                }
                return item;
              }),
            },
          ])
        : availableTimes.map((item, index) => {
            if (
              item.year === selectedYear &&
              item.month === selectedMonth &&
              item.day === selectedDay
            ) {
              item.time = item.time.map((u) => {
                if (u.time === selectedTime) {
                  u.availableVisitors -= selectedVisitors;
                }
                return u;
              });
            }
            return item;
          });
    }
  };

  return (
    <SagradaContext.Provider
      value={{
        updateAvailableTimes,
        availableTimes,
      }}
    >
      {children}
    </SagradaContext.Provider>
  );
};

export default SagradaContext;
