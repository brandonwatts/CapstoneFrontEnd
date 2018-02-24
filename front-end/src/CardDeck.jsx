import React, {Component} from "react";
import ApartmentCard from "./ApartmentCard.jsx"

export default class CardDeck extends Component {

  render() {
    return (<section className="popular-deals section bg-gray" style={{
        paddingTop: '100px'
      }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Search Results</h2>
            </div>
            <div className="card-deck">
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
};
