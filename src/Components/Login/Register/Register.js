import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContect } from "../../../Context/UserContext";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContect);
  const [msg, setMessage] = useState();
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleUpdatUserProfile = (displayName, photoURL) => {
    const profile = {
      displayName: displayName,
      photoURL: photoURL,
    };
    console.log(profile);
    updateUserProfile(profile)
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const accountRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdatUserProfile(displayName, photoURL);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
    // setMessage("user Successfully Created");
  };

  const handleAccepted = (e) => {
    console.log(e.target.checked);
    setAccepted(e.target.checked);
  };
  return (
    <Form onSubmit={accountRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Display Name</Form.Label>
        <Form.Control type="text" name="displayName" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photo URL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          placeholder="Enter photoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/terms">Terms and Condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button
        variant="primary"
        className="mx-auto"
        type="submit"
        disabled={!accepted}
      >
        Submit
      </Button>
      <p className="text-danger">{msg}</p>
    </Form>
  );
};

export default Register;
