import express from "express";

const PORT = 8000;

const app = express();
const year = new Date().getFullYear();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('assets'));

app.get("/", (req, res) => {
  // TODO: add a globals middleware or something to add in year/menu data 
  // on every page automatically
  const data = {
    title: "Samantha Randolph",
    year,
  };
  res.render('index', data);
});

app.get("/about", (req, res) => {
  const data = {
    title: "About - Samantha Randolph",
    year,
  };
  res.render('about', data);
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

