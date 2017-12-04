import React, {Component} from "react";

export default class Table extends Component{

  render() {
    return (
       <section className="popular-deals section bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Search Results</h2>
                  {/*<p>Showing listings for "Show me all the apartments in Richmond, Virginia."</p>*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Minimum Bedrooms</th>
                      <th>Maximum Bedrooms</th>
                      <th>Minimum Price</th>
                      <th>Maximum Price</th>
                      <th>City</th>
                      <th>State</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.props.min_bdrm}</td>
                      <td>{this.props.max_bdrm}</td>
                      <td>{this.props.min_price}</td>
                      <td>{this.props.max_price}</td>
                      <td>{this.props.city}</td>
                      <td>{this.props.us_state}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Minimum Square Feet</th>
                      <th>Maximum Square Feet</th>
                      <th>Build Year</th>
                      <th>Pricing Type</th>
                      <th>Zip Code</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.props.min_sqft}</td>
                      <td>{this.props.max_sqft}</td>
                      <td>{this.props.build_year}</td>
                      <td>{this.props.price_type}</td>
                      <td>{this.props.zip_code}</td>
                      <td>{this.props.address}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    );
  }
};