import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [allowed, setAllowed] = useState(false);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  const navigate = useNavigate();

  const emailChange = (e) => {
    if (e.target.value === "smartbeema@gmail.com") {
      setEmail(false);
      if (!password) setAllowed(true);
    }
  };

  const passwordChange = (e) => {
    if (e.target.value === "12345") {
      setPassword(false);
      if (!email) setAllowed(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (allowed) navigate("/whitelist");
  };

  return (
    <Form className="loginform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h5>Email address</h5>
        </Form.Label>
        <Form.Control
          onChange={emailChange}
          required
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Do not share whitelist email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          <h5>Password</h5>
        </Form.Label>
        <Form.Control
          onChange={passwordChange}
          required
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button
        disabled={!allowed}
        onClick={submit}
        className="formbutton"
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default Admin;
