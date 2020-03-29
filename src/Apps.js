import React, { Component } from 'react';
import Menu from './components/MenuComponents';
import './App.css';
import { DISHES } from './shared/dishes';

class Apps extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };

  }


  render() {
    return (
      <div>
        <Menu dishlar={this.state.dishes}/>
      </div>
    );
  }

}

export default Apps;