import React, { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContect } from "../../Context/UserContext";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContect);

  const displayNameref = useRef(user?.displayName);
  const photoURLref = useRef(user?.photoURL);

  const updateProfile = (e) => {
    e.preventDefault();
    const displayName = displayNameref.current.value;
    const photoURL = photoURLref.current.value;

    console.log(displayName, photoURL);
    const profile = { displayName, photoURL };

    updateUserProfile(profile)
      .then(() => {
        toast("Profile updated successfully");
      })
      .catch(() => {});
  };

  return (
    <Form onSubmit={updateProfile}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Display Name</Form.Label>
        <Form.Control
          ref={displayNameref}
          defaultValue={user?.displayName}
          type="text"
          name="displayName"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photo URL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          defaultValue={user?.photoURL}
          ref={photoURLref}
          placeholder="Enter photoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          type="email"
          defaultValue={user?.email}
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Button variant="primary" className="mx-auto" type="submit">
        Update Profile
      </Button>
    </Form>
  );
};

export default Profile;
