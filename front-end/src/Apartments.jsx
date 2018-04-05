import React, { Component } from "react";
import Jumbotron from "./Jumbotron.jsx";
import LoadingAnimation from "./LoadingAnimation.jsx";
import Footer from "./Footer.jsx";
import CardDeck from "./CardDeck.jsx";
import NavBar from "./NavBar.jsx";

export default class Apartments extends Component {
  render() {
    return (
      <div>
        <NavBar
          changeCurrentPage={this.props.changeCurrentPage}
          current_page="Apartments"
        />
        <Jumbotron loadResults={this.props.search} />
        {this.props.isLoading ? (
          <LoadingAnimation />
        ) : (
          <CardDeck api_response={this.props.api_response} />
        )}
        ;
        <Footer />
      </div>
    );
  }
}
