import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./navbar.css"; // Your custom CSS file

const NavbarComponent = () => {
  const [stickyClass, setStickyClass] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setStickyClass("sticky-nav");
    } else {
      setStickyClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`transparent-navbar ${stickyClass}`}>
      <div className="navbar-container">
        {" "}
        {/* Added container div */}
        <Navbar expand="lg">
          <Navbar.Brand href="/">Chalupa Podještědka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {" "}
              {/* Adjusted for alignment */}
              <HashLink to="/#ubytovani" className="nav-link">
                Informace o ubytování
              </HashLink>
              <Nav.Link href="/fotogalerie">Fotogalerie</Nav.Link>
              <Nav.Link href="/reference">Reference</Nav.Link>
              <HashLink to="/#kontakt" className="nav-link button-main">
                Kontaktovat
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
