import React from "react";
import Row from "react-bootstrap/Row";
import ReviewItem from "./ReviewItem";

export default function ReviewList() {
  return (
    <>
      <h1 className="display-1 otaku text-center mt-5 animetxt">Review</h1>
      <Row className="mt-5">{<ReviewItem />}</Row>
    </>
  );
}
