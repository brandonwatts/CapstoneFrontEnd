import React, { Component } from "react";
import "./css/Table.css";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min_sqft: "",
      max_sqft: "",
      min_bdrm: "",
      max_bdrm: "",
      min_price: "",
      max_price: "",
      price_type: "",
      zip_code: "",
      address: "",
      city: "",
      us_state: "",
      build_year: "",
      dog_friendly: null,
      cat_friendly: null,
      has_pool: null,
      has_elevator: null,
      has_fitness_center: null,
      has_wheelchair_access: null,
      has_dishwasher: null,
      has_air_conditioning: null,
      has_parking: null,
      star_rating: "",
      is_furnished: null,
      has_laundry_facilities: null,
      property_type: "",
      search_radius: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.api_response) {
      this.setState({
        min_sqft: nextProps.api_response.min_sqft,
        max_sqft: nextProps.api_response.max_sqft,
        min_bdrm: nextProps.api_response.min_bed,
        max_bdrm: nextProps.api_response.max_bed,
        min_price: nextProps.api_response.min_price,
        max_price: nextProps.api_response.max_price,
        zip_code: nextProps.api_response.zip_code,
        address: nextProps.api_response.address,
        city: nextProps.api_response.city,
        us_state: nextProps.api_response.state,
        build_year: nextProps.api_response.build_year,
        dog_friendly: nextProps.api_response.dog_friendly,
        cat_friendly: nextProps.api_response.cat_friendly,
        has_pool: nextProps.api_response.has_pool,
        has_elevator: nextProps.api_response.has_elevator,
        has_fitness_center: nextProps.api_response.has_fitness_center,
        has_wheelchair_access: nextProps.api_response.has_wheelchair_access,
        has_dishwasher: nextProps.api_response.has_dishwasher,
        has_air_conditioning: nextProps.api_response.has_air_conditioning,
        has_parking: nextProps.api_response.has_parking,
        star_rating: nextProps.api_response.star_rating,
        is_furnished: nextProps.api_response.furnished,
        has_laundry_facilities: nextProps.api_response.has_laundry_facilities,
        search_radius: nextProps.api_response.search_radius
      });
    }
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
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">Minimum Bedrooms</th>
                    <th className="w-25 text-center">Maximum Bedrooms</th>
                    <th className="w-25 text-center">Minimum Price</th>
                    <th className="w-25 text-center">Maximum Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">{this.state.min_bdrm}</td>
                    <td className="text-center">{this.state.max_bdrm}</td>
                    <td className="text-center">{this.state.min_price}</td>
                    <td className="text-center">{this.state.max_price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">Minimum Square Feet</th>
                    <th className="w-25 text-center">Maximum Square Feet</th>
                    <th className="w-25 text-center">Build Year</th>
                    <th className="w-25 text-center">Pricing Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">{this.state.min_sqft}</td>
                    <td className="text-center">{this.state.max_sqft}</td>
                    <td className="text-center">{this.state.build_year}</td>
                    <td className="text-center">{this.state.price_type}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">City</th>
                    <th className="w-25 text-center">State</th>
                    <th className="w-25 text-center">Zip Code</th>
                    <th className="w-25 text-center">Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">{this.state.city}</td>
                    <td className="text-center">{this.state.us_state}</td>
                    <td className="text-center">{this.state.zip_code}</td>
                    <td className="text-center">{this.state.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">Dog Friendly</th>
                    <th className="w-25 text-center">Cat Friendly</th>
                    <th className="w-25 text-center">Has Pool</th>
                    <th className="w-25 text-center">Has Elevator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      {this.state.dog_friendly
                        ? this.state.dog_friendly.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.cat_friendly
                        ? this.state.cat_friendly.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.has_pool
                        ? this.state.has_pool.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.has_elevator
                        ? this.state.has_elevator.toString()
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">Has Fitness Center</th>
                    <th className="w-25 text-center">Has Wheelchair Access</th>
                    <th className="w-25 text-center">Has Dishwasher</th>
                    <th className="w-25 text-center">Has Air Conditioning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      {this.state.has_fitness_center
                        ? this.state.has_fitness_center.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.has_wheelchair_access
                        ? this.state.has_wheelchair_access.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.has_dishwasher
                        ? this.state.has_dishwasher.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.has_air_conditioning
                        ? this.state.has_air_conditioning.toString()
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">Has Parking</th>
                    <th className="w-25 text-center">Star Rating</th>
                    <th className="w-25 text-center">Is Furnished</th>
                    <th className="w-25 text-center">Has Laundry Facilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      {this.state.has_parking
                        ? this.state.has_parking.toString()
                        : null}
                    </td>
                    <td className="text-center">{this.state.star_rating}</td>
                    <td className="text-center">
                      {this.state.is_furnished
                        ? this.state.has_dishwasher.toString()
                        : null}
                    </td>
                    <td className="text-center">
                      {this.state.has_laundry_facilities
                        ? this.state.has_laundry_facilities.toString()
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="w-25 text-center">Property Type</th>
                    <th className="w-25 text-center">Search Radius</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">{this.state.property_type}</td>
                    <td className="text-center">{this.state.search_radius}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
