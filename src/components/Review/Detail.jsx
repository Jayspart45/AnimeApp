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
  console.log(pass.name);
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
            <img src={pass.user.images.webp.image_url} alt="" />
          </div>

          <h1 className="display-6 mb-4">{pass.entry.title}</h1>
          <p className="lead mb-2">
            Spoiler : {!pass.is_spoiler ? "No Spoiler" : "Spoiler"}
          </p>
          <p className="lead mb-2">
            Rating : {pass.score == null ? "NaN" : pass.score + "/10"}
          </p>
          <p className="lead mb-2">
            Status : {pass.tags == null ? "NaN" : pass.tags}
          </p>

          <p className="lead mb-2">
            Year : {pass.date == null ? "NaN" : pass.date.split("T")[0]}
          </p>
          <p className="lead mb-2">
            Type : {pass.type == null ? "NaN" : pass.type}
          </p>
          <p className="lead mb-2">UserName : {pass.user.username}</p>
          <p className="lead mb-2">
            Review : {pass.review == null ? "NaN" : pass.review}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
