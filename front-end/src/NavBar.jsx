/* eslint jsx-a11y/href-no-hash: "off"*/
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand">
                <div>
                  <h3>SmartSearch</h3>
                </div>
              </a>
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
                <div className="navbar-nav ml-auto">
                  <a
                    className={
                      this.props.current_page === "General"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    href="#"
                    onClick={x => this.props.changeCurrentPage("General")}
                  >
                    General
                  </a>
                  <a
                    className={
                      this.props.current_page === "Apartments"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    href="#"
                    onClick={x => this.props.changeCurrentPage("Apartments")}
                  >
                    Costar
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
