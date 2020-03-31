import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Jumbo from './JumbotronObject';
import { Link } from "react-router-dom";



function Itempresent(props) {

    return (
        <div>
            <Jumbo />
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card key={props.dish.id} className="frame">
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{props.dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itempresent;