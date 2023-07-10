import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import LoaderExample from "../Utility/Loading";
import { ReviewContext } from "../Context/Context";
import Detail from "./Detail";
export default function ReviewItem() {
  const { review } = useContext(ReviewContext);
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState([]);

  const handleOpen = (data) => {
    setPass(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  console.log(review);
  return (
    <>
      {review && review.length > 0 ? (
        review.map((data, index) => (
          <Col className="col col-12 mb-5 " key={index} md={3} sm={6} lg={2}>
            <Card onClick={() => handleOpen(data)}>
              <div className="card-top-img-container">
                <Card.Img
                  variant="top"
                  src={data.entry.images.jpg.image_url}
                  alt=""
                />
              </div>

              <Card.Body className="text-white">
                <p>{data.entry.title}</p>
                <p>Rating: {data.score == null ? "NaN" : data.score + "/10"}</p>
                <p>Status: {data.tags == null ? "NaN" : data.tags}</p>
                <p>
                  Year: {data.date == null ? "NaN" : data.date.split("T")[0]}
                </p>
                <p>Type: {data.type == null ? "NaN" : data.type}</p>
              </Card.Body>
              <Card.Text>
                UserName : {data.user.username}
                <br />
                {data.review == null
                  ? "NaN"
                  : data.review.split(" ").length > 150
                  ? data.review.split(" ").slice(0, 150).join(" ") + "..."
                  : data.review}
              </Card.Text>
            </Card>
          </Col>
        ))
      ) : (
        <LoaderExample />
      )}
      <Detail pass={pass} handleClose={handleClose} open={open} />
    </>
  );
}
