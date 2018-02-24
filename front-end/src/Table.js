import React, {Component} from "react";

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
      build_year: ""
    };
  }

  componentWillReceiveProps(nextProps){
    var api = JSON.parse(nextProps.api_response)
    this.setState({
      min_sqft: api.Min_Sqft,
      max_sqft: api.Max_Sqft,
      min_bdrm: api.Min_Bed,
      max_bdrm: api.Max_Bed,
      min_price: api.Min_Price,
      max_price: api.Max_Price,
      price_type: api.Pricing_Type,
      zip_code: api.Zip_Code,
      address: api.Address,
      city: api.City,
      us_state: api.State,
      build_year: api.Build_Year
    });
    console.log(api)
  }


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
                    <td className='text-center'>{this.state.min_bdrm}</td>
                    <td className='text-center'>{this.state.max_bdrm}</td>
                    <td className='text-center'>{this.state.min_price}</td>
                    <td className='text-center'>{this.state.max_price}</td>
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
                    <td className='text-center'>{this.state.min_sqft}</td>
                    <td className='text-center'>{this.state.max_sqft}</td>
                    <td className='text-center'>{this.state.build_year}</td>
                    <td className='text-center'>{this.state.price_type}</td>
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
                    <td className='text-center'>{this.state.city}</td>
                    <td className='text-center'>{this.state.us_state}</td>
                    <td className='text-center'>{this.state.zip_code}</td>
                    <td className='text-center'>{this.state.address}</td>
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
