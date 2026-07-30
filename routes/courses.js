import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    ...req.data,
    title: "Courses - Samantha Randolph",
  };
  res.render('courses', data);
});

router.get("/coding", (req, res) => {
  const data = {
    ...req.data,
    title: "Computer Science - Courses",
  };
  res.render('coding_overview', data);
});

export default router;

