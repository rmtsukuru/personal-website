import express from "express";
import { marked } from "marked";

import { sanitize } from "../util/dom.js";
import { courseContent } from "../util/course_content.js";

const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    ...req.data,
    title: "Courses - Samantha Randolph",
  };
  res.render('courses', data);
});

router.get("/coding", (req, res) => {
  const content = sanitize(marked.parse(courseContent.markdown));
  const data = {
    ...req.data,
    title: "Computer Science - Courses",
    content,
  };
  res.render('coding_overview', data);
});

export default router;

