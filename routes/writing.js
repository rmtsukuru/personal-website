import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    ...req.data,
    title: "Writing - Samantha Randolph",
  };
  res.render('writing', data);
});

router.get("/fiction", (req, res) => {
  const data = {
    ...req.data,
    title: "Fiction - Samantha Randolph",
  };
  res.render('fiction', data);
});

export default router;
