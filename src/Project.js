import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.webp";
import Project2 from "./img/portfolio-2.webp";
import Project3 from "./img/portfolio-3.jpg";
import Project4 from "./img/pro4.webp";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">There are Some of my latest project.</p>
        <p className="heading p__color">
          I am working on now a days as a backend developer.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Positive Vibes</h5>
                <h4 className="project__text">
                  Positive Vibes - Quotes, Meditation & Life Tips
                </h4>
                <a
                  href="https://play.google.com/store/apps/details?id=com.positivevibes.app"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Poitive Challange App</h5>
                <h4 className="project__text">
                  Poitive Challenge App - Accept Challenge , Get Quotes Stay
                  Positive
                </h4>
                <a
                  href="https://play.google.com/store/apps/details?id=com.positivitychallengeapp.app"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Idillionaire App</h5>
                <h4 className="project__text">
                  The Idillionaire App is an extension of the social media
                  phenomenon that has changed the lives of millions all over the
                  world in relation to spiritual growth and inner development.
                </h4>
                <a
                  href="https://play.google.com/store/apps/details?id=com.idillionaire.app"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
