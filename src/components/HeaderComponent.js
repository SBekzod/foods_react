import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import Example from './NavBarObject';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Example/>
            </React.Fragment>
        );
    }

}

export default Header;