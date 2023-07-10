import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import ReviewProvider from "../Context/ReviewProvider";
import Pagination from "../Utility/Pagination";

export default function Review() {
  return (
    <ReviewProvider>
      <ReviewList />
      {/* <Pagination /> */}
    </ReviewProvider>
  );
}
