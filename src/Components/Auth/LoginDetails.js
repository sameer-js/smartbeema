import { Form, Button, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AuthBack from "../AuthBack.png";

const LoginDetails = ({ inputValues }) => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="page-info">
        <h3 className="section-title">Login</h3>
        <p className="desc">Enter your login credentials</p>
      </div>
      <Container
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
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
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Enter your password."
            />
          </Form.Group>

          <div>
            <Button
              variant="secondary"
              className="prev-button control-button"
              disabled={true}
              style={{ cursor: "not-allowed" }}
              onClick={back}
            >
              {backArrow} Back
            </Button>

            <Button
              className="next-button control-button"
              style={{ marginLeft: "auto" }}
              variant="success"
              onClick={saveAndContinue}
            >
              Next <span>{arrow}</span>
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default UserDetails;

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
