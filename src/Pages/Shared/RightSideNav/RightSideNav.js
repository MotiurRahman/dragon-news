import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "react-bootstrap";
import BrandCarousel from "../Brand/BrandCarousel";

const RightSideNav = () => (
  <div>
    <ButtonGroup vertical>
      <Button variant="outline-primary">
        <FaGoogle /> Login with google
      </Button>
      <Button variant="outline-dark">
        <FaGithub></FaGithub> Login wiht github
      </Button>
    </ButtonGroup>
    <div>
      <h5>Find us on</h5>
      <ListGroup>
        <ListGroup.Item className="mb-2">
          <FaFacebook></FaFacebook> Facebook
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitter></FaTwitter> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaWhatsapp></FaWhatsapp> Whatsapp
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          Porta ac consectetur ac
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  </div>
);

export default RightSideNav;
