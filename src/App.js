import Sidebar from "./Layout/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Claim from "./Pages/Claim";
import Admin from "./Pages/Admin";
import History from "./Pages/History";
import Profile from "./Pages/Profile";
import Whitelist from "./Pages/Whitelist";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Smart Contract Part
import ABIJSON from "./artifacts/contracts/Khaderi.sol/Khaderi.json";
import MetaMaskMissing from "./wallet/provider_error";
import Loading from "./wallet/loading";
import Web3Context from "./hooks/Web3Context";

/* importing CSS */
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import useWeb3 from "./hooks/web3";

import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { isLoading, web3, account, hasMetamask } = useWeb3();
  const [insuranceContract, setInsuranceContract] = useState();
  const [tradeContract, setTradeContract] = useState();
  const [isConfigured, setIsConfigured] = useState(false);

  const contractAddress = "0xD8D147612CE3eE27a27e5a16096f3082b00901aF";
  // const contractAddress = "0xcBc5fCE3cdB645D5768EbB10161215F38d9eDE1C";

  useEffect(() => {
    (async () => {
      if (web3 !== null) {
        const _networkId = await web3.eth.net.getId().then((e) => e.toString());
        const abi = ABIJSON.abi;
        const contract_instance = new web3.eth.Contract(abi, contractAddress);

        setInsuranceContract(contract_instance);
        setIsConfigured(true);
      }
    })();
  }, [web3]);

  if (!isLoading && !hasMetamask) {
    return <MetaMaskMissing />;
  }
  if (isLoading || !isConfigured) {
    return <Loading />;
  }

  return (
    <Web3Context.Provider
      value={{
        web3,
        insuranceContract,
        account,
      }}
    >
      <Container fluid={true} className="app">
        <Row>
          {isLoggedIn && (
            <Col lg={2} className="sidebar-container">
              <Sidebar />
            </Col>
          )}
          <Col>
            {/* Routing */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/claim" element={<Claim />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/whitelist" element={<Whitelist />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Web3Context.Provider>
  );
}

export default App;
