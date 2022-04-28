import { Card, Button, Container, Row, Col } from "react-bootstrap";
import WeatherInfo from "../Components/Dashboard/WeatherInfo";
import CropInfo from "../Components/Dashboard/CropInfo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Claim = () => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container fluid={true} className="dashboard">
      <Row>
        <Col lg={12}>
          <div className="info-container">
            <h1 className="page-title">Claim</h1>
            <p className="info">
              Here, you can make your claims and also see all of your past
              claims and their status.
            </p>
            {/* <img src="" alt="" className="logo" /> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{
              height: "200px",
              position: " relative",
              border: `2px solid ${!clicked ? "green" : "#FFCA2C"}`,
              overflow: "hidden",
            }}
            className="claim-info weather-info-container"
          >
            <Card.Header
              style={{
                paddingTop: "30px",
                paddingLeft: "36px",
                paddingRight: "30px",
              }}
            >
              <motion.h5
                initial={{ y: 100, z: 100, opacity: 0 }}
                animate={{ y: 0, z: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: -100, z: -100, opacity: 0 }}
              >
                {!clicked ? "Claim" : "Current"} issue
              </motion.h5>
              <AnimatePresence exitBeforeEnter>
                {!clicked ? (
                  <motion.p
                    key="not-claimed"
                    initial={{ y: 100, z: 100, opacity: 0 }}
                    animate={{ y: 0, z: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: -100, z: -100, opacity: 0 }}
                    style={{ fontSize: "16px", paddingTop: "10px" }}
                    className="location-info"
                  >
                    Hit claim if you want to initiate a request the insurance
                    amount. After proper review of your claim, you will be
                    notified in your registered contact number on any updates to
                    your claim. You can also come back here to check your issue
                    status.
                  </motion.p>
                ) : (
                  <motion.p
                    key="claimed"
                    initial={{ y: 100, z: 100, opacity: 0 }}
                    animate={{ y: 0, z: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: -100, z: -100, opacity: 0 }}
                    style={{ fontSize: "16px", paddingTop: "10px" }}
                    className="location-info"
                  >
                    Your issue is being processed, hit cancel if you want to
                    cancel the request.
                  </motion.p>
                )}
              </AnimatePresence>
            </Card.Header>
            <Button
              style={{
                // background: "#5D913C",
                marginLeft: "auto",
                marginRight: "20px",
                marginBottom: "10px",
                position: "absolute",
                bottom: "20px",
                right: "20px",
                width: "200px",
              }}
              variant={!clicked ? "success" : "warning"}
              onClick={onClick}
            >
              {!clicked ? "Claim" : "Cancel"}
            </Button>
          </Card>
        </Col>
      </Row>
      {/* <Row lg={12}>Dummy</Row> */}
    </Container>
  );
};

export default Claim;
