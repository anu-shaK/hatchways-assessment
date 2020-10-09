import React, { Component } from "react";
import styles from "./App.module.css";

import { getData } from "./api/config";
import Students from "./components/students";
import SearchBar from "./components/searchBar";

class App extends Component {
  state = { students: [], searchText: "", searchTag: "" };

  async componentDidMount() {
    const students = await getData();
    this.setState({ students });
  }

  // Function to change text in search by text
  handleTextChange = (text) => {
    this.setState({ searchText: text });
  };

  // Function to change text in search by tag
  handleTagChange = (text) => {
    this.setState({ searchTag: text });
  };

  // Function to add an array of tags to student object
  handleSubmit = (tag, student) => {
    const { students } = this.state;
    let newStudents = [];
    for (let obj of students) {
      if (obj.id !== student.id) newStudents.push(obj);
      else {
        let newObj = { ...obj };
        if ("tags" in newObj) {
          newObj["tags"] = [...newObj["tags"], tag];
        } else {
          newObj["tags"] = [tag];
        }
        newStudents.push(newObj);
      }
    }
    this.setState({ students: newStudents });
  };

  render() {
    const { students, searchText, searchTag } = this.state;
    return (
      <>
        <SearchBar
          id="name-input"
          className={styles.searchByName}
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => this.handleTextChange(e.target.value)}
        />
        <SearchBar
          id="tag-input"
          className={styles.searchByName}
          placeholder="Search by tag"
          value={searchTag}
          onChange={(e) => this.handleTagChange(e.target.value)}
        />
        <Students
          onSubmit={this.handleSubmit}
          searchText={searchText}
          searchTag={searchTag}
          students={students}
        />
        ;
      </>
    );
  }
}

export default App;
