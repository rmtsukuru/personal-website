import express from "express";

const PORT = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('assets'));

function injectGlobals(req, res, next) {
  const year = new Date().getFullYear();
  const courses = [
    { name: "Computer Science", path: "coding" },
    { name: "English", path: "english" },
    { name: "Math", path: "math" },
  ];

  req.data = {
    year,
    courses,
  };
  next();
}

app.use(injectGlobals);

app.get("/", (req, res) => {
  const data = {
    ...req.data,
    title: "Samantha Randolph",
  };
  res.render('index', data);
});

app.get("/about", (req, res) => {
  const data = {
    ...req.data,
    title: "About - Samantha Randolph",
  };
  res.render('about', data);
});

app.get("/courses", (req, res) => {
  const data = {
    ...req.data,
    title: "Courses - Samantha Randolph",
  };
  res.render('courses', data);
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

