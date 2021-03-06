import React, { Component } from "react";

let recognition = null;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      recognizing: false,
      final_transcript: ""
    };

    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = event => {
      this.setState({ recognizing: true, final_transcript: "" });
    };

    recognition.onerror = event => {
      console.log("An error has occured.");
    };

    recognition.onend = event => {
      this.setState({ recognizing: false, value: this.state.final_transcript });
      this.props.loadResults(this.state.final_transcript);
    };

    recognition.onresult = event => {
      var current_transcript = "";

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          this.setState({
            final_transcript:
              this.state.final_transcript + event.results[i][0].transcript
          });
        } else {
          current_transcript += event.results[i][0].transcript;
          this.setState({ value: current_transcript });
        }
      }

      this.setState({
        final_transcript: this.capitalize(this.state.final_transcript)
      });
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.props.loadResults(this.state.value);
    e.preventDefault();
  }

  listenToSpeech() {
    if (this.state.recognizing) {
      recognition.stop();
      return;
    }

    this.setState({ value: "" });
    recognition.start();
  }

  capitalize(s) {
    let first_char = /\S/;
    return s.replace(first_char, function(m) {
      return m.toUpperCase();
    });
  }

  render() {
    return (
      <div className="advance-search">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="input-group col-11">
              <input
                type="text"
                aria-describedby="basic-addon1"
                value={this.state.value}
                onChange={this.handleChange}
                className={
                  this.state.recognizing
                    ? "form-control intermediate"
                    : "form-control"
                }
                id="search"
                placeholder="Search for Listings"
              />
              <span className="input-group-btn ">
                <button
                  className="btn voice-button"
                  onClick={this.listenToSpeech.bind(this)}
                  type="button"
                >
                  {this.state.recognizing ? (
                    <i className="fa fa-microphone fa-lg faa-pulse animated" />
                  ) : (
                    <i className="fa fa-microphone fa-lg" />
                  )}
                </button>
              </span>
            </div>
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={this.handleSubmit}
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
