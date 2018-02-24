import React, {Component} from "react";

export default class CardDeck extends Component {

  render() {
    return (<section className="popular-deals section bg-gray" style={{
        paddingTop: '100px'
      }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Search Results</h2>
            </div>
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top img-fluid" src="https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/image.jpg" alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top img-fluid" src="https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/image.jpg" alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top img-fluid" src="https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/image.jpg" alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
};
