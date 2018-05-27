import ReactDOM from 'react-dom';
import React, { Component, Text } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Team extends React.Component {
  // add to preference button function
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="container boxborder">
        <h2>SELECT YOUR PREFERENCE</h2>
        <Link to="/news">
          <Button className="btn btn-filled">Save Preference</Button>
        </Link>

        <div className="row">
          <div className="col-md-3">
            <div className="hovereffect">
              <img className="img-responsive" src="/assets/space.jpg" alt="" />
              <div className="overlay">
                <h2>Genaral</h2>
                <p>
                  <a>
                    <br />All new technology news
                    <br />
                    including rocket launches,
                    <br />
                    smart devices, as soon as they
                    <br />get updated
                  </a>
                </p>
                <br />
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'Add to preference' : 'Added'}
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="hovereffect">
              <img
                className="img-responsive"
                src="/assets/sports.jpeg"
                alt=""
              />
              <div className="overlay">
                <h2>SPORTS</h2>
                <p>
                  <a>
                    <br />Sales Manager - Diet Club
                    <br />
                    Liberty Plaza
                    <br />
                    Dr Colvin R de Silva Mawatha,
                    <br />Colombo 01000
                  </a>
                </p>
                <br />
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  Add to preference
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="hovereffect">
              <img className="img-responsive" src="/assets/health.jpg" alt="" />
              <div className="overlay">
                <h2>HEALTH</h2>
                <p>
                  <a>
                    <br />Human Resource Manager - Diet Club
                    <br />
                    Liberty Plaza
                    <br />
                    Dr Colvin R de Silva Mawatha,
                    <br />Colombo 01000
                  </a>
                </p>
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  Add to preference
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="hovereffect">
              <img
                className="img-responsive"
                src="/assets/science.jpg"
                alt=""
              />
              <div className="overlay">
                <h2>SCIENCE</h2>
                <p>
                  <a>
                    <br />Finance Manager - Diet Club
                    <br />
                    Union Place
                    <br />
                    Dr Colvin R de Silva Mawatha,
                    <br />Colombo 01000
                  </a>
                </p>
                <br />
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  Add to preference
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="hovereffect">
              <img className="img-responsive" src="/assets/ent.jpg" alt="" />
              <div className="overlay">
                <h2>ENTERTAINMENT</h2>
                <p>
                  <a>
                    <br />Finance Manager - Diet Club
                    <br />
                    Union Place
                    <br />
                    Dr Colvin R de Silva Mawatha,
                    <br />Colombo 01000
                  </a>
                </p>
                <br />
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  Add to preference
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="hovereffect">
              <img
                className="img-responsive"
                src="/assets/business.jpg"
                alt=""
              />
              <div className="overlay">
                <h2>BUSINESS</h2>
                <p>
                  <a>
                    <br />Finance Manager - Diet Club
                    <br />
                    Union Place
                    <br />
                    Dr Colvin R de Silva Mawatha,
                    <br />Colombo 01000
                  </a>
                </p>
                <br />
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  Add to preference
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="hovereffect">
              <img
                className="img-responsive"
                src="/assets/general.jpg"
                alt=""
              />
              <div className="overlay">
                <h2>GENERAL</h2>
                <p>
                  <a>
                    <br />Finance Manager - Diet Club
                    <br />
                    Union Place
                    <br />
                    Dr Colvin R de Silva Mawatha,
                    <br />Colombo 01000
                  </a>
                </p>
                <br />
                <Button className="btn btn-filled" onClick={this.handleClick}>
                  Add to preference
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
