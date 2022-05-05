import { Card, Button, Container, Row, Col } from "react-bootstrap";
import WeatherInfo from "../Components/Dashboard/WeatherInfo";
import CropInfo from "../Components/Dashboard/CropInfo";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Web3 from "web3";
import Web3Context from "../hooks/Web3Context";

const Claim = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedReg, setClickedReg] = useState(false);
  const context = useContext(Web3Context);

  const onClick = async () => {
    setClicked(!clicked);
    // do the registration contract call
    const txn = await context.insuranceContract.methods.claimInsurance().send({
      from: context.account,
    });

    console.log(txn);
    console.log("succesfully done");
  };

  const onClickReg = async () => {
    setClickedReg(!clickedReg);
    // do the registration contract call
    const txn = await context.insuranceContract.methods.register().send({
      from: context.account,
      value: Web3.utils.toWei("0.001"),
    });

    console.log(txn);
    console.log("succesfully done");
  };

  return (
    <Container fluid={true} className="dashboard">
      <Row>
        <Col lg={12}>
          <div className="info-container">
            <h1 className="page-title">Register</h1>
            <p className="info">
              Please register first if you have not registered yet.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{
              height: "200px",
              position: " relative",
              border: `2px solid ${!clickedReg ? "green" : "#333333"}`,
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
                User Registration
              </motion.h5>
              <AnimatePresence exitBeforeEnter>
                {!clickedReg ? (
                  <motion.p
                    key="not-registered"
                    initial={{ y: 100, z: 100, opacity: 0 }}
                    animate={{ y: 0, z: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: -100, z: -100, opacity: 0 }}
                    style={{ fontSize: "16px", paddingTop: "10px" }}
                    className="location-info"
                  >
                    Hit register if you want to initiate a request for your user
                    registration. This is a one time process and you need to
                    complete this step before proceeding further. After proper
                    review, you will be notified in your registered contact
                    number on any updates to your registration. You can also
                    come back here to check your issue status.
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
                    Your issue has been processed, proceed further in the
                    <b> MetaMask</b> popup from your browser extension. Hit
                    Claim in the section below to claim your pending amount.
                  </motion.p>
                )}
              </AnimatePresence>
            </Card.Header>
            <Button
              disabled={clickedReg}
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
              variant={!clickedReg ? "success" : "secondary"}
              onClick={onClickReg}
            >
              {!clickedReg ? "Register" : "✔ Done"}
            </Button>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col lg={12}>
          <div className="info-container">
            <h1 className="page-title">Claim</h1>
            <p className="info">
              Here, you can make your claims and also see all of your past
              claims and their status from the Kovan redirection link.
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
              border: `2px solid ${!clicked ? "green" : "#333333"}`,
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
                    Hit claim if you want to initiate a request for the
                    insurance amount. After proper review of your claim, you
                    will be notified from you MetaMask browser extension on any
                    updates to your claim.
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
                    The pending amount has been claimed successfully. Please
                    check it in the
                    <b> MetaMask</b> popup from your browser extension.
                    <br></br>
                    Check your Transaction Statement from the :{" "}
                    <a
                      href="https://kovan.etherscan.io/address/0xC2efb6E027f0539620553825DdedC939deFA84bb"
                      target="_blank"
                    >
                      Etherscan - Kovan Network site
                    </a>
                    .
                  </motion.p>
                )}
              </AnimatePresence>
            </Card.Header>
            <Button
              disabled={clicked}
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
              variant={!clicked ? "success" : "secondary"}
              onClick={onClick}
            >
              {!clicked ? "Claim" : "✔ Claimed"}
            </Button>
          </Card>
        </Col>
      </Row>
      {/* <Row lg={12}>Dummy</Row> */}
    </Container>
  );
};

export default Claim;
