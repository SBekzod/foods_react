import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }

  }

  render() {
    return (
      <div>
        <Navbar dark color="primary" className="positioning fixed-top">
          <div className="container">
            <NavbarBrand href="/">Restoran Bekzo Origin</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishlar={this.state.dishes}/>
      </div>
    );
  }

}

export default App;
