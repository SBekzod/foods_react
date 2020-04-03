import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import Footer from './FooterCom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Staff from './StaffCom';
import Forms from './FillCom';
import Contact from './ContactCom';
import Contact2 from './ContactCom2'
import Home from './HomeCom';
import Itempresent from './ItemPresCom';
import { DISHES } from '../shared/dishes';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishlar: DISHES
        }
    }

    render() {
        const ChosenItem = ({ match }) => {
            return (
                <Itempresent dish={this.state.dishlar.filter((ele) => ele.id === parseInt(match.params.id, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/staff" component={Staff} />
                    <Route path="/menu/:id" component={ChosenItem} />
                    <Route exact path="/menu" component={() => <Menu dishlar={this.state.dishlar} />} />
                    <Route path="/home" component={() => <Home dish={this.state.dishlar[0]} />} />
                    <Route path="/form" component={Forms} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/contact2" component={Contact2} />
                    <Redirect to="/menu" />
                </Switch>
                <Footer />
            </div >
        );

    }



}

export default Main;