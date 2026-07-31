import fs from "fs";

const courseContent = {
  markdown: null,
};

function loadCourseContent() {
  fs.readFile("courses/coding.md", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    courseContent.markdown = data;
  });
}

export {
  courseContent,
  loadCourseContent,
}

