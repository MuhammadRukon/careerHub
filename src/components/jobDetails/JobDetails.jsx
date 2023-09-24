import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getJobApplication,
  saveJobApplication,
} from "../../utility/localStorage";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const [appliedIds, setAppliedIds] = useState([]);

  useEffect(() => {
    setAppliedIds(getJobApplication());
  }, []);

  const handleApply = () => {
    saveJobApplication(Number(id));
    setAppliedIds(getJobApplication());
    const exists = appliedIds.find((appliedId) => appliedId === Number(id));
    if (exists) {
      toast.error("Already Applied", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Successfully Applied", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const job = jobs.find((job) => job.id === Number(id));
  const {
    job_description,
    job_responsibility,
    experiences,
    salary,
    job_title,
    contact_information,
    educational_requirements,
  } = job;

  return (
    <>
      <div className="bg-blue-100">
        <h2 className="pb-[120px] pt-[90px] text-4xl text-center font-bold">
          Job {id} Details
        </h2>
      </div>
      <div className="grid md:grid-cols-6 container gap-4 py-[50px] mx-auto">
        <div className=" col-span-4 leading-8 ">
          <div className="flex flex-col gap-5  ">
            <p>
              <span className="font-bold">Job Description: </span>
              {job_description}
            </p>
            <p>
              <span className="font-bold">Job Responsibity: </span>
              {job_responsibility}
            </p>
            <p>
              <span className="font-bold">Educational Requirements: </span>
              <br />
              {educational_requirements}
            </p>
            <p>
              <span className="font-bold">Experieces:</span>
              <br />
              {experiences}
            </p>
          </div>
        </div>
        <div className="col-span-2 ml-14">
          <div className="bg-blue-200 rounded-lg  p-8">
            <span className="font-bold">Job Details</span>
            <hr className="border border-blue-300 my-5" />
            <p>
              <span className="font-bold">Salary: </span>
              {salary}
            </p>

            <p className="my-2">
              <span className="font-bold">Job Title: </span>
              {job_title}
            </p>
            <span className="font-bold mt-8 block">Contact Information</span>
            <hr className="border border-blue-300 my-5" />
            <p>
              <span className="font-bold">Phone: </span>
              {contact_information.phone}
            </p>
            <p className="my-2">
              <span className="font-bold ">Email: </span>
              {contact_information.email}
            </p>
            <p className="my-2">
              <span className="font-bold ">Address: </span>
              {contact_information.address}
            </p>
          </div>
          <button
            onClick={handleApply}
            className="gradient w-full mt-6 py-3 font-semibold rounded-lg text-white"
          >
            Apply now
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default JobDetails;
