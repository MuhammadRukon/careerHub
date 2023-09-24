import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  console.log(job);
  const {
    id,
    job_type,
    location,
    remote_or_onsite,
    company_name,
    salary,
    job_title,
    logo,
  } = job;
  return (
    <div className="container mx-auto">
      <div className="card py-5 px-8 my-8 flex-row items-center border border-blue-100 rounded-md">
        <div className="bg-gray-100 py-[70px] w-[200px] flex justify-center">
          <img src={logo} alt="Shoes" className="px-4" />
        </div>
        <div className="card-body items-start">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-2">
            <p className="border border-[blue] px-4 py-[3px] rounded-md">
              {remote_or_onsite}
            </p>
            <p className="border-[1px] border-[blue] px-4 py-[3px] rounded-md">
              {job_type}
            </p>
          </div>
          <div className="flex gap-2 justify-start">
            <p>{location}</p>
            <p>salary: {salary}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
  job: PropTypes.object,
};
export default AppliedJob;
