import React from "react";

const JobListing = (props) => {
  var languages = ["HTML", "CSS", "JavaScript"];
  const ThisJobIsNew = true;
  const useBorder = "borders";
  return (
    <section>
      <section
        className={`eachjob container ${props.ThisJobIsNew ? "borders" : ""}`}
      >
        <div className="wrapper">
          <div className="logo_text">
            <img
              src={props.logo}
              // src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              // alt=""
            />

            <div>
              <h4>
                {props.company}{" "}
                <span className={`${props.TheNewJob ? "new" : " "}`}>NEW!</span>{" "}
                <span className={`${props.TheFeaturedJob ? "feature" : " "}`}>
                  FEATURED
                </span>
              </h4>
              <h5>{props.role}</h5>
              <h6>
                <span className="cart_top">{props.postedDay}</span> .{" "}
                <span className="cart_left">{props.type}</span> .
                <span className="cart_right">{props.location}</span>
              </h6>
            </div>
          </div>

          <ul className="stacks">
            {props.languages.map((language, index) => (
              <li>{language}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default JobListing;
