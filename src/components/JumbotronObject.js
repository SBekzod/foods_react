import React from 'react';
import { Jumbotron } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h5 className="display-3">Hello, world!</h5>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;