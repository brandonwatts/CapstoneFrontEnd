import React, {Component} from "react";

export default class ApartmentCard extends Component {

  render() {
    return (
      <div className="col-4">
      <div className="card mt-3">
      <img className="card-img-top img" src={this.props.apartment.PropertyPhotoUrl} alt="Card image cap"/>
      <div className="card-block">
        <h4 className="card-title">{this.props.apartment.PropertyName}</h4>
        <p className="card-text mb-0"><i className="fa fa-map-marker mr-1"></i>{this.props.apartment.Listing.Address.City}, {this.props.apartment.Listing.Address.State}</p>
      </div>
    </div>
  </div>);
  }
};
