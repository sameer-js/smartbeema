import { useState } from "react";
import UserDetails from "../Components/Auth/UserDetails";
import AddressDetails from "../Components/Auth/AddressDetails";
import { Row, Col } from "react-bootstrap";
import AuthBack from "../AuthBack.png";
import Logo from "../logo.png";
import { AnimatePresence, motion } from "framer-motion";

const Register = () => {
  const [step, setStep] = useState(1); // 1 through 3.

  return (
    <Row>
      <Col style={{ paddingTop: "50px" }} lg={{ span: 5, offset: 1 }}>
        <img src={Logo} alt="logo for smartbeema" />
        <div className="indicator">
          Step{" "}
          <AnimatePresence exitBeforeEnter>
            {step % 2 === 0 ? (
              <motion.div
                style={{ display: "inline-block" }}
                key={step}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                {step}
                {"  "}
              </motion.div>
            ) : (
              <motion.div
                style={{ display: "inline-block" }}
                key={step}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                {step}
              </motion.div>
            )}
          </AnimatePresence>{" "}
          of 3
        </div>
        <WithForm step={step} setStep={setStep} />
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

export default Register;

const WithForm = ({ step, setStep }) => {
  const [values, setValues] = useState({});

  const nextStep = () => {
    setStep((prevValue) => prevValue + 1);
  };

  const prevStep = () => {
    setStep((prevValue) => prevValue - 1);
  };

  const handleChange = (event) => {
    // setState({ [event.target.name]: event.target.value });
    console.log(event);
  };

  switch (step) {
    case 1:
      return (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          key="user"
        >
          <UserDetails
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            inputValues={values}
          />
        </motion.div>
      );
    case 2:
      return (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          key="land"
        >
          <AddressDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            inputValues={values}
          />
        </motion.div>
      );
    // case 3:
    //   return (
    //     <Confirmation
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //       inputValues={inputValues}
    //     />
    //   );
  }
};
