import React, { Component } from "react";
import ApartmentCard from "./ApartmentCard.jsx";

export default class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: []
    };
  }

  componentDidMount() {
    if (this.props.api_response !== "") {
      var api = JSON.parse(this.props.api_response);
      // console.log(api);
      var api_apartments = api.slice(0, 9);
      // console.log(api_apartments);
      this.setState({
        apartments: api_apartments
      });
    }
  }

  render() {
    return (
      <section
        className="popular-deals section bg-gray"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Search Results</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.apartments.map(a => (
              <ApartmentCard key={a.Listing.ListingKey} apartment={a} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
