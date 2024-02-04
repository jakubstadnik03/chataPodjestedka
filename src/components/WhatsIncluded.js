import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faWifi,
  faSmokingBan,
  faUsers,
  faBabyCarriage,
  faFireAlt,
  faTv,
  faSnowflake,
  faSink,
  faTshirt,
  faBath,
  faSeedling,
  faSwimmer,
  faFire,
  faChair,
  faCircleNotch,
  faHotdog,
  faCar,
  faTree,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

const WhatsIncluded = () => {
  return (
    <Container className="amenities-section">
      <h1>Vybavení naší chalupy</h1>
      <Row className="text-center py-3">
        {/* ... Each Col represents an amenity ... */}
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faBan} />
          <p>Zákaz domácích mazlíčků</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faWifi} />
          <p>Wi-Fi Internet</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSmokingBan} />
          <p>Ne-kuřácký objekt</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faBath} />
          <p>chalupa se saunou </p>
        </Col>
        {/* ... Add more amenities as needed ... */}
      </Row>
      {/* ... Repeat Row for each set of amenities ... */}
      <Row className="text-center py-3">
        {/* Indoor Amenities */}
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faFireAlt} />
          <p>Vnitřní krb</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faTv} />
          <p>Televize</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSnowflake} />
          <p>Chalupa má vnitřní terasu</p>
        </Col>
        {/* ... Add more indoor amenities as needed ... */}
      </Row>
      {/* ... Repeat for Outdoor Amenities ... */}
      <Row className="text-center py-3">
        {/* Outdoor Amenities */}
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSeedling} />
          <p>Chalupa má vnější terasu</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSwimmer} />
          <p>Koupací sud</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faFire} />
          <p>Venkovní krb</p>
        </Col>
        {/* ... Add more outdoor amenities as needed ... */}
      </Row>
      {/* ... Repeat for Surroundings ... */}
      <Row className="text-center py-3">
        {/* Surroundings */}
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faCar} />
          <p>Parkování u chalupy</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faTree} />
          <p>Blízký les</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faHouseUser} />
          <p>Chalupa na samotě</p>
        </Col>
        {/* ... Add more surroundings amenities as needed ... */}
      </Row>
    </Container>
  );
};

export default WhatsIncluded;
