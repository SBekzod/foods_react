import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Jumbo from './JumbotronObject';
import { Link } from 'react-router-dom';

function RenderMenuItem({ eles }) {
    return (
        <Card key={eles.id}>
            <Link to={`/menu/${eles.id}`}>
                <CardImg width="100%" src={eles.image} alt={eles.name} />
                <CardImgOverlay>
                    <CardTitle>{eles.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Menu(props) {

    const menu = props.dishlar.map((ele) => {
        return (
            <div className="col-12 col-md-6">
                <RenderMenuItem eles={ele} />
            </div>);
    });

    return (
        <div>
            <Jumbo />
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        </div>

    );
};

export default Menu;