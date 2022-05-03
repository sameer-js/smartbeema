import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Whitelist = () => {
  return (
    <Form className="loginform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h5>Email address</h5>
        </Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Do not share whitelist email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          <h5>Password</h5>
        </Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>

      <Link to="/whitelist">
        <Button className="formbutton" variant="primary" type="submit">
          Submit
        </Button>
      </Link>
    </Form>
  );
};

export default Whitelist;
