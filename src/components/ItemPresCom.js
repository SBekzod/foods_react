import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Jumbo from './JumbotronObject';
import { Link } from "react-router-dom";



function Itempresent(props) {

    return (
        <div>
            <Jumbo />
            <div className="container">
                <div className="row">
                    <Breadcrumb className="frame">
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card key={props.dish.id} className="frame">
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>{props.dish.name}</h2>
                        <h4>{props.dish.commenting}</h4>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Itempresent;