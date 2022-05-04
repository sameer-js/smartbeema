import { Form, Button } from "react-bootstrap";
import Web3Context from "../hooks/Web3Context";
import { useState, useContext } from "react";

const Whitelist = () => {
  const [address, setAddress] = useState("0x0");
  const context = useContext(Web3Context);
  const handleSend = async () => {
    const txn = await context.insuranceContract?.methods
      .whiteListAddress(address)
      .send({
        from: context.account,
      });
    console.log(txn);
    console.log("succesfully done");
  };

  return (
    <Form className="loginform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h4>Wallet Address</h4>
          <h3>{context.account}</h3>
          <h4>{address}</h4>
        </Form.Label>
        <Form.Control type="text" placeholder="Enter address" />
        <input
          className="text-muted"
          onChange={(e) => {
            setAddress(e.target.value);
            console.log("called");
          }}
        />

        <Form.Control type="text" placeholder="Enter address" />
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

      <Button className="formbutton" variant="primary" onClick={handleSend}>
        Submit
      </Button>
    </Form>
  );
};

export default Whitelist;
