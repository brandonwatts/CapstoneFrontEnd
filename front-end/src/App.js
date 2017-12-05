import React, {Component} from "react";
import SearchBar from './SearchBar.js';
import Table from './Table.js';
import axios from 'axios';
import './App.css';

export default class Site extends Component {

  constructor(props) {
    super(props);
    this.state = {
      min_sqft: '',
      max_sqft: '',
      min_bdrm: '',
      max_bdrm: '',
      min_price: '',
      max_price: '',
      price_type: '',
      zip_code: '',
      address: '',
      city: '',
      us_state: '',
      build_year: ''
    };
  }

  loadResults(request) {
    console.log(request);
    axios.get(`http://localhost:8888/api/nlp?request=${request}`).then((response) => {
      this.setState({
        min_sqft: response.data.min_sqft,
        max_sqft: response.data.max_sqft,
        min_bdrm: response.data.min_bed,
        max_bdrm: response.data.max_bed,
        min_price: response.data.min_price,
        max_price: response.data.max_price,
        price_type: response.data.pricing_type,
        zip_code: response.data.zip_code,
        address: response.data.address,
        city: response.data.city,
        us_state: response.data.state,
        build_year: response.data.build_year
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <section className="hero-area bg-1 text-center overly">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-block">
                  <h1>Search for Listings Near You
                  </h1>
                  <p>Join the millions who buy and sell from each other
                    <br/>
                    everyday in local communities around the world</p>
                </div>
                <SearchBar loadResults={this.loadResults.bind(this)}/>
              </div>
            </div>
          </div>
        </section>
        <Table min_sqft={this.state.min_sqft} max_sqft={this.state.max_sqft} min_bdrm={this.state.min_bdrm} max_bdrm={this.state.max_bdrm} min_price={this.state.min_price} max_price={this.state.max_price} price_type={this.state.price_type} zip_code={this.state.zip_code} address={this.state.address} city={this.state.city} us_state={this.state.us_state} build_year={this.state.build_year}/>
      </div>
    );
  }
}
