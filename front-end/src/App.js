import React, {Component} from "react";
import SearchBar from "./SearchBar.js";
import Table from "./Table.js";
import CardDeck from "./CardDeck.jsx"
import axios from "axios";
import "./App.css";

export default class Site extends Component {
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
      api_text:"",
      api_type_costar: true
    };
  }

  toggleApiType() {
    this.setState(state => ({
      api_type_costar: !state.api_type_costar
    }));
  }

  loadResults(request) {
    var request_type = this.state.api_type_costar
      ? "Apartments"
      : "General"
    axios.get(`http://localhost:5000/nlp?request=${request}&request_type=${request_type}`).then(response => {
      this.setState({
        min_sqft: response.data.Min_Sqft,
        max_sqft: response.data.Max_Sqft,
        min_bdrm: response.data.Min_Bed,
        max_bdrm: response.data.Max_Bed,
        min_price: response.data.Min_Price,
        max_price: response.data.Max_Price,
        price_type: response.data.Pricing_Type,
        zip_code: response.data.Zip_Code,
        address: response.data.Address,
        city: response.data.City,
        us_state: response.data.State,
        build_year: response.data.Build_Year,
        api_text: JSON.stringify(response.data, undefined, 4)
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (<div>
      <section className="hero-area bg-1 text-center overly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-block">
                <h1>Search for Listings Near You</h1>
                <p>
                  Join the millions who buy and sell from each other
                  <br/>
                  everyday in local communities around the world
                </p>
              </div>
              <SearchBar loadResults={this.loadResults.bind(this)} toggleApiType={this.toggleApiType.bind(this)} ApiType={this.state.api_type_costar}/>
            </div>
          </div>
        </div>
      </section>
      {
        this.state.api_type_costar
        ? <CardDeck />
        : <Table min_sqft={this.state.min_sqft} max_sqft={this.state.max_sqft} min_bdrm={this.state.min_bdrm} max_bdrm={this.state.max_bdrm} min_price={this.state.min_price} max_price={this.state.max_price} price_type={this.state.price_type} zip_code={this.state.zip_code} address={this.state.address} city={this.state.city} us_state={this.state.us_state} build_year={this.state.build_year}/>
      }
      <section className="popular-deals section bg-gray" style={{paddingTop:'50px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Generated API</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <pre style={{paddingBottom:'70px'}}>{this.state.api_text}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}
