import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../appliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [sort, setSort] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleJobFilter = (filter) => {
    setSort(filter);
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (appliedJob) => appliedJob.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (appliedJob) => appliedJob.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
    setIsOpen(!setIsOpen);
  };
  //
  //
  useEffect(() => {
    const storedJobIds = getJobApplication();
    const jobsApplied = [];
    for (const id of storedJobIds) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }
    setAppliedJobs(jobsApplied);
    setDisplayJobs(jobsApplied);
  }, []);

  return (
    <>
      <div className="bg-blue-100">
        <h2 className="pb-[120px] pt-[90px] text-4xl text-center font-bold">
          Applied Jobs
        </h2>
      </div>

      <div className="mx-auto container">
        <div className="text-right">
          <button
            className="btn z-10 list-none bg-gray-200 w-40 relative rounded-lg inline-block text-center my-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {sort}
            <ul
              className={`${
                !isOpen ? "hidden" : ""
              } absolute left-0 top-14 menu bg-base-100 border rounded-lg w-full`}
            >
              <li onClick={() => handleJobFilter("All")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobFilter("Remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobFilter("Onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </button>

          {displayJobs.map((job, index) => (
            <AppliedJob key={index} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
