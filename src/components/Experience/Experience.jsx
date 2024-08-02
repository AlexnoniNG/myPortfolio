import React from "react";
import "./Experience.css";
import kachitech from "../../assets/kachitech.png";
import fiverr from "../../assets/fiverr-logo.png";

const Experience = () => {
  return (
    <>
      {/* Experience card */}
      <div className="experience-container">
        <div className="experience-card">
          <div className="card-text">
            {/* Experience Title */}
            <h1 className="mb-3 fw-bold">Work Experience</h1>

            {/* Expereince inner 1 */}
            <div className="experience-inner">
              <small>2021 - 2024</small>
              <div className="flex-container mt-3">
                {/* img */}
                <div className="experience-img">
                  <img src={fiverr} alt="" style={{ width: "30px" }} />
                </div>
                {/* img ends */}

                {/* Text */}
                <div className="experience-text">
                  <h5>Fiverr Freelancer</h5>
                  <p className="mt-0 text-nowrap">Web Developer</p>
                </div>
                {/* text ends */}
              </div>
            </div>

            {/* Experience inner ends */}
            <div className="experience-inner">
              <small>2024 - 2025</small>
              <div className="flex-container mt-3">
                {/* img */}
                <div className="experience-img">
                  <img src={kachitech} alt="" style={{ width: "30px" }} />
                </div>
                {/* img ends */}

                {/* Text */}
                <div className="experience-text">
                  <h5>KachiTech Intern</h5>
                  <p className="mt-0 text-nowrap">Fullstack Developer</p>
                </div>
                {/* text ends */}
              </div>
            </div>

            {/* Experience inner ends */}
          </div>
        </div>
      </div>
      {/* Experience ends */}
    </>
  );
};

export default Experience;
