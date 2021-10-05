import React, { useState } from "react";
import { NavHashLink as HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

function Navigation() {
  const [tab, setTab] = useState(1);
  const [opacity, setOpacity] = useState(0);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };
  }

  return (
    <div className="container-fluid">
      <Navbar expand="lg" fixed="top" style={{ background: "white" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <GiHamburgerMenu style={{ color: "#808080", fontSize: "1.5rem" }} />
        </Navbar.Toggle>
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="nav-item">
            <HashLink as={Link} to="/#home" className="nav-item" activeStyle={{borderBottom:'3px solid #4285f4'}}>
                Home
            </HashLink>
            <NavLink as={Link} to="/events" className="nav-item" activeStyle={{borderBottom:'3px solid #4285f4'}}>
                Events
            </NavLink>
            <HashLink as={Link} to="/#contactus" className="nav-item" activeStyle={{borderBottom:'3px solid #4285f4'}}>
                Contact Us
            </HashLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
