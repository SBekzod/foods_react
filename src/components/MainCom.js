import React from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import Footer from './FooterCom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Staff from './StaffCom';
import Forms from './FillCom';
import Contact from './ContactCom';
import Home from './HomeCom';


const Main = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/staff" component={Staff} />
                <Route path="/menu" component={() => <Menu dishlar={props.dishlar} />} />
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