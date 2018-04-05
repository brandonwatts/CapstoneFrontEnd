import React from "react";
import "./css/LoadingAnimation.css";

const LoadingAnimation = () => (
  <section className="popular-deals section bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>Search Results</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 justify-content-center">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube" />
            <div className="sk-cube2 sk-cube" />
            <div className="sk-cube4 sk-cube" />
            <div className="sk-cube3 sk-cube" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LoadingAnimation;
