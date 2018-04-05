import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./css/Jumbotron.css";

const Jumbotron = props => (
  <section className="hero-area bg-1 text-center overly">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="content-block">
            <h1>Search for Listings Near You</h1>
            <p>
              Join the millions who buy and sell from each other
              <br />
              everyday in local communities around the world
            </p>
          </div>
          <SearchBar loadResults={props.loadResults} />
        </div>
      </div>
    </div>
  </section>
);

export default Jumbotron;
