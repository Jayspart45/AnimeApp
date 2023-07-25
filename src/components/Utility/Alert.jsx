import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Alerts({ message }) {
  const style = {
    marginBottom: "24px",
  };
  return (
    <Stack sx={style} spacing={2}>
      <Alert severity="warning">{message}</Alert>
    </Stack>
  );
}
