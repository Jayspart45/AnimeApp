import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: "90vh",
  bgcolor: "#5e239d",
  border: "3px solid #f61067",
  color: "#f4f4ed",
  boxShadow: 24,
  outline: "none",
  overflow: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#f61067",
  p: 4,
};

const overflow = {
  // overflow: "auto",
};

export default function BasicModal({ handleClose, open, pass }) {
  if (pass.length <= 0) return;
  return (
    <div>
      <Modal
        sx={overflow}
        className="Modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="w-fullscreen mb-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={pass.images.webp.image_url} alt="" />
          </div>

          <h1 className="display-6 mb-5">
            {pass.title_english ? pass.title_english : pass.title_japanese}
          </h1>
          <p className="lead mb-2">
            About : {pass.background ? pass.background : pass.synopsis}
          </p>
          <p className="lead mb-2">Duration : {pass.duration}</p>
          <p className="lead mb-2">
            From : {pass.aired.string === null ? "NaN" : pass.aired.string}
          </p>
          <p className="lead mb-2">
            Type : {pass.type == null ? "NaN" : pass.type}
          </p>
          <p className="lead mb-2">
            Genre :{" "}
            {pass.genres == null
              ? "NaN"
              : pass.genres.map((item) => item.name) + "."}
          </p>
          <p className="lead mb-2">
            Producers :{" "}
            {pass.producers == null
              ? "NaN"
              : pass.producers.map((item) => item.name) + "."}
          </p>
          <p className="lead mb-2">
            Rank : {pass.rank <= 0 ? "NaN" : pass.rank}
          </p>
          <div onClick={handleClose} className=" text-center search-btn">
            Close
          </div>
        </Box>
      </Modal>
    </div>
  );
}
