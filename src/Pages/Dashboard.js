import { Nav, Container, Row, Col } from "react-bootstrap";
import WeatherInfo from "../Components/Dashboard/WeatherInfo";
import CropInfo from "../Components/Dashboard/CropInfo";
import Apple from "../apple.png";

const Dashboard = () => {
  return (
    <Container fluid={true} className="dashboard">
      <Row>
        <Col lg={12}>
          <div className="info-container">
            <h1 className="page-title">Dashboard</h1>
            <p className="info">
              Get a brief overview of your crops and how the weather conditions
              are affecting them.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <WeatherInfo />
        </Col>
      </Row>
      <br></br>
      <Row style={{ marginTop: "20px" }}>
        <Col lg={8}>
          <CropInfo />
        </Col>
        <Col lg={4}>
          <div className="img-container" style={{ overflow: "hidden" }}>
            <img src={Apple} alt="apple" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
