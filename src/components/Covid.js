import React from "react";

const Covid = () => {
  return (
    <div className="w-full my-5 px-10 py-10 sm:px-20 md:px-40">
      <h1 className="text-4xl mb-2">Covid 19 Safety measures</h1>
      <h2 className="text-xl mb-6">
        In order to ensure safety visitors should follow this requirements:
      </h2>
      <ul className="list-disc text-xl">
        <li>All visitors must wear a mask</li>
        <li>Visitors must keep safe distance of 2 metres from others</li>
        <li>
          Visitors will be provided with hand sanitisers at various points along
          the tour. We recommend using it before and after going through
          security.
        </li>
        <li>
          We ask visitors not to bring bags or rucksacks in order to speed up
          the process.
        </li>
        <li>
          In order to ensure visitors’ safety, some spaces will be closed as it
          is not possible to guarantee proper distancing: the Schools building,
          the museum, the towers and the cloister of Our Lady of the Rosary.
        </li>
        <li>
          Visits must follow the route in one direction only, entering on Carrer
          de la Marina (Nativity façade) and exiting on Carrer de Sardenya
          (Passion façade).
        </li>
      </ul>
    </div>
  );
};

export default Covid;
