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
import { fetchDishes } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const mapStateToProps = state => ({
    dishlar: state.dishlar,
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes())
});


class Main extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {

        const ChosenItem = ({ match }) => {
            return (
                <Itempresent dish={this.props.dishlar.dishes.filter((ele) => ele.id === parseInt(match.params.id, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path="/staff" component={Staff} />
                            <Route path="/menu/:id" component={ChosenItem} />
                            <Route exact path="/menu" component={() => <Menu dishlar={this.props.dishlar} />} />
                            <Route path="/home" component={() => <Home dish={this.props.dishlar.dishes[0]} />} />
                            <Route path="/form" component={Forms} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/contact2" component={Contact2} />
                            <Redirect to="/menu" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >
        );

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));