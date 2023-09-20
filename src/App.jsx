import React from "react";
import JobListing from "./components/JobListing";
import TopBackground from "./components/TopBackground";

const App = () => {
  return (
    <div className="App">
      <TopBackground />
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
    </div>
  );
};

export default App;
