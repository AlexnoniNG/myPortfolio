import React from "react";
import "./ProfileCard.css";
import profile from "../../assets/profile.png";

const ProfileCard = () => {
  return (
    <>
      <div className="Profile-container">
        <div className="Profile-card">
          <div className="Profile-card-image">
            <img src={profile} width="200px" alt="" />
          </div>
          {/* Text starts */}
          <div className="card-text">
            <div className="card-text-inner">
              <h2>Alex Okor</h2>{" "}
              <span>
                <i class="fas fa-crown"></i>
              </span>
            </div>
            <p>
              A Passionate{" "}
              <span className="full-stack">Full Stack Developer</span> having{" "}
              <span className="full-stack">12 years</span> of experiences over
              24+ Country Worldwide.
            </p>
          </div>
          {/* Text ends */}

          {/* Contact  */}
          <div className="contact-container">
            <div className="contact-inner-contact">
              <a className="call-btn text-decoration-none">
                <span className="contact-icon">
                  <i class="fas fa-headset"></i>
                </span>{" "}
                Book A Call
              </a>
              <a className="email-btn text-decoration-none">
                <span className="contact-icon">
                  <i class="fas fa-clone"></i>
                </span>{" "}
                Copy Email
              </a>
            </div>
          </div>
          {/* Contact  Ends*/}

          {/* Social Media icons */}
          <div className="socials-icon mt-5 p-3">
            <a href="https://facebook.com">
              <i class="bi bi-facebook fs-3 border p-2 text-secondary rounded-2"></i>
            </a>
            <a href="https://facebook.com">
              <i class="bi bi-instagram ms-3 fs-3 border p-2 text-secondary rounded-2"></i>
            </a>
            <a href="https://facebook.com">
              <i class="bi bi-github ms-3 fs-3 border p-2 text-secondary rounded-2"></i>
            </a>
            <a href="https://facebook.com">
              <i class="bi bi-twitter-x ms-3 fs-3 border p-2 text-secondary rounded-2"></i>
            </a>
          </div>
          {/* Social Media icons Ends*/}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
