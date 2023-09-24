import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../appliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

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
  }, []);
  console.log(appliedJobs);
  return (
    <>
      <div className="bg-blue-100">
        <h2 className="pb-[120px] pt-[90px] text-4xl text-center font-bold">
          Applied Jobs
        </h2>
      </div>
      {appliedJobs.map((job, index) => (
        <AppliedJob key={index} job={job} />
      ))}
    </>
  );
};

export default AppliedJobs;
