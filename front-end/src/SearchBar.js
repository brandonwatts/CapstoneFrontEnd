import React, {Component} from "react";

var recognition = null;
var recognizing = false;
var final_transcript = '';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', first: true};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);		
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        this.setState({value: ''});
        this.props.loadResults(this.state.value);
        e.preventDefault();
    }
	
    listenToSpeech()
	{		
		if(recognition === null)
		{
			if (!('webkitSpeechRecognition' in window)) 
			{
				console.log("Web Speech API not available");
				return;
			}	
			
			recognition = new window.webkitSpeechRecognition();
			recognition.continuous = true;
			recognition.interimResults = true;
			
			recognition.onstart = function() 
			{
				console.log("Speech Started Recording");
				recognizing = true;				
			};
			
			recognition.onerror = function(event) 
			{
				console.log("Speech Error");
				console.log(final_transcript);
			};
			
			recognition.onend = function()
			{
				console.log("Speech Stopped Recording");		
				console.log(final_transcript);	
				recognizing = false;				
			};
			
			recognition.onresult = function(event) 
			{
				console.log("Speech Received Result");
								
				var current_transcript = '';		

				for (var i = event.resultIndex; i < event.results.length; ++i) 
				{
				  if (event.results[i].isFinal) 
				  {
					final_transcript += event.results[i][0].transcript;
				  } 
				  else 
				  {
					current_transcript += event.results[i][0].transcript;
				  }
				}					
			};
		}
		
		if(!recognizing)
		{
			console.log("Listening...");
			recognition.start();
		}
		else
		{
			recognition.stop();
			final_transcript = '';
		}
	}

    render() {
        return (
            <div className="advance-search">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-group col-lg-10 col-md-12">
                            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"
                                   id="search" placeholder="Search for Listings"/>
                            <span className="input-group-btn">
                                    <button className="btn btn-primary voice-button" type="button" onClick={this.listenToSpeech}>
                                        <i className="fa fa-microphone fa-lg"></i>
                                    </button>
                            </span>
                        </div>
                        <div className="col-lg-2 col-md-12">
                                <button className="btn btn-main">SEARCH</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}