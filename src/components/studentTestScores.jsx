import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import styles from "./studentTestScores.module.css";

const StudentTestScores = ({ grades, student, onSubmit }) => {
  // State to handle tags inputted
  const [tag, setTag] = useState("");

  // Function to change tag input field value
  const handleTextChange = (text) => {
    setTag(text);
  };
  return (
    <span>
      {/* Display student grades */}
      {grades.map((grade) => (
        <Typography
          variant="body2"
          component="span"
          display={"block"}
          key={Math.random()}
        >
          Test {grades.indexOf(grade) + 1} : {grade}%
        </Typography>
      ))}

      {/* To display tag list */}
      <span className={styles.tags} key={Math.random()}>
        {student.tags &&
          student.tags.map((tag) => (
            <label key={Math.random()} className={styles.label}>
              {tag}
            </label>
          ))}
      </span>

      {/* Input Field for adding Tags */}
      <input
        className={styles.addTagField}
        id="add-tag-input"
        placeholder="Add a tag"
        value={tag}
        onChange={(e) => handleTextChange(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" ? (onSubmit(tag, student), setTag("")) : null
        }
      />
    </span>
  );
};

export default StudentTestScores;
