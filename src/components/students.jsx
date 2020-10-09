import React from "react";

import StudentCard from "./studentCard";

const Students = ({ students, searchText, onSubmit, searchTag }) => {
  // Function to Filter Students by Name
  const filterByName = (students) => {
    return students.filter((student) => {
      let firstName = student.firstName.toLowerCase();
      let lastName = student.lastName.toLowerCase();
      let searchTerm = searchText.toLowerCase();
      return (
        firstName.indexOf(searchTerm) > -1 ||
        lastName.indexOf(searchTerm) > -1 ||
        (firstName + " " + lastName).indexOf(searchTerm) > -1
      );
    });
  };

  // Function to filter Students by Tag
  const filterByTag = (students) => {
    // Get Students with Tags Attached
    let studentsWithTags = students.filter((student) =>
      student.tags ? student : null
    );
    return studentsWithTags.filter((student) =>
      student.tags.includes(searchTag) ? true : false
    );
  };

  if (!students) return "Loading Student Data...";
  else {
    let filteredStudents = filterByName(students);

    if (searchTag !== "") {
      filteredStudents = filterByTag(filteredStudents);
    }
    return filteredStudents.map((student) => (
      <StudentCard key={student.id} student={student} onSubmit={onSubmit} />
    ));
  }
};

export default Students;
