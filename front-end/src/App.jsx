import React, { Component } from "react";
import "./css/App.css";
import General from "./General.jsx";
import Apartments from "./Apartments.jsx";

export default class Site extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_response: null,
      is_loading: false,
      current_page: "General"
    };
  }

  loadResults(request) {
    this.setState({ is_loading: true });

    fetch(`/nlp?request=${request}&request_type=${this.state.current_page}`)
      .then(res => {
        res.json().then(data => {
          this.setState({
            is_loading: false,
            api_response: data
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeCurrentPage = newPage => {
    this.setState({ current_page: newPage, api_response: null });
  };

  render() {
    return (
      <div className="App">
        {
          {
            General: (
              <General
                changeCurrentPage={this.changeCurrentPage.bind(this)}
                search={this.loadResults.bind(this)}
                api_response={this.state.api_response}
              />
            ),
            Apartments: (
              <Apartments
                changeCurrentPage={this.changeCurrentPage.bind(this)}
                search={this.loadResults.bind(this)}
                api_response={this.state.api_response}
                isLoading={this.state.is_loading}
              />
            )
          }[this.state.current_page]
        }
      </div>
    );
  }
}
