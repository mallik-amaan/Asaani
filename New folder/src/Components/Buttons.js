import * as React from "react";
import Button from "@mui/material/Button";

function Buttons({value,varient,btsize,onClick}) {
  return <Button variant={varient} size={btsize} onClick={onClick}>{value}</Button>;
}

export default Buttons