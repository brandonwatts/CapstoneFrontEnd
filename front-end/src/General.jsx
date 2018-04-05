import React, { Component } from "react";
import Footer from "./Footer.jsx";
import Table from "./Table.jsx";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";

export default class General extends Component {
  render() {
    return (
      <div>
        <NavBar
          changeCurrentPage={this.props.changeCurrentPage}
          current_page="General"
        />
        <Jumbotron loadResults={this.props.search} />
        <Table api_response={this.props.api_response} />
        <Footer />
      </div>
    );
  }
}
