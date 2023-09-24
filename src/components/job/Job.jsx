import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    location,
    job_title,
    job_type,
    company_name,
    remote_or_onsite,
    salary,
  } = job;
  return (
    <div className="card border border-blue-100 rounded-md">
      <div className="px-8 pt-8">
        <img src={logo} alt="Shoes" />
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
        <div className="card-actions">
          <Link to={`/jobs/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
