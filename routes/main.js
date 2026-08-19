import express from "express";

import courseRouter from "./courses.js";
import { calculateAge } from "../util/date.js";

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

router.get("/resume", (req, res) => {
  const age = Math.trunc(calculateAge());
  const data = {
    ...req.data,
    title: "CV - Samantha Randolph",
    stylesheets: ["resume"],
    age,
  };
  res.render("resume", data);
});

export default router;

