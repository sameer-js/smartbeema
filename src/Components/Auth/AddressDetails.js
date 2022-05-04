import { Form, Button, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ prevStep, nextStep, inputValues, handleChange }) => {
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const navigate = useNavigate();

  const saveAndContinue = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="page-info">
        <h3 className="section-title">Land Info</h3>
        <p className="desc">
          Fill in the details of your land and the crop you want to insurance
          for. The information you input will be verified by an official.
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
          <Form.Group controlId="formLandAddress">
            <Form.Label className="label">Land Address</Form.Label>
            <Form.Control
              className="input-auth"
              type="text"
              defaultValue={inputValues?.landAddress}
              name="landAddress"
              required
              onChange={handleChange}
              placeholder="Enter your land address"
            />
          </Form.Group>

          <Form.Group controlId="formKitta">
            <Form.Label className="label">Kitta Number</Form.Label>
            <Form.Control
              className="input-auth"
              type="number"
              defaultValue={inputValues?.kittaNumber}
              name="kittaNumber"
              required
              onChange={handleChange}
              placeholder="Enter your kitta Number"
            />
          </Form.Group>

          {/* <Form.Group controlId="formCrop">
            <Form.Label className="label">Crop</Form.Label>
            <Form.Control
              as="select"
              className="input-auth"
              type="se"
              defaultValue={inputValues?.crop}
              name="crop"
              required
              onChange={handleChange}
              placeholder="Select Crop"
            >
              <option value="apples">Apples</option>
            </Form.Control>
          </Form.Group> */}

          <Form.Group controlId="formCrop">
            <Form.Label className="label">Crop</Form.Label>
            <Form.Select
              className="input-auth"
              aria-label="Default select example"
              placeholder="Select Crop"
            >
              <option value="apples">Apples</option>
              <option disabled value="more">
                More Crops Soon
              </option>
            </Form.Select>
          </Form.Group>

          <div>
            <Button
              variant="secondary"
              className="prev-button control-button"
              onClick={back}
            >
              {backArrow} Back
            </Button>

            <Button
              className="next-button control-button"
              style={{ marginLeft: "auto" }}
              variant="primary"
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
