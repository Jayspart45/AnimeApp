import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import ReviewProvider from "../Context/ReviewProvider";

export default function Review() {
  return (
    <ReviewProvider>
      <ReviewList />
    </ReviewProvider>
  );
}
