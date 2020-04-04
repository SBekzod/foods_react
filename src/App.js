import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainCom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;