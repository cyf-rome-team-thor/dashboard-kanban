import React from "react";
import MoodRoundedIcon from "@material-ui/icons/MoodRounded";

const FaceIcon = props => {
  let faceIconVisibility;
  if (!props.hasMet) {
    faceIconVisibility = "hidden";
  }

  return <MoodRoundedIcon className={faceIconVisibility} />;
};

export default FaceIcon;