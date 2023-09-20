import React from "react";

const JobListing = () => {
  return (
    <section className="eachjob container">
      <div className="wrapper">
        <div className="logo_text">
          <img
            src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt=""
          />

          <div>
            <h4>
              Netflix <span className="new">NEW!</span>{" "}
              <span className="feature">FEATURED</span>
            </h4>
            <h5>Senior Frontend Developer</h5>
            <h6>
              <span className="cart_top">1 day</span> . <span className="cart_left">Full Time</span> .<span className="cart_right">USA only</span>
            </h6>
          </div>
        </div>

        <ul className="stacks">
          <li>Senior</li>
          <li>HTML</li>
          <li>Frontend</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </div>
    </section>
  );
};

export default JobListing;
