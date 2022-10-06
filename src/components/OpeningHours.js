const oppeningInfo = [
  {
    col1: "09:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "10:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "11:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "12:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "13:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "14:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "15:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "16:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "17:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
  {
    col1: "18:00 h",
    col2: "MO-TUE-THU-FRI-SAT",
  },
];

const OpeningHours = () => {
  return (
    <div className="w-full p-2 py-10 flex flex-col lg:px-[100px]">
      <p className="w-full mb-10 text-center italic">
        La Sagrada Família is open all year round for visitors. The opening days
        and times can be modified on some occasions by management due to special
        events that may take place inside the Basilica. View below the schedule.
      </p>
      {/* Tour hours */}
      <div className="w-full mb-10 ">
        <h1 className="w-full mb-4 text-center text-4xl">Opening hours</h1>
        <div className="grid grid-cols-1 grid-rows-10 gap-0 text-neutral-700">
          {oppeningInfo.map((item, index) => (
            <div
              key={index}
              className="w-full grid grid-cols-2 grid-rows-1 text-md lg:text-xl"
            >
              <div className=" py-1 border-[1px] flex items-center justify-center text-center sm:px-2">
                {item.col1}
              </div>
              <div className=" py-1 border-[1px] flex items-center justify-center text-center sm:px-2">
                {item.col2}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service hours */}
      <div className="w-full mb-4">
        <h1 className="w-full mb-4 text-center text-4xl">Services Hours</h1>
        <p className="w-full mb-4 text-justify text-neutral-600">
          Aside from being a unique temple, la Sagrada Família is in fact a
          functioning Roman Catholic church and mass is held every Sunday
          morning at 9 AM and Saturdays at 8 PM. The service lasts about 1 hour
          and it is performed in several languages to accommodate locals and
          tourists. The entrance is free of charge.
        </p>
        <p className="w-full mb-4 text-justify text-neutral-600">
          Space inside is limited, so entrance is on a first come and first
          served basis. If you wish to attend a service, you should be at the
          entrance close to the Nativity Facade before 8:30 AM for Sunday mass
          and 7:30 PM for Saturday service. There are some special dates for
          church services that take place throughout the year. It is essential
          that you dress and behave well when you attend mass.
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;
