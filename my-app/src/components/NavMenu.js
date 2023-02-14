import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = (event) => {
    setCollapsed(false);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light
      >
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-black" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-black" to="/upload-file">
                Upload file
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-black" to="/view-data">
                View data
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};
