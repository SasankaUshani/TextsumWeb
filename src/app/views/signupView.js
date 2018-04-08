import React from 'react';
import { render } from 'react-dom';
// import SignUpComp from '../components/Signup'
import {
  Col,
  Thumbnail,
  Row,
  FieldGroup,
  Checkbox,
  Button
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    handleLogin(){
        console.log("logged")
    }
  render() {
    return (
      <div>
        <div className="container boxborder">
          <h6>Sign Up</h6>
          <div className="well-login">
            <Thumbnail
              id="login-thumb"
              src="/assets/profileLogo.png"
              height={80}
              alt="242x200"
            >
              <br />
              <form id="signup" role="form" action="" method="post">
                <div className="input-group">
                  <i className="fa fa-user fa icon" />&nbsp;&nbsp;
                  <input
                    id="sign-up-input"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <br />
                <div className="input-group">
                  <i className="fa fa-envelope fa icon" />&nbsp;&nbsp;
                  <input
                    id="sign-up-input"
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div className="input-group">
                  <i className="fa fa-key fa icon" />&nbsp;&nbsp;
                  <input
                    id="sign-up-input"
                    type="password"
                    className="form-control"
                    required
                    placeholder="Password"
                  />
                </div>
                <br />
                <div className="input-group">
                  <i className="fa fa-key fa icon" />&nbsp;&nbsp;
                  <input
                    id="sign-up-input"
                    type="password"
                    className="form-control"
                    required
                    placeholder="Confirm Password"
                  />
                </div>
                <Link to="/home">
                  <Button className="btn btn-filled" onClick={this.handleLogin()}>Sign up</Button>
                </Link>
              </form>
            </Thumbnail>
            <br />
            <Link to="login">
              <h7>Already a member? LogIn.</h7>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
