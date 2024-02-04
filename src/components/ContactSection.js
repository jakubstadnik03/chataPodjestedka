import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  return (
    <Container className="contact-section my-5" id="kontakt">
      <Row>
        <Col md={6}>
          <h2>Kontaktní údaje</h2>
          <p>Jméno: Vaše Jméno</p>
          <p>Email: email@example.com</p>
          <p>Telefon: +420 123 456 789</p>
          <p>IČO: 12345678</p>
        </Col>
        <Col md={6}>
          <h2>Kontaktní formulář</h2>
          <Form>
            <Form.Group controlId="formGroupName">
              <Form.Label>Jméno</Form.Label>
              <Form.Control type="text" placeholder="Zadejte své jméno" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Zadejte svůj email" />
            </Form.Group>
            <Form.Group controlId="formGroupMessage">
              <Form.Label>Zpráva</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Odeslat
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Mapa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.7934248774654!2d14.971874776846935!3d50.70521787164198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470949cdec6217dd%3A0xae5ddf1eb8f1742a!2zQ2hhbHVwYSBQb2RqZcWhdMSbZGth!5e0!3m2!1scs!2scz!4v1707032087480!5m2!1scs!2scz"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
