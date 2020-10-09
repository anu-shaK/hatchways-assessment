import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    display: "flex",
    flexDirection: "column",
  },
}));
const StudentData = ({ data, label }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.text}
      component="span"
      variant="body2"
      color="textPrimary"
    >
      {label}: {data}
    </Typography>
  );
};

export default StudentData;
