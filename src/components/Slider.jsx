import React from "react";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.webp";
import img3 from "../assets/slider3.webp";
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Naruto</h3>
          <p>
            {" "}
            Naruto will carry on with the fight for what is important to him,
            even at the expense of his own body, in the continuation of the saga
            about the boy who wishes to become Hokage.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Tomodachi Game</h3>
          <p>
            {" "}
            High school student Yuuichi Katagiri cherishes his close circle of
            friends, composed of four classmates: Yutori Kokorogi, Shiho
            Sawaragi, Makoto Shibe, and Tenji Mikasa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Classroom Of Elite</h3>
          <p>
            The students enjoy an unparalleled amount of freedom, and it is
            ranked highly in Japan. However, the reality is less than ideal.
            Four classes, A through D, are ranked in order of merit, and only
            the top classes receive favorable treatment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
