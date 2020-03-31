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
          <Main dishlar={this.state.dishes} onClick={(ele) => this.openClickedItem(ele)} />
        </div>
      </BrowserRouter>

    );
  }

}

export default App;