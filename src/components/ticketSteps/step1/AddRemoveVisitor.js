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
    sumOfVisitors,
  } = useContext(TicketContext);

  // State for title and price
  const [titleAndPrice, setTitleAndPrice] = useState({
    title: null,
    price: null,
  });

  // State for value
  const [value, setValue] = useState("");

  // State for left cursor and right cursor
  const [cursors, setCursors] = useState({
    left: "cursor-pointer",
    right: "cursor-pointer",
  });

  // State for disabled - set this to true if sum of all visitors is 9 (max 9 visitors per one ticket)
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getTitleAndPrice();
    getValue();
  }, [visitors]);

  useEffect(() => {
    getCursors();
  }, [value]);

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

  // getCursors
  const getCursors = () => {
    if (value === 0) {
      setCursors({ ...cursors, left: "cursor-not-allowed" });
      return;
    }
    if (
      value === 9 ||
      (id === "disabled" && value === 2) ||
      (id === "under11" && value === 6) ||
      sumOfVisitors === 9
    ) {
      setCursors({ left: "cursor-pointer", right: "cursor-not-allowed" });
      setDisabled(true);
      return;
    }
    setDisabled(false);
    setCursors({ left: "cursor-pointer", right: "cursor-pointer" });
  };

  //minus function
  const minus = () => {
    value !== 0 && removeVisitor(id);
  };

  //plus function
  const plus = () => {
    !disabled && addVisitor(id);
  };

  return (
    <div className="w-full my-3 flex items-center justify-between sm:w-[48%]">
      {/* Title */}
      <h1>{titleAndPrice.title}</h1>
      {/* Price and add or remove visitors */}
      <div className="ml-2 flex items-center justify-center text-md font-bold">
        <h1 className="mr-2">{titleAndPrice.price}€</h1>
        <div className="w-[110px] flex items-center justify-center">
          <FaMinus
            className={`w-[30px] h-[30px] p-2 bg-neutral-400 text-white ${cursors.left} rounded-tl-md rounded-bl-md`}
            onClick={minus}
          />
          <input
            className="w-[50px] h-[30px] bg-neutral-300 text-center focus:outline-0"
            type="text"
            disabled={true}
            value={value}
          />
          <FaPlus
            className={`w-[30px] h-[30px] p-2 bg-neutral-600 text-white ${cursors.right} rounded-tr-md rounded-br-md`}
            onClick={plus}
          />
        </div>
      </div>
    </div>
  );
};

export default AddRemoveVisitor;
