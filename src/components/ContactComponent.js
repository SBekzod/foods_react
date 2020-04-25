import React, { Component } from 'react';
import { Button, Label, Row, Col, Card, CardTitle } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function RenderComments({ ele }) {
    return (
        <div key={ele._id}>
            <h5>Author: {ele.author}</h5>
            <h5> {ele.comment}</h5>
            <h5> {ele.rating}</h5>
            <h5>_______</h5>
        </div>
    );
}

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addNewComment({ author: values.firstname, rating: values.rating, comment: values.comment })
    }

    render() {

        const commenting = this.props.comments.comments.map(ele => {
            return (
                <div>
                    <RenderComments ele={ele} />
                </div>)
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.props.comments.comments ?
                            commenting
                            :
                            this.props.comments.errMess
                        }
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Comment</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.text model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(1), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be onedigit',
                                            maxLength: 'Must be one digit',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.text model=".comment" id="comment" name="comment"
                                        placeholder="Comment"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <div className="row">
                                <div className="col-12 offset-8">
                                    <Button type="submit" color="primary">
                                        Send Comment
                                    </Button>
                                </div>
                            </div>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;