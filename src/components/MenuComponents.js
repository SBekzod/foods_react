import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onClickedDish(food) {
        this.setState({selectedDish: food});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }



    render() {

        const menu = this.props.dishlar.map(ele => {
            return (<div key={ele.id} className="col-12 col-md-6">
                <Card onClick={()=> this.onClickedDish(ele)}>
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
                <div className="row">
                  <div  className="col-12">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;