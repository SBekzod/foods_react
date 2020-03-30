import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="#">Cafe GQ</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron className="jumbotro">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Cafe GQ</h1>
                                <p>hahahahahahahaaaaaaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa aaaaahhhh hhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhahahhahaha hhahahahhahaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaahhhh hhhhhhhhhhhhhhhhhhhhahaha hahaha</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>

        );
    }

}

export default Header;