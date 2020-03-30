import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


    
const Menu = (props) => {

    const menu = props.dishlar.map((ele) => {
        return (
            <div className="col-12 col-md-6">
                <Card key={ele.id}>
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
};

export default Menu;