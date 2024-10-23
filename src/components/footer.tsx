import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Left section: EState information */}
          <div className="sm:w-1/2">
            <p className="text-lg font-semibold">EState</p>
            <p className="text-slate-300 mt-1">
              A great platform to buy, sell and rent your properties without any
              agent or commissions.
            </p>
          </div>

          {/* Right section: Contact Us */}
          <div className="sm:w-1/2 sm:text-right">
            <p className="text-lg font-semibold">Contact Us</p>
            <address className="text-slate-300 mt-1">
              <FaMapMarkerAlt className="inline-block w-5 h-5 mt-0.5" />
              135 Walnut Street,
              <br /> Yet Another City USA
            </address>
          </div>
        </div>
        <p className="text-center text-slate-400 mt-10">
          © 2024 EState. Design by The Brave Coders.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
