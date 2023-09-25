import React from "react";
import JobListing from "./components/JobListing";
import TopBackground from "./components/TopBackground";
import allJobs from "./assets/json/allJobs";
import TotalJobs from "./components/TotalJobs";

const App = () => {
  return (
    <div className="App">
      <TopBackground />
      <TotalJobs />
</div>
      
  );
};

export default App;
