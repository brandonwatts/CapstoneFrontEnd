import React, {Component} from "react";

export default class Table extends Component {

  render() {
    return (
      <section className="popular-deals section bg-gray" style={{paddingTop:'100px'}}>
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
              <table className="table table-bordered" style={{marginBottom:'0'}}>
                <thead className='thead-default'>
                  <tr>
                    <th className='w-25 text-center'>Minimum Bedrooms</th>
                    <th className='w-25 text-center'>Maximum Bedrooms</th>
                    <th className='w-25 text-center'>Minimum Price</th>
                    <th className='w-25 text-center'>Maximum Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>{this.props.min_bdrm}</td>
                    <td className='text-center'>{this.props.max_bdrm}</td>
                    <td className='text-center'>{this.props.min_price}</td>
                    <td className='text-center'>{this.props.max_price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered" style={{marginBottom:'0'}}>
                <thead className='thead-default'>
                  <tr>
                    <th className='w-25 text-center'>Minimum Square Feet</th>
                    <th className='w-25 text-center'>Maximum Square Feet</th>
                    <th className='w-25 text-center'>Build Year</th>
                    <th className='w-25 text-center'>Pricing Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>{this.props.min_sqft}</td>
                    <td className='text-center'>{this.props.max_sqft}</td>
                    <td className='text-center'>{this.props.build_year}</td>
                    <td className='text-center'>{this.props.price_type}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered" style={{marginBottom:'0'}}>
                <thead className='thead-default'>
                  <tr>
                    <th className='w-25 text-center'>City</th>
                    <th className='w-25 text-center'>State</th>
                    <th className='w-25 text-center'>Zip Code</th>
                    <th className='w-25 text-center'>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>{this.props.min_sqft}</td>
                    <td className='text-center'>{this.props.max_sqft}</td>
                    <td className='text-center'>{this.props.build_year}</td>
                    <td className='text-center'>{this.props.price_type}</td>
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
