import React, { Component } from 'react';
import Menu from './components/MenuComponents';
import Example from './components/NavBarObject';
import Jumbo from './components/JumbotronObject';
import './App.css';
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

  onSelection(food) {
    this.setState({ selectedFood: food });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }


  render() {
    return (
      <div>
        <Example />
        <Jumbo />
        <Menu dishlar={this.state.dishes} onclick={(ele) => this.state.onSelection(ele)} />
        <div className="container">
          {this.renderDish(this.state.selectedFood)}
        </div>
      </div>
    );
  }

}

export default App;