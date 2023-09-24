import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`jobs.json`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-5xl text-center">Featured Jobs</h2>
      <p className="text-center mt-4 text-lg">
        Explore thousands of job opportunities with all the information you
        need. Its your future.
      </p>
      <div className="grid grid-cols-2 gap-8 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job} key={job.id} />
        ))}
      </div>
      {/* {dataLength !== jobs.length ? (
        <div className="text-center mb-10">
          <button
            className="btn gradient text-white text"
            onClick={() => setDataLength(jobs.length)}
          >
            Show All Jobs
          </button>
        </div>
      ) : (
        ""
      )} */}
      <div
        className={
          dataLength === jobs.length
            ? "text-center mb-10 hidden"
            : "text-center mb-10"
        }
      >
        <button
          className="btn gradient text-white text"
          onClick={() => setDataLength(jobs.length)}
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
