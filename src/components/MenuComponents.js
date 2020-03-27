import React, { Component } from 'react'
import { Media } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const menu = this.props.dishlar.map(ele => {
            return (<div key={ele.id} className="col-12 mt-5">
                <Media tag="li">
                    <h4 className="col-5 col-md-3">{ele.name}</h4>
                    <h6 className="col-7 col-md-9">{ele.description}</h6>
                </Media>
            </div>);
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list >
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;