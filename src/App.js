import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainCom';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>

    );
  }

}

export default App;