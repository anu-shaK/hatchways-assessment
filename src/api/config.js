import axios from "axios";

const URL = "https://api.hatchways.io/assessment/students";

export const getData = async () => {
  try {
    const {
      data: { students },
    } = await axios.get(URL);
    return students;
  } catch (error) {
    console.log(error);
  }
};
