import { FaCalendar } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="mt-5 mb-5 w-[1200px] mx-auto rounded-lg bg-black text-white p-12 lg:flex justify-evenly gap-3">
        <div className="flex items-center gap-4">
          <div className="text-3xl text-orange-400">
            <FaCalendar />
          </div>
          <div>
            <p className="text-2xl font-semibold">We are open monday-friday</p>
            <h3 className="text-3xl font-bold">7.00am - 9.00pm</h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl text-orange-400">
            <FaPhone />
          </div>
          <div>
            <p className="text-2xl font-semibold">Have a question?</p>
            <h3 className="text-3xl font-bold">+947435753</h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl text-orange-400">
            <FaHome />
          </div>
          <div>
            <p className="text-2xl font-semibold">MarketPlace Address</p>
            <h3 className="text-3xl font-bold">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
