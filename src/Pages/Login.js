import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import AuthBack from "../AuthBack.png";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.png";

const Login = ({ inputValues }) => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
  };

  return (
    <Row>
      <Col style={{ paddingTop: "50px" }} lg={{ span: 5, offset: 1 }}>
        <img src={Logo} alt="logo for smartbeema" />

        <div className="page-info">
          <h3 className="section-title">Login</h3>
          <p className="desc">Enter your login credentials</p>
        </div>
        <Container
          style={{
            paddingTop: "30px",
            paddingBottom: "60px",
            border: "1.11327px solid #E2E4E5",
            borderRadius: "8px",
          }}
        >
          <Form>
            <Form.Group as={Col} controlId="formFullName">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control
                className="input-auth"
                type="email"
                defaultValue={inputValues?.fullName}
                name="email"
                required
                placeholder="Enter your Email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                className="input-auth"
                type="password"
                defaultValue={inputValues?.password}
                name="password"
                required
                placeholder="Enter your password."
              />
            </Form.Group>

            <Button
              className="next-button control-button"
              // style={{ marginLeft: "auto" }}
              variant="success"
              onClick={login}
            >
              Login <span>{arrow}</span>
            </Button>
          </Form>
        </Container>
      </Col>
      <Col lg={{ span: 4, offset: 1 }}>
        <div
          style={{ height: "100vh", display: "grid", placeItems: "center" }}
          className="image-container-form"
        >
          <div style={{ width: "500px", height: "500px" }}>
            <img
              width="100%"
              height="auto"
              src={AuthBack}
              alt="just background for a green view"
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;

const arrow = (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.32849 14.7676L8.07849 8.01758L1.32849 1.26758"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const backArrow = (
  <motion.svg
    initial={{ rotate: 180 }}
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.32849 14.7676L8.07849 8.01758L1.32849 1.26758"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </motion.svg>
);
