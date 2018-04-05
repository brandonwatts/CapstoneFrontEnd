import React, { Component } from "react";

export default class Listings extends Component {
  render() {
    return (
      <section className="popular-deals section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Search Results</h2>
                <p>
                  Showing listings for "Show me all the apartments in Richmond,
                  Virginia."
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="product-item bg-light">
                <div className="card">
                  <div className="thumb-content">
                    <img
                      className="card-img-top img-fluid"
                      src="https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iekds62v-sherman-residential-client/g5-cl-1go4aq4t0e-axis-3700/uploads/minigal2.jpg"
                      alt="Card"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Apartment 1</h4>
                    <ul className="list-inline product-meta">
                      <li className="list-inline-item">
                        <i className="fa fa-money" />$900
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-map-marker" />Richmond, Virginia
                      </li>
                    </ul>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo, aliquam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="product-item bg-light">
                <div className="card">
                  <div className="thumb-content">
                    <img
                      className="card-img-top img-fluid"
                      src="https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iekds62v-sherman-residential-client/g5-cl-1go4aq4t0e-axis-3700/uploads/minigal2.jpg"
                      alt="Card"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Apartment 2</h4>
                    <ul className="list-inline product-meta">
                      <li className="list-inline-item">
                        <i className="fa fa-money" />$900
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-map-marker" />Richmond, Virgina
                      </li>
                    </ul>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo, aliquam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="product-item bg-light">
                <div className="card">
                  <div className="thumb-content">
                    <img
                      className="card-img-top img-fluid"
                      src="https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iekds62v-sherman-residential-client/g5-cl-1go4aq4t0e-axis-3700/uploads/minigal2.jpg"
                      alt="Card"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Apartment 3</h4>
                    <ul className="list-inline product-meta">
                      <li className="list-inline-item">
                        <i className="fa fa-money" />$900
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-map-marker" />Richmond, Virginia
                      </li>
                    </ul>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo, aliquam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
