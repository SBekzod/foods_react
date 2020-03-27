import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import alberto from '.assets/alberto';


class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const menu = this.props.dishlar.map(ele => {
            return (<div key={ele.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={alberto} alt={ele.name}>
                        <CardImgOverlay>
                            <CardTitle>{ele.name}</CardTitle>
                        </CardImgOverlay>
                    </CardImg>
                </Card>
            </div>);
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;