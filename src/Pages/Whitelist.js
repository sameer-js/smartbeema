import { Form, Button } from "react-bootstrap";

const Whitelist = () => {
  return (
    <Form className="loginform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h4>Wallet Address</h4>
        </Form.Label>
        <Form.Control type="email" placeholder="Enter address" />
        <Form.Text className="text-muted">
          Enter the wallet address that you want to whitelist.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I have reviewed and verified the smart contract information of the user."
          style={{
            textAlign: "left",
            width: "60%",
          }}
        />
      </Form.Group>

      <Button className="formbutton" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Whitelist;
