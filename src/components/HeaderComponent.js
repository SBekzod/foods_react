import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isModalTwoOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModalTwo = this.toggleModalTwo.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    this.props.loginUser({
      username: this.username.value, password: this.password.value
    });
    event.preventDefault();
  }

  toggleModalTwo() {
    this.setState({
      isModalTwoOpen: !this.state.isModalTwoOpen
    });
  }

  handleSignUp(event) {
    this.toggleModalTwo();
    this.props.userSignUp({
      username: this.firstname.value, password: this.code.value, age: this.age.value
    });
    event.preventDefault();
  }

  handleLogout() {
    this.props.logoutUser();
  }


  render() {
    return (
      <React.Fragment>

        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/logo.png" height="30" width="41"
                alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-list fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-coffee fa-lg"></span> menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/staff">
                    <span className="fa fa-heart fa-lg"></span> Staff
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact2">
                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  {!this.props.auth.isAuthenticated ?
                    <div>
                      <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg"></span> Login
                      </Button>
                      <Button outline onClick={this.toggleModalTwo}>
                        <span className="fa fa-sign-in fa-lg"></span> SignUp
                      </Button>
                    </div>
                    :
                    <div>
                      <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                      <Button outline onClick={this.handleLogout}>
                        <span className="fa fa-sign-out fa-lg"></span> Logout
                      </Button>
                    </div>
                  }
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>GQ Launge Bar</h1>
                <p>We are aimed to provide services that you have never experienced before</p>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.isModalTwoOpen} toggle={this.toggleModalTwo}>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSignUp}>
              <FormGroup>
                <Label htmlFor="firstname">Write your Firstname</Label>
                <Input type="text" id="firstname" name="firstname"
                  innerRef={(input) => this.firstname = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="code">Write your Surname</Label>
                <Input type="password" id="code" name="code"
                  innerRef={(input) => this.code = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="age">How old are you?</Label>
                <Input type="number" id="age" name="age"
                  innerRef={(input) => this.age = input} />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Sign Up</Button>
            </Form>
          </ModalBody>
        </Modal>

        <div> {this.props.auth.errMess ?
          <div className="container">
            <div className="row">
              <div className="ml-auto">
                {this.props.auth.errMess}
              </div>
            </div>
          </div>
          :
          null}
        </div>

        <div> {this.props.auth.errMessTwo ?
          <div className="container">
            <div className="row">
              <div className="ml-auto">
                {this.props.auth.errMessTwo}
              </div>
            </div>
          </div>
          :
          null}
        </div>

      </React.Fragment>
    );
  }
}

export default Header;