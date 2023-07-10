import React, { useContext, useState } from "react";
import { CharacterContext } from "../Context/Context";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Loading from "../Utility/Loading";
import Detail from "./Detail";
export default function CharacterItem() {
  const { character } = useContext(CharacterContext);
  console.log(character);

  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState([]);

  const handleOpen = (data) => {
    setPass(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <>
      {character && character.length > 0 ? (
        character.map((data, index) => (
          <Col className="col col-12 mb-5 " key={index} md={3} sm={6} lg={2}>
            <Card onClick={() => handleOpen(data)}>
              <div className="card-top-img-container">
                <Card.Img
                  variant="top"
                  alt=""
                  src={data.images.jpg.image_url}
                />
              </div>
              <Card.Body className="text-white">
                Names : {data.name !== null ? data.name : "NaN"}
                <br />
                Favorites : {data.favorites !== null ? data.favorites : "NaN"}
                <br />
                NickNames :{" "}
                {data.nicknames.length > 0
                  ? data.nicknames.map((item) => item) + "."
                  : "NaN"}
                <br />
              </Card.Body>
              <Card.Text>
                About :{" "}
                {data.about !== null
                  ? data.about.split(" ").length > 180
                    ? data.about.split(" ").slice(0, 180).join(" ") + "..."
                    : data.about
                  : "NaN"}
              </Card.Text>
            </Card>
          </Col>
        ))
      ) : (
        <Loading />
      )}

      <Detail pass={pass} handleClose={handleClose} open={open} />
    </>
  );
}
