import express from "express";
import courseRouter from "./courses.js";

const router = express.Router();

router.use("/courses", courseRouter);

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

export default router;

