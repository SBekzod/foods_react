import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import Footer from './FooterCom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Staff from './StaffComponent';
import Forms from './FillCom';
import Contact from './ContactComponent';
import Contact2 from './Contact2Component'
import Home from './HomeCom';
import { connect } from 'react-redux';
import { fetchDishes, loginUser, logoutUser, userSignUp, fetchComments, addNewComment, fetchDishComments, addNewDishComment } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import DishDetail from './DishDetailComponent';


const mapStateToProps = state => ({
    dishlar: state.dishlar,
    comments: state.comments,
    auth: state.auth,
    dishComments: state.dishComments
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchDishComments: () => dispatch(fetchDishComments()),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser()),
    userSignUp: (newUser) => dispatch(userSignUp(newUser)),
    addNewComment: (newcom) => dispatch(addNewComment(newcom)),
    addNewDishComment: (newDishCom) => dispatch(addNewDishComment(newDishCom))
});


class Main extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchDishComments();
    }

    render() {

        const ChosenItem = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishlar.dishes.filter((ele) => ele.id === parseInt(match.params.id, 10))[0]} />
            );
        }

        return (
            <div>
                <Header auth={this.props.auth} loginUser={this.props.loginUser}
                    logoutUser={this.props.logoutUser} userSignUp={this.props.userSignUp} />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path="/staff" component={Staff} />
                            <Route path="/menu/:id" component={ChosenItem} />
                            <Route exact path="/menu" component={() => <Menu dishlar={this.props.dishlar} />} />
                            <Route path="/home" component={() => <Home dishlar={this.props.dishlar} dishComments={this.props.dishComments} addNewDishComment={this.props.addNewDishComment} />} />
                            <Route path="/form" component={Forms} />
                            <Route path="/aboutus" component={() => <Contact comments={this.props.comments} addNewComment={this.props.addNewComment} />} />
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