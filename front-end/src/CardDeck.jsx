import React, {Component} from "react";
import ApartmentCard from "./ApartmentCard.jsx"

export default class CardDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {
        apartments : []
    };
  }

  componentWillReceiveProps(nextProps){
    var api = JSON.parse(nextProps.api_response)
    var api_apartments = api.apartments.slice(0,9)
    this.setState({
      apartments : api_apartments
    });
  }

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
          </div>
        </div>
        <div className="row">
              {this.state.apartments.map(a => <ApartmentCard apartment={a}/>)}
        </div>
      </div>
    </section>);
  }
};
