// router dom
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-1 py-12 flex flex-col justify-start items-center lg:px-24">
      {/* Image and text section */}
      <div className="w-full mb-5 flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between lg:mb-0">
        {/* Images */}
        <div className="w-full min-w-[290px] max-w-[500px] mb-5 p-2 lg:w-[40%] lg:p-0 lg:mb-0 ">
          <img src="/sagrada.jpg" alt="Sagrada familia" />
          {/* Restrictions */}
          <div className="w-full mt-5 flex items-center justify-between">
            <img
              src="https://sagradafamilia-tickets.com/wp-content/uploads/2019/12/no-speak.png"
              alt="talk"
            />
            <img
              src="https://sagradafamilia-tickets.com/wp-content/uploads/2019/12/no-food.png"
              alt="food"
            />
            <img
              src="https://sagradafamilia-tickets.com/wp-content/uploads/2019/12/no-animals.png"
              alt="pets"
            />
          </div>
        </div>
        {/* Text */}
        <div className="w-full min-w-[290px] lg:ml-10 p-2 lg:w-[70%] lg:p-0">
          <h1 className="text-5xl mb-4">Sagrada familia</h1>
          <h2 className="text-2xl mb-4">
            Fast track entrance to the Sagrada Família. Enter Gaudí’s world of
            fantasy and geometry, surprise yourself and learn with the audio
            guide.​
          </h2>
          <p className="text-lg mb-2 text-justify">
            A visit to la Sagrada Família is must-see on your to do list. It is
            one of the most iconic and inspiring buildings - that is still under
            construction - in Barcelona, Spain. La Sagrada Família is unique in
            its conception and architecture, designed by the great Antoni Gaudí,
            a Catalan architect. If you enjoy exploring at your own pace, we
            recommend that you book a la Sagrada Família Basic Ticket for your
            trip. This ticket allows you access entrance to la Sagrada Família;
            you get to admire all three facades, the interior, the museum and
            the schools that were designed by Gaudí.
          </p>
          <p className="text-lg mb-2 text-justify">
            Since the temple receives millions of visitors every year and it is
            in high demand for tourists, we highly recommend that you book your
            tickets online in advance to avoid long queues and waiting time.
            Also, the tickets work with time slots; when you purchase your
            ticket, you will be requested to choose a date a time slot for your
            visit. But do not worry, once you are inside you will be able to
            stay as long as you wish to.
          </p>
          <p className="text-lg mb-2 text-justify">
            La Sagrada Família Basic Ticket will only grant you access to the
            temple. It does not include entrance to the towers; for this option
            we have other ticket choices available as well.
          </p>
          <p className="text-lg mb-2 text-justify">
            There are some considerations to keep in mind when you visit la
            Sagrada Família; some areas of the temple are under construction, so
            they may be off limits during your visit; children under sixteen
            years old are required to be accompanied by an adult; dress
            appropriately to enter, it is still a church. Please keep these
            notes in mind when planning your trip.
          </p>
        </div>
      </div>

      {/* Button section */}
      <Link
        to="/tickets"
        children={
          <button className="my-5 px-20 py-5 bg-red-600 text-white text-xl rounded-3xl cursor-pointer shadow-[0_0_0_0_rgba(219,92,92)] hover:shadow-[0_0_0_20px_transparent] hover:transition-shadow hover:duration-[600ms]  active:scale-[0.98]">
            Get Tiquets
          </button>
        }
      />
    </div>
  );
};

export default Home;
