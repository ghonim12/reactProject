import React from "react";
import style from "../Home/home.module.scss";

export default function About() {
  return <>
      <div
        className={`${style.home} h-100 text-white d-flex justify-content-center align-items-center`}
      >
        <div className="translate-middle-y">
          <h1 className="text-center text-uppercase fw-bold">
            About Component
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </h1>
          <div className="row justify-content-center mt-5">
            <div className="col-md-4">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  
}
