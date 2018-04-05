/* eslint jsx-a11y/href-no-hash: "off"*/
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand">SmartSearch</a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a
                    className="nav-item nav-link active"
                    href="#"
                    onClick={x => this.props.changeCurrentPage("General")}
                  >
                    General
                  </a>
                  <a
                    className="nav-item nav-link"
                    href="#"
                    onClick={x => this.props.changeCurrentPage("Apartments")}
                  >
                    Costar
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
