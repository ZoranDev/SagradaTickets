// Router DOM
import { Link } from "react-router-dom";

// Icons
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full py-5 px-10 bg-red-600 flex items-start justify-between text-white">
        {/* Tickets */}
        <div className="mr-10">
          <h1 className="text-xl mb-3">Sagrada familia tickets</h1>
          <Link
            to="/tickets"
            children={<p className="textx-lg hover:underline">Get tickets</p>}
          />
        </div>
        {/* Social */}
        <div className="mr-10">
          <h1 className="text-xl mb-3">Social</h1>
          <div className="flex items-center justify-center">
            <a
              href="https://www.facebook.com/BasilicadelaSagradaFamilia/"
              target={"_blank"}
            >
              <FaFacebook className="w-[20px] h-[20px] mr-2 cursor-pointer hover:scale-[1.2] transition-transform duration-400" />
            </a>
            <a
              href="https://www.instagram.com/basilicasagradafamilia/?hl=en"
              target={"_blank"}
            >
              <FaInstagram className="w-[20px] h-[20px] cursor-pointer hover:scale-[1.2] transition-transform duration-400" />
            </a>
          </div>
        </div>
      </div>
      <p className="w-full px-10 py-5 text-center ">
        Thank you for visiting our website sagradafamilia-tickets.com
        Reservations and E-tickets made on our website are authentic for the
        official tour. We also provide customer care that is available for 24
        hours, every day, even on holidays. Note that we are not affiliated with
        any government entities and we are not the official ticket office.
        Ticket price exceeds face value. We are a private third party Booking
        and Customer Service company. Our goal is to provide you with 100%
        customer satisfaction.
      </p>
    </div>
  );
};

export default Footer;
