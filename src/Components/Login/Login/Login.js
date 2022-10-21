import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContect } from "../../../Context/UserContext";

const Login = () => {
  const { loginUser } = useContext(AuthContect);
  const [msg, setMessage] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const accountLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
    console.log(email, password);
  };
  return (
    <div>
      <Form onSubmit={accountLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" className="mx-auto" type="submit">
          Submit
        </Button>
        <p className="text-danger">{msg}</p>
      </Form>
    </div>
  );
};

export default Login;
