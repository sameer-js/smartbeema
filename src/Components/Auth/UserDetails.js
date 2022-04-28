import { Form, Button, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const UserDetails = ({ prevStep, nextStep, inputValues, handleChange }) => {
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className="page-info">
        <h3 className="section-title">Profile Info</h3>
        <p className="desc">
          Fill in the data for profile. It will take a couple of minutes. We
          only take the information we need.
        </p>
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
            <Form.Label className="label">Full Name</Form.Label>
            <Form.Control
              className="input-auth"
              type="text"
              defaultValue={inputValues?.fullName}
              name="fullName"
              required
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label className="label">Address</Form.Label>
            <Form.Control
              className="input-auth"
              type="text"
              defaultValue={inputValues?.address}
              name="address"
              required
              onChange={handleChange}
              placeholder="Enter your address"
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

          <Form.Group controlId="formContact">
            <Form.Label className="label">Contact</Form.Label>
            <Form.Control
              className="input-auth"
              type="number"
              defaultValue={inputValues?.contact}
              name="contact"
              required
              onChange={handleChange}
              placeholder="Enter your contact number."
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
