import React from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import Footer from './FooterCom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Staff from './StaffCom';
import Forms from './FillCom';
import Contact from './ContactCom';
import Home from './HomeCom';
import Itempresent from './ItemPresCom';


const Main = (props) => {

    const ChosenItem = ({ match }) => {
        return (
            <Itempresent dish={props.dishlar.filter((ele) => ele.id === parseInt(match.params.dish.id, 10))[0]} />
        );
        // {props.dishlar.filter((ele) => ele.id == match.params.dish.id)[0]}
    }


    return (
        <div>
            <Header />
            <Switch>
                <Route path="/staff" component={Staff} />
                <Route path="/menu/:id" component={ChosenItem} />
                <Route exact path="/menu" component={() => <Menu dishlar={props.dishlar} />} />
                <Route path="/home" component={() => <Home dish={props.dishlar[0]} />} />
                <Route path="/form" component={Forms} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/menu" />
            </Switch>
            <Footer />
        </div>


    );
}

export default Main;