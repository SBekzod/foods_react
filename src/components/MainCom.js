import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import Footer from './FooterCom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Staff from './StaffCom';
import Forms from './FillCom';
import Contact from './ContactCom';
import Contact2 from './ContactCom2'
import Home from './HomeCom';
import Itempresent from './ItemPresCom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        dishlar: state.dishlar,
        chef: state.chef
    }
}


class Main extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const ChosenItem = ({ match }) => {
            return (
                <Itempresent dish={this.props.dishlar.filter((ele) => ele.id === parseInt(match.params.id, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/staff" component={Staff} />
                    <Route path="/menu/:id" component={ChosenItem} />
                    <Route exact path="/menu" component={() => <Menu dishlar={this.props.dishlar} />} />
                    <Route path="/home" component={() => <Home dish={this.props.dishlar[0]} chef={this.props.chef} />} />
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

export default withRouter(connect(mapStateToProps)(Main));