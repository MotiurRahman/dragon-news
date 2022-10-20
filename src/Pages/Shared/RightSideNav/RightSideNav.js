import React, { useContext } from "react";
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
import BrandCarosoul from "../BrandCarosoul/BrandCarosoul";
import { AuthContect } from "../../../Context/UserContext";

const RightSideNav = () => {
  const { signInwithGoogle, signInwithGithub } = useContext(AuthContect);
  const handleGoogleLogin = () => {
    signInwithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    signInwithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleLogin} variant="outline-primary">
          <FaGoogle /> Login with google
        </Button>
        <Button onClick={handleGithubLogin} variant="outline-dark">
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
      </div>
      <BrandCarosoul></BrandCarosoul>
    </div>
  );
};

export default RightSideNav;
