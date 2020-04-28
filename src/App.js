import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  constructor(props) {
    super(props);

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
<<<<<<< HEAD
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
=======
      <BrowserRouter>
        <div>
<<<<<<< HEAD
          <Main dishlar={this.state.dishes}/>
=======
          <Main dishlar={this.state.dishes} onClick={(ele) => this.openClickedItem(ele)} />
>>>>>>> parent of e9a3d5e... waste
        </div>
      </BrowserRouter>

>>>>>>> 82aaaabe51fc724a77a50edb40e5c55628efddc9
    );
  }

}

export default App;