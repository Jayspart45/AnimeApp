import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Detail from "./Detail";

export default function Animeitem({ anime }) {
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState([]);

  const handleOpen = (data) => {
    setPass(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {anime.data.map((data, index) => (
        <Col className="col mb-5" key={index} md={3} sm={6} lg={2}>
          <Card onClick={() => handleOpen(data)}>
            <div className="card-top-img-container">
              <Card.Img variant="top" src={data.images.jpg.image_url} alt="" />
            </div>
            <Card.Body className="text-white">
              <p>{data.title_english}</p>
              <p>Episodes: {data.episodes == null ? "NaN" : data.episodes}</p>
              <p>Rating: {data.score == null ? "NaN" : data.score + "/10"}</p>
              <p>Status: {data.status == null ? "NaN" : data.status}</p>
              <p>Year: {data.year == null ? "NaN" : data.year}</p>
            </Card.Body>
            <Card.Text>
              {data.synopsis == null
                ? "NaN"
                : data.synopsis.split(" ").length > 180
                ? data.synopsis.split(" ").slice(0, 180).join(" ") + "..."
                : data.synopsis}
            </Card.Text>
          </Card>
        </Col>
      ))}

      <Detail pass={pass} handleClose={handleClose} open={open} />
    </>
  );
}
