import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNave/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Container>
          <Row>
            <Col lg={2}>
              <LeftSideNav></LeftSideNav>
            </Col>
            <Col lg={7}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightSideNav></RightSideNav>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Main;
