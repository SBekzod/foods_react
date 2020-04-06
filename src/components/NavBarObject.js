import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return ( 
    <div className="positioning">
      <Navbar className="coloring" light expand="md">
        <NavbarBrand href="/menu">
          <img src="assets/logo.png" height="30" width="40" alt="GQ Bar" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu"><span className="fa fa-coffee fa-lg"></span> Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"><span className="fa fa-info fa-lg"></span> CF Contacts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact2"><span className="fa fa-info fa-lg"></span> UF Contacts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/staff">Staff</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Others
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#">
                  About
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/form">
                  HOT DISHES
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;