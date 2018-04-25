import React, { Component } from "react";
import "./css/ApartmentCard.css";

export default class ApartmentCard extends Component {
  getNumStars(num) {
    let stars = [];
    for (var i = 0; i < num; i++) {
      stars.push(<i className="fa fa-star mr-1" key={i} />);
    }
    return stars;
  }

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3">
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
                  {this.getNumStars(this.props.apartment.Listing.Rating)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
