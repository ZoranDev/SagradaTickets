const SelectHours = ({ selectHours }) => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap">
      {[
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ].map((hour, index) => (
        <div
          className="w-[100px] m-2 p-2 border-2 border-black hover:border-red-500 hover:cursor-pointer flex items-center justify-center"
          key={index}
          id={hour}
          onClick={selectHours}
        >
          {hour}
        </div>
      ))}
    </div>
  );
};

export default SelectHours;
