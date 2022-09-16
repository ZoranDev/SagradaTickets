import { ImWarning } from "react-icons/im";

const Error = ({ message }) => {
  return (
    <div className="w-full text-red-500 text-lg flex items-center justify-start">
      <ImWarning className="mr-2 text-red-500" /> {message}!
    </div>
  );
};

export default Error;
