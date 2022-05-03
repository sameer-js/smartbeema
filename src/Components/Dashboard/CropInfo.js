import { Card, ListGroup } from "react-bootstrap";

const CropInfo = ({ bg }) => {
  const infoCards = [
    {
      id: 1,
      description:
        "Apples make up half of the world’s deciduous fruit tree production.",
    },
    {
      id: 2,
      description: "Apple consumption may reduce the risk of cancer.",
    },
    {
      id: 3,
      description:
        "Under 60 mm rainfall, the production of apples decreases by 40%.",
    },
  ];

  return (
    <Card className="crop-info-container">
      <Card.Header>
        <h5>Info on Apples</h5>
      </Card.Header>
      <ListGroup variant="flush">
        {infoCards.map((info) => (
          <ListGroup.Item
            className="crop-details"
            key={info.id}
            style={{ background: bg }}
          >
            <p className="description">{info.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CropInfo;
