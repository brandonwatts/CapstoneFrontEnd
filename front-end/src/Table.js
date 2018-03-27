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
    if (nextProps.api_response !== "") {
      var api = JSON.parse(nextProps.api_response)
      this.setState({
        min_sqft: api.min_sqft,
        max_sqft: api.max_sqft,
        min_bdrm: api.min_bed,
        max_bdrm: api.max_bed,
        min_price: api.min_price,
        max_price: api.max_price,
        zip_code: api.zip_code,
        address: api.address,
        city: api.city,
        us_state: api.state,
        build_year: api.build_year,
        dog_friendly: api.dog_friendly,
        cat_friendly: api.cat_friendly,
        has_pool: api.has_pool,
        has_elevator: api.has_elevator,
        has_fitness_center: api.has_fitness_center,
        has_wheelchair_access: api.has_wheelchair_access,
        has_dishwasher: api.has_dishwasher,
        has_air_conditioning: api.has_air_conditioning,
        has_parking: api.has_parking,
        star_rating: api.star_rating,
        is_furnished: api.furnished,
        has_laundry_facilities: api.has_laundry_facilities,
        search_radius: api.search_radius
      });
    }
  }

  render() {
    return (<section className="popular-deals section bg-gray" style={{
        paddingTop: '100px',
        paddingBottom: '100px'
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
          <div className="col-12">
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
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
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
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
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
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
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
              <thead className='thead-default'>
                <tr>
                  <th className='w-25 text-center'>Dog Friendly</th>
                  <th className='w-25 text-center'>Cat Friendly</th>
                  <th className='w-25 text-center'>Has Pool</th>
                  <th className='w-25 text-center'>Has Elevator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>{
                      this.state.dog_friendly
                        ? this.state.dog_friendly.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.cat_friendly
                        ? this.state.dog_friendly.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.has_pool
                        ? this.state.has_pool.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.has_elevator
                        ? this.state.has_elevator.toString()
                        : null
                    }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
              <thead className='thead-default'>
                <tr>
                  <th className='w-25 text-center'>Has Fitness Center</th>
                  <th className='w-25 text-center'>Has Wheelchair Access</th>
                  <th className='w-25 text-center'>Has Dishwasher</th>
                  <th className='w-25 text-center'>Has Air Conditioning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>{
                      this.state.has_fitness_center
                        ? this.state.has_fitness_center.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.has_wheelchair_access
                        ? this.state.has_wheelchair_access.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.has_dishwasher
                        ? this.state.has_dishwasher.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.has_air_conditioning
                        ? this.state.has_air_conditioning.toString()
                        : null
                    }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
              <thead className='thead-default'>
                <tr>
                  <th className='w-25 text-center'>Has Parking</th>
                  <th className='w-25 text-center'>Star Rating</th>
                  <th className='w-25 text-center'>Is Furnished</th>
                  <th className='w-25 text-center'>Has Laundry Facilities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>{
                      this.state.has_parking
                        ? this.state.has_parking.toString()
                        : null
                    }</td>
                  <td className='text-center'>{this.state.star_rating}</td>
                  <td className='text-center'>{
                      this.state.is_furnished
                        ? this.state.has_dishwasher.toString()
                        : null
                    }</td>
                  <td className='text-center'>{
                      this.state.has_laundry_facilities
                        ? this.state.has_laundry_facilities.toString()
                        : null
                    }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered" style={{
                marginBottom: '0'
              }}>
              <thead className='thead-default'>
                <tr>
                  <th className='w-25 text-center'>Property Type</th>
                  <th className='w-25 text-center'>Search Radius</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>{this.state.property_type}</td>
                  <td className='text-center'>{this.state.search_radius}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>);
  }
};
