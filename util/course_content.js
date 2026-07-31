import fs from "fs";

const courseContent = {
  markdown: null,
};

function loadCourseContent() {
  try {
    const data = fs.readFileSync("courses/coding.md", "utf8");
    courseContent.markdown = data;
  } catch(err) {
    console.error("Error reading file:", err);
    return;
  }
}

export {
  courseContent,
  loadCourseContent,
}

