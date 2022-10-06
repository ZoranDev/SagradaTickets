// react douter
import { Link } from "react-router-dom";

const CovidWarning = () => {
  return (
    <div className="w-full px-3 py-1 bg-red-500 text-white text-md text-center flex lg:px-44 relative overflow-hidden">
      <p className="z-0 relative animate-[covid_10s_ease-in-out_infinite]">
        <span className="mr-2 font-bold">COVID-19:</span>
        In order to ensure your health, Sagrada Familia is applying all health
        and sanity measures established by the Ministry of Health. Visitors must
        follow the safety rules:
        <Link
          to="/covid-info"
          children={
            <span className="ml-2 italic underline">
              Click here for more information
            </span>
          }
        />
      </p>
    </div>
  );
};

export default CovidWarning;
