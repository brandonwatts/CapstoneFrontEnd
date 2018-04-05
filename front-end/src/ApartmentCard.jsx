import React, { Component } from "react";
import "./css/ApartmentCard.css";

export default class ApartmentCard extends Component {
  render() {
    return (
      <div className="col-4  mt-3">
        <div className="card">
          <img
            className="card-img-top img"
            src={this.props.apartment.PropertyPhotoUrl}
            alt={this.props.apartment.PropertyName}
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.apartment.PropertyName}</h4>
            <p className="card-text mb-0">
              <i className="fa fa-map-marker mr-1" />
              {this.props.apartment.Listing.Address.City},{" "}
              {this.props.apartment.Listing.Address.State}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
