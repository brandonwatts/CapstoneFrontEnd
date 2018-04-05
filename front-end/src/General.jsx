import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import Footer from "./Footer.jsx";
import Table from "./Table.js";
import NavBar from "./NavBar.jsx";

export default class General extends Component {
  render() {
    return (
      <div>
        <NavBar changeCurrentPage={this.props.changeCurrentPage} />
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
                <SearchBar loadResults={this.props.search} apiType="General" />
              </div>
            </div>
          </div>
        </section>
        <Table api_response={this.props.api_response} />
        <Footer />
      </div>
    );
  }
}
