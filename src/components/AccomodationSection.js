import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Carousel,
} from "react-bootstrap";

import cottageImage from "../rozstani-pronajem1.jpg"; // Replace with the path to your image

const AccommodationSection = () => {
  return (
    <Container className="my-5 accommodation-section">
      <Row>
        <Col lg={12}>
          <h2 className="text-center mb-4">Ubytování na chalupě</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card>
            <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cottageImage}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cottageImage}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cottageImage}
                  alt="Third slide"
                />
              </Carousel.Item>
              {/* Add more Carousel.Item as needed for additional images */}
            </Carousel>
            <Card.Body>
              <Card.Title>Chalupa k pronajmutí</Card.Title>
              <Card.Text>
                Poskytuje ubytování pro 2 až 15 osob v 5 ložnicích.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Přízemí: Společenská místnost s televizí, hlavní kuchyně
                nadstandardně vybavena...
              </ListGroupItem>
              <ListGroupItem>
                1 apartmán s plně vybavenou kuchyňkou (pro 2 osoby), dvoulůžko,
                šatní skříň, TV...
              </ListGroupItem>
              <ListGroupItem>
                Apartmán č. 2 s kuchyňkou (pro 4 osoby), 2 dvoulůžka, šatní
                skříň, psací stůl...
              </ListGroupItem>
              <ListGroupItem>
                Apartmán č. 3 s podkrovním pokojem č. 4 (pro 2+5 osob),
                manželská postel, 5 matrací...
              </ListGroupItem>
              <ListGroupItem>
                Apartmán č. 5 (pro 2 osoby), manželská postel, komoda se
                zrcadlem...
              </ListGroupItem>
              <ListGroupItem>
                Venkovní posezení a stodola s možností grilování, udírna, pec na
                pizzu...
              </ListGroupItem>
              <ListGroupItem>
                Sociální zařízení: Společné pro všechny - v přízemí je
                samostatné WC, sprcha, sauna a dřevěná vana.
              </ListGroupItem>
              <ListGroupItem>
                Vytápění: Celý objekt je vytápěn tepelným čerpadlem, kromě
                stodoly...
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={6}>
          {/* You can add additional images or detailed descriptions here */}
          <h3>Wellness a relaxace</h3>
          <p>
            Wellness místnost má saunu, sprchu a dřevěnou vanu na teplou i
            studenou vodu.
          </p>
          <h3>Zábava a společenské vybavení</h3>
          <p>
            Stodola je vybavena stoly, židlemi, lavicí pro více než 15 osob,
            kuchyňským koutem...
          </p>
          {/* ... Add more content as needed */}
        </Col>
      </Row>
      {/* Continue adding Rows and Cols for additional content */}
    </Container>
  );
};

export default AccommodationSection;
