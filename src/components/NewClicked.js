import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function Item(props) {
    return (
        <div>
            <Card>
                <CardImg top src={props.ele.image} alt={props.ele.name} />
                <CardBody>
                    <CardTitle>{props.ele.name}</CardTitle>
                    <CardText>{props.ele.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


export default Item;