import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Navbar, Popover, OverlayTrigger, ListGroup, ListGroupItem} from 'react-bootstrap';
import {
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    FormControl,
    Button,
    Row
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class NavbarComp extends Component {
    render() {
        return (
            <Navbar default fixedTop collapseOnSelect>
                {/* <Navbar.Header> */}
                    {/* <Navbar.Brand > */}
                        <Link to='/'>TextSum</Link>
                    {/* </Navbar.Brand> */}
                    {/* <Navbar.Toggle/> */}
                {/* </Navbar.Header> */}
               {/* <Row> */}
               {/* <div class="col-md-3"> */}
                <Nav pullRight className="navitem-flex">
                    <Navbar.Form pullLeft>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control custom-search"
                                placeholder="Search for..."></input>
                            <span className="input-group-btn">
                                <button className="btn btn-default custom-search" type="button"><FontAwesome name='search'/></button>
                            </span>
                        </div>
                       
                    </Navbar.Form>
                    </Nav>
                    
                    <NavDropdown
                        className="custom-dropdown"
                        eventKey={7}
                        title={< FontAwesome name = 'user-circle' />}
                        id="basic-nav-dropdown">
                        <LinkContainer to="/login">
                            <MenuItem eventKey={7.1}>
                                Login
                            </MenuItem>
                        </LinkContainer>
                    </NavDropdown>
                    
                
                {/* </Row> */}
              
            </Navbar>
        );
    }
}