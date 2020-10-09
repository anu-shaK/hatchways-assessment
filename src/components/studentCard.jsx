import React, { useState } from "react";

import {
  makeStyles,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import StudentTestScores from "./studentTestScores";
import StudentData from "./studentData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "2rem",
    textTransform: "uppercase",
  },
  image: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    padding: "2em",
  },
  expandBtn: {
    cursor: "pointer",
  },
  grades: {
    marginTop: "2em",
  },
}));

const StudentCard = ({ student, onSubmit }) => {
  const classes = useStyles();

  // State to modify expanded view
  const [view, setView] = useState(false);

  // Function to compute average from student grades
  const computeGrade = (grades) => {
    let studentGrades = grades.reduce((array, a) => {
      return array.concat(parseInt(a));
    }, []);
    let sum = studentGrades.reduce((a, b) => {
      return a + b;
    }, 0);
    let avg = sum / grades.length;
    return avg;
  };

  // Function to expand and hide grades view
  const expandView = () => {
    setView(!view);
  };

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={classes.image}
            alt="Student Image"
            src={student.pic}
          />
        </ListItemAvatar>
        <ListItemText
          classes={{ primary: classes.heading }}
          primary={student.firstName + " " + student.lastName}
          secondary={
            <React.Fragment>
              <StudentData label="Email" data={student.email} />
              <StudentData label="Company" data={student.company} />
              <StudentData label="Skill" data={student.skill} />
              <StudentData
                label="Average"
                data={computeGrade(student.grades)}
              />
              <span className={classes.grades}>
                {view && (
                  <StudentTestScores
                    onSubmit={onSubmit}
                    student={student}
                    grades={student.grades}
                  />
                )}
              </span>
            </React.Fragment>
          }
        />

        {!view && (
          <AddIcon
            color="action"
            fontSize="large"
            className={classes.expandBtn}
            onClick={expandView}
          />
        )}
        {view && (
          <RemoveIcon
            color="action"
            fontSize="large"
            className={classes.expandBtn}
            onClick={expandView}
          />
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default StudentCard;
