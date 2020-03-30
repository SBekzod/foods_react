import React, { Component } from 'react';
import Menu from './components/MenuComponents';
import Example from './components/NavBarObject';
import Header from './components/HeaderComponent';
import Jumbo from './components/JumbotronObject';
import Footer from './components/FooterCom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedFood: null
    };

  }


  render() {
    return (
      <div>
        <Header />
        <Menu dishlar={this.state.dishes} />
        <Footer />
      </div>
    );
  }

}

export default App;