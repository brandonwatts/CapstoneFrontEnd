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
      build_year: api.Build_Year,
      dog_friendly: api.Dog_Friendly,
      cat_friendly: api.Cat_Friendly,
      has_pool: api.Has_Pool,
      has_elevator: api.Has_Elevator,
      has_fitness_center: api.Has_Fitness_Center,
      has_wheelchair_access: api.Has_Wheelchair_Access,
      has_dishwasher: api.Has_Dishwasher,
      has_air_conditioning: api.Has_Air_Conditioning,
      has_parking: api.Has_Parking,
      star_rating: api.Star_Rating,
      is_furnished: api.Furnished,
      has_laundry_facilities: api.Has_Laundry_Facilities,
      property_type : api.Property_Type,
      search_radius: api.Search_Radius
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
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered" style={{marginBottom:'0'}}>
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
                    <td className='text-center'>{this.state.dog_friendly ? this.state.dog_friendly.toString() : null}</td>
                    <td className='text-center'>{this.state.cat_friendly ? this.state.dog_friendly.toString() : null}</td>
                    <td className='text-center'>{this.state.has_pool ? this.state.has_pool.toString() : null}</td>
                    <td className='text-center'>{this.state.has_elevator ? this.state.has_elevator.toString() : null}</td>
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
                    <th className='w-25 text-center'>Has Fitness Center</th>
                    <th className='w-25 text-center'>Has Wheelchair Access</th>
                    <th className='w-25 text-center'>Has Dishwasher</th>
                    <th className='w-25 text-center'>Has Air Conditioning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>{this.state.has_fitness_center ? this.state.has_fitness_center.toString() : null}</td>
                    <td className='text-center'>{this.state.has_wheelchair_access ? this.state.has_wheelchair_access.toString() : null}</td>
                    <td className='text-center'>{this.state.has_dishwasher ? this.state.has_dishwasher.toString() : null}</td>
                    <td className='text-center'>{this.state.has_air_conditioning ? this.state.has_air_conditioning.toString() : null}</td>
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
                    <th className='w-25 text-center'>Has Parking</th>
                    <th className='w-25 text-center'>Star Rating</th>
                    <th className='w-25 text-center'>Is Furnished</th>
                    <th className='w-25 text-center'>Has Laundry Facilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>{this.state.has_parking ? this.state.has_parking.toString() : null}</td>
                    <td className='text-center'>{this.state.star_rating}</td>
                    <td className='text-center'>{this.state.is_furnished ? this.state.has_dishwasher.toString() : null}</td>
                    <td className='text-center'>{this.state.has_laundry_facilities ? this.state.has_laundry_facilities.toString() : null}</td>
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
      </section>
    );
  }
};
