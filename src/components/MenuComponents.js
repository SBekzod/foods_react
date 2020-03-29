import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    render() {

        const menu = this.props.dishlar.map(ele => {
            return (
                <div className="col-12 col-md-6">
                    <Card key={ele.id} onClick={() => this.props.onClick(ele)}>
                        <CardImg width="100%" src={ele.image} alt={ele.name} />
                        <CardImgOverlay>
                            <CardTitle>{ele.name}</CardTitle>
                        </CardImgOverlay>
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