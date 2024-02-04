import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
// import logoImage from "./path-to-your-logo-image.png"; // Replace with the path to your logo image

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light pt-4 pb-2">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <img src={""} alt="Logo" className="footer-logo mb-2" />
            <p>Chalupa Podještědka - Ubytování v srdci přírody.</p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Kontaktní informace</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light">
                Adresa: U Přírody 123, 460 01 Liberec
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                Telefon: +420 123 456 789
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                Email: info@chalupapodjestědka.cz
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Odkazy</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light">
                Domů
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                O nás
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                Služby
              </ListGroup.Item>
              {/* Add more links as needed */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
