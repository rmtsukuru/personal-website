import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    ...req.data,
    title: "Samantha Randolph",
  };
  res.render('index', data);
});

router.get("/about", (req, res) => {
  const data = {
    ...req.data,
    title: "About - Samantha Randolph",
  };
  res.render('about', data);
});

router.get("/courses", (req, res) => {
  const data = {
    ...req.data,
    title: "Courses - Samantha Randolph",
  };
  res.render('courses', data);
});

export default router;

