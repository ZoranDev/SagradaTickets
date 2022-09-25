// react
import { useState, useEffect, useContext } from "react";
// Context
import TicketContext from "../../../context/TicketContext";
// Icons
import { FaMinus, FaPlus } from "react-icons/fa";

const titlesAndPrices = [
  {
    id: "general",
    title: "General",
    price: 26,
  },
  {
    id: "under11",
    title: "Children under 11 years old",
    price: 0,
  },
  {
    id: "disabled",
    title: "Disabled",
    price: 0,
  },
  {
    id: "under30",
    title: "Under 30 years old",
    price: 24,
  },
  {
    id: "student",
    title: "Students",
    price: 24,
  },
  {
    id: "senior",
    title: "Seniors",
    price: 21,
  },
];

const AddRemoveVisitor = ({ id }) => {
  // Context
  const {
    addVisitor,
    removeVisitor,
    userTicketData: { visitors },
  } = useContext(TicketContext);
  // State for title and price
  const [titleAndPrice, setTitleAndPrice] = useState({
    title: null,
    price: null,
  });
  // State for value
  const [value, setValue] = useState("");

  // State for disabled - set this to true if sum of all visitors is 9 (max 9 visitors per one ticket)
  const [disabled, setDisabled] = useState(false);

  useEffect(
    () => {
      getTitleAndPrice();
      getValue();
    },
    [visitors],
    []
  );

  //get value
  const getValue = () => {
    visitors.forEach((item) => {
      item.id === id && setValue(item.value);
    });
  };

  // get title and price
  const getTitleAndPrice = () => {
    titlesAndPrices.forEach((item) => {
      item.id === id &&
        setTitleAndPrice({ title: item.title, price: item.price });
    });
  };

  //minus
  const minus = () => {
    value !== 0 && removeVisitor(id);
  };

  //plus
  const plus = () => {
    if (!disabled) {
      if (id === "disabled") {
        value < 2 && addVisitor(id);
      } else if (id === "under11") {
        value < 6 && addVisitor(id);
      } else {
        value < 9 && addVisitor(id);
      }
    }
  };

  return (
    <div className="w-[48%] my-3 flex items-center justify-between">
      {/* Title */}
      <h1>{titleAndPrice.title}</h1>
      {/* Price and add or remove visitors */}
      <div className="flex items-center justify-center text-md font-bold">
        <h1 className="mr-2">{titleAndPrice.price}€</h1>
        <div className="w-[110px] flex items-center justify-center">
          <FaMinus
            className={`w-[30px] h-[30px] p-2 bg-neutral-400 text-white ${
              value === 0 ? "cursor-not-allowed" : "cursor-pointer"
            } rounded-tl-md rounded-bl-md`}
            onClick={minus}
          />
          <input
            className="w-[50px] h-[30px] bg-neutral-300 text-center focus:outline-0"
            type="text"
            disabled={true}
            value={value}
          />
          <FaPlus
            className={`w-[30px] h-[30px] p-2 bg-neutral-600 text-white ${
              id === "disabled"
                ? value >= 2
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
                : id === "under11"
                ? value >= 6
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
                : value >= 9
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } rounded-tr-md rounded-br-md  ${
              disabled && "cursor-not-allowed"
            }  `}
            onClick={plus}
          />
        </div>
      </div>
    </div>
  );
};

export default AddRemoveVisitor;
