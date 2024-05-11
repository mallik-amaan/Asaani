import * as React from "react";
import Button from "@mui/material/Button";

function Buttons({value,varient}) {
  return <Button variant={varient}>{value}</Button>;
}

export default Buttons