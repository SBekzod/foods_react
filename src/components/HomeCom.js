import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalBodyProps, ModalHeader, ModalBody, Input, Form
} from 'reactstrap';

function RenderCard({ item }) {
    return (
        <div>
            {/* <h2>This is: {item} </h2> */}
            <Card key={item.id}>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>

    );

}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
        // this.clickedSubmit = this.clickedSubmit.bind(this);
    }

    // clickedSubmit(event) {
    //     // alert("This is client's opinion: " + this.opinion.value);
    //     this.props.addScore(this.opinion);

    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md frame1">
                        <RenderCard item={this.props.dish} />
                    </div>
                    <Form className="col-12 col-md frame2">
                        <div className="row">
                            <Input className="col-12" type="text" id="opinion"
                                placeholder="Write your Opinion"
                                innerRef={(input) => this.opinion = input} />
                            <h4 className="col-md offset-1 frame4">Leave your score</h4>
                            <Button type="submit" className="col-md frame3" color="success">success</Button>{' '}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }


}

export default Home;