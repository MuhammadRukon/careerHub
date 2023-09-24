import user from "../../assets/images/user.png";
import "../../App.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-16">
          <div className="w-2/6">
            <h1 className="text-7xl leading-snug font-bold ">
              One Step Closer To Your
              <span className="gradient-text block">Dream Job</span>
            </h1>
            <p className="w-[86%] leading-7 mt-3  text-[#757575]">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>

            <Link to="/jobs" className="btn gradient text-white mt-5">
              Get Started
            </Link>
          </div>
          <div className="-mr-20">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
