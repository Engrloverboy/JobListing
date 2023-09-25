import React from "react";
import JobListing from "./JobListing";
import allJobs from "../assets/json/allJobs";

const TotalJobs = () => {
  return (
    <div>
      {allJobs.map((jobs, index) => (
        <JobListing
          role={jobs.position}
          company={jobs.company}
          postedDay={jobs.postedAt}
          type={jobs.contract}
          logo={jobs.logo}
          ThisJobIsNew={jobs.new}
          languages={jobs.languages}
          location={jobs.location}
        />
      ))}
    </div>
  );
};

export default TotalJobs;
