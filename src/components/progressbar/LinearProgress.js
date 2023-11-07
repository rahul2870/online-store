
import React from "react";
import StyledLinearProgress from "./LinearProgressStyle";


const LinearProgress = (props) => {
  return <StyledLinearProgress {...props} />;
};

LinearProgress.defaultProps = {
  variant: "determinate",
  color: "primary",
  thickness: 6,
  value: 75,
};

export default LinearProgress;
