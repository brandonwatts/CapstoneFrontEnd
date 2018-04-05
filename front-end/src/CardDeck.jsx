import React, { Component } from "react";
import ApartmentCard from "./ApartmentCard.jsx";

export default class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: null
    };
  }

  componentDidMount() {
    if (this.props.api_response) {
      var api = this.props.api_response;
      var api_apartments = api.slice(0, 9);
      this.setState({
        apartments: api_apartments
      });
    }
  }

  isEmpty(arg) {
    for (var item in arg) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Search Results</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.apartments || !this.isEmpty(this.state.apartments) ? (
              this.state.apartments.map(a => (
                <ApartmentCard key={a.Listing.ListingKey} apartment={a} />
              ))
            ) : (
              <h2 className="col-12 text-center">Sorry. No Results.</h2>
            )}
          </div>
        </div>
      </section>
    );
  }
}
