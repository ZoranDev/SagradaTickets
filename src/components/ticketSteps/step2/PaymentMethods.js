import React from "react";
// Icons
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <div className="w-full">
      <h1 className="mb-2 w-full text-lg text-center">
        Select the payment method
      </h1>
      <div className="w-full flex justify-between items-start">
        <div className="w-[40%] flex items-center justify-left">
          <div className="w-[60px] h-[60px] mr-4 rounded-full bg-red-500 border-[15px] border-neutral-200 flex items-center justify-center">
            <div className="w-[25px] h-[25px] rounded-full bg-red-500 border-[5px] border-neutral-200 "></div>
          </div>
          <div>
            <h2>Credit/debit card</h2>
            {/* Cards */}
            <div className="flex items-center justify-left">
              <FaCcMastercard className="w-[40px] h-[30px]" />
              <FaCcVisa className="w-[40px] h-[30px] ml-1 " />
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <h1 className="mb-2 text-xl">Card payment</h1>
          <p className="text-md">
            Once you select 'Pay', you will be redirected automatically to the
            bank platform. Follow the payment instructions and the purchase
            process will be finalized
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
