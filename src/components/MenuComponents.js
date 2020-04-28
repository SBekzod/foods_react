import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Jumbo from './JumbotronObject';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
// import {baseUrl} from '../shared/baseUrl';

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

    const menu = props.dishlar.dishes.map((ele) => {
        return (
            <div className="col-12 col-md-6">
<<<<<<< HEAD
                <RenderMenuItem eles={ele} />
=======
                <Card key={ele.id} onClick={() => props.onClick(ele)}>
                    <CardImg width="100%" src={ele.image} alt={ele.name} />
                    <CardImgOverlay>
                        <CardTitle>{ele.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
>>>>>>> parent of e9a3d5e... waste
            </div>);
    });

    if (props.dishlar.isLoading) {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 offset-5">
                            <Loading />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    else if (props.dishlar.errMess) {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 offset-5">
                            <h4>{props.dishlar.errMess}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
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

<<<<<<< HEAD
        );
    }

=======
    );
>>>>>>> 82aaaabe51fc724a77a50edb40e5c55628efddc9
}

export default Menu;