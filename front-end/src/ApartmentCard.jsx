import React, {Component} from "react";

export default class ApartmentCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<div className="card">
      <img className="card-img-top img-fluid" src="https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/image.jpg" alt="Card image cap"/>
      <div className="card-block">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>);
  }
};
