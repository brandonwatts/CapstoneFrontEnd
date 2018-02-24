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
      api_response : "",
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
        api_response: JSON.stringify(response.data, undefined, 4)
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
          ? <CardDeck api_response={this.state.api_response}/>
          : <Table api_response={this.state.api_response}/>
      }
      <section className="popular-deals section bg-gray" style={{
          paddingTop: '50px'
        }}>
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
              <pre style={{paddingBottom:'70px'}}>{this.state.api_response}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}
