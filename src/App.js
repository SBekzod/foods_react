import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainCom';
import Item from './components/NewClicked';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };

  }

  openClickedItem(eles) {
    return(
      <div>
        <Item eles={eles}/>
      </div>
    );
  }


  render() {
    return (
      <BrowserRouter>
        <div>
<<<<<<< HEAD
          <Main dishlar={this.state.dishes}/>
=======
          <Main dishlar={this.state.dishes} onClick={(ele) => this.openClickedItem(ele)} />
>>>>>>> parent of e9a3d5e... waste
        </div>
      </BrowserRouter>

    );
  }

}

export default App;