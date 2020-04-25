import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, FormGroup, Label,
    CardTitle, CardSubtitle, Button, Modal, ModalBodyProps, ModalHeader, ModalBody, Input, Form
} from 'reactstrap';

function RenderCard({ item }) {
    return (
        <div>
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
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.addNewDishComment({
            author: this.username.value, comment: this.comment.value, rating: this.rating.value
        });
        event.preventDefault();
    }


    render() {

        const menu = this.props.dishlar.dishes.map(ele => {
            return (
                <RenderCard item={ele} />
            )
        });

        const commenting = this.props.dishComments.dishComments.map(ele => {
            return (
                <div>
                    <h5>Author: {ele.author}</h5>
                    <h5> {ele.comment}</h5>
                    <h5> {ele.rating}</h5>
                    <h5>_______</h5>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        {menu[1]}
                    </div>
                    <div className="col-12 col-md-4">
                        {this.props.dishComments.dishComments ?
                            commenting
                            :
                            null
                        }
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                        <ModalHeader>Did you like our main dish?</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Input type="text" id="comment" name="comment"
                                        innerRef={(input) => this.comment = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="rating">rating</Label>
                                    <Input type="number" id="rating" name="rating"
                                        innerRef={(input) => this.rating = input} />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
                <div className="row">
                    <Button className="col-2 offset-8 mb-2" onClick={this.toggleModal} color="primary">Add Comment</Button>
                </div>
            </div>
        );
    }


}

export default Home;