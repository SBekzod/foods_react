import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainCom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main dishlar={this.state.dishes}/>
        </div>
      </BrowserRouter>

    );
  }

}

export default App;