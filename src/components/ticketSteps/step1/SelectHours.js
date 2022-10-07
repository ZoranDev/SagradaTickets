// components
import Hour from "./Hour";

const SelectHours = () => {
  return (
    <div className="mb-3 w-full flex items-center justify-center flex-wrap">
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
        <Hour key={index} hour={hour} />
      ))}
    </div>
  );
};

export default SelectHours;
