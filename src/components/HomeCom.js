import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md frame1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md frame2">
                    <h5>{props.chef.info}</h5>
                </div>
            </div>
        </div>
    );
}

export default Home;