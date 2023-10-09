import React, { useState } from "react";
import JobListing from "./JobListing";
import allJobs from "../assets/json/allJobs";

const TotalJobs = () => {
  const [searchValue, setSearchValue] = useState("");

  const FilteredJobs = allJobs.filter(
    (job) =>
      job.company.toLowerCase().includes(searchValue.toLowerCase()) ||
      job.position.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (vendor) => {
    setSearchValue(vendor.target.value);
  };
  return (
    <div>
      <section>
        <div className="search-input container">
          <input
            vlaue={searchValue}
            type="text"
            onChange={handleSearchChange}
            placeholder="Search Jobs"
          />
        </div>
      </section>
      {FilteredJobs.map((jobs, index) => (
        <JobListing
          role={jobs.position}
          company={jobs.company}
          postedDay={jobs.postedAt}
          type={jobs.contract}
          logo={jobs.logo}
          ThisJobIsNew={jobs.new}
          TheNewJob={jobs.new}
          TheFeaturedJob={jobs.featured}
          languages={jobs.languages}
          location={jobs.location}
        />
      ))}
    </div>
  );
};

export default TotalJobs;
