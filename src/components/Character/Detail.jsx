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
  // console.log(pass);
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
            {pass.name ? pass.name : pass.name_kanji}
          </h1>
          <p className="lead mb-2">
            Favorites : {pass.favorites !== null ? pass.favorites : "NaN"}
          </p>
          <p className="lead mb-2">
            NickNames :{" "}
            {pass.nicknames.length > 0
              ? pass.nicknames.map((item) => item) + "."
              : "NaN"}
          </p>
          <p className="lead mb-2">
            About : {pass.about !== null ? pass.about : "NaN"}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
