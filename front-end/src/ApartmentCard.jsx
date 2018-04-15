import React, { Component } from "react";
import "./css/ApartmentCard.css";

export default class ApartmentCard extends Component {
  render() {
    return (
      <div className="col-4 mt-3">
        <div
          className="card"
          onClick={() =>
            window.open(this.props.apartment.PropertyUrl, "_blank")
          }
        >
          <img
            className="card-img-top img"
            src={this.props.apartment.PropertyPhotoUrl}
            alt={this.props.apartment.PropertyName}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.apartment.PropertyName}</h5>
            <div className="row">
              <div className="col-6">
                <p className="card-text mb-1">
                  <i className="fa fa-map-marker mr-1" />
                  {this.props.apartment.Listing.Address.City},{" "}
                  {this.props.apartment.Listing.Address.State}
                </p>
              </div>
              <div className="col-6">
                <p className="card-text text-right">
                  {this.props.apartment.RentFormat.Rents}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="card-text mb-1">
                  <i className="fa fa-bed mr-1" />
                  {this.props.apartment.RentFormat.Beds}
                </p>
              </div>
              <div className="col-6">
                <p className="card-text text-right">
                  <i className="fa fa-bath mr-1" />
                  {this.props.apartment.RentFormat.Beds}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="card-text mb-1">
                  <i className="fa fa-arrows-alt mr-1" />
                  {this.props.apartment.RentFormat.Beds}
                </p>
              </div>
              <div className="col-6">
                <p className="card-text text-right">
                  <i className="fa fa-star mr-1" />
                  <i className="fa fa-star mr-1" />
                  <i className="fa fa-star mr-1" />
                  <i className="fa fa-star mr-1" />
                  <i className="fa fa-star mr-1" />
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <i className="fas fa-paw mr-2" />
            <i className="fas fa-wheelchair mr-2" />
            <i className="fae-shirt mr-2" />
            <i className="fas fa-couch mr-2" />
            <i className="fas fa-tint mr-2" />
            <i className="fas fa-car mr-2" />
            <i className="fas fa-caret-square-up mr-2" />
            <i className="fab fa-github-alt mr-2" />
            <i className="fas fa-coffee mr-2" />
            <i className="fas fa-snowflake mr-2" />
            <i className="fae-halter mr-2" />
          </div>
        </div>
      </div>
    );
  }
}
