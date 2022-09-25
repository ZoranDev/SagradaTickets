// Components
import AddRemoveVisitor from "./AddRemoveVisitor";
//Icons
import { FaExclamationCircle } from "react-icons/fa";

const SelectVisitors = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-3">
        Select the number of people by type of entry. The maximum number of
        entries must be between 1 and 9.
      </h1>
      <div className="mb-3 flex items-center justify-between flex-wrap">
        {["general", "under11", "disabled", "under30", "student", "senior"].map(
          (item, index) => (
            <AddRemoveVisitor id={item} key={index} />
          )
        )}
      </div>
      {/* Additional info */}
      <div className="w-full">
        <div className="mb-3 flex items-center justify-left">
          <FaExclamationCircle className="w-[20px] h-[20px] mr-3 text-red-800" />
          <h1 className="text-lg">Attention</h1>
        </div>
        <ul className="w-full px-5 list-disc text-left">
          <li>
            Some areas of the Basilica are currently undergoing rehabilitation
            works. Please pardon any inconvenience.
          </li>
          <li>
            One adult ticket must be purchased for every two children (under 11)
          </li>
          <li>
            Persons entitled to tickets with discount (pensioners, under 30,
            students, disabled persons etc.) must certify their condition to
            access on the Basilica grounds.
          </li>
          <li>A maximum of two disabled tickets may be purchased at a time.</li>
        </ul>
      </div>
    </div>
  );
};

export default SelectVisitors;
