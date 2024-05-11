import * as React from "react";
import Button from "@mui/material/Button";

function Buttons({value,varient,btsize}) {
  return <Button variant={varient} size={btsize}>{value}</Button>;
}

export default Buttons