import React from "react";
import "./header.css";
import {RiHome3Fill} from "react-icons/ri"
import {Button} from "react-bootstrap"

import { Navbar, NavbarBrand, NavLink,Nav, NavDropdown, NavItem ,NavDropdownItem} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar   className="navbar" expand="sm">
        <NavbarBrand className="ms-2">
          <RiHome3Fill className="icon" />
          <span className="ps-1 pt-5 icontext">Estatery</span>
        </NavbarBrand>
        <Navbar.Toggle />
        {/* for mobile view */}
        <Navbar.Collapse>
          <Nav>
            <NavLink className="navitem ms-sm-2 ms-lg-5" href="products">
              Rent
            </NavLink>
            <NavLink className=" navitem ms-sm-2 ms-lg-5" href="products">
              Buy
            </NavLink>
            <NavLink className=" navitem ms-sm-2 ms-lg-5" href="products">
              Sell
            </NavLink>

            <NavDropdown className="navitem ms-sm-2 ms-lg-5" title="ManageProperty">
              <NavDropdown.Item>Property1</NavDropdown.Item>
              <NavDropdown.Item>Property2</NavDropdown.Item>
              <NavDropdown.Item>Property3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className=" navitem ms-sm-2 ms-lg-5" title="Resources">
              <NavDropdown.Item>Resource1</NavDropdown.Item>
              <NavDropdown.Item>Resouce2</NavDropdown.Item>
              <NavDropdown.Item>Resource3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button className="btn1 me-4">Login</Button>
        <Button className=" btn2 me-4">Signup</Button>

      </Navbar>
    </>
  );
};

export default Header;
