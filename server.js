import express from "express";

import router from "./routes/main.js";
import { injectGlobals } from "./util/middleware.js";
import { loadCourseContent } from "./util/course_content.js";

const PORT = 8000;

const app = express();


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('assets'));
app.use(injectGlobals);
app.use(router);

// TODO switch this to use async/await before starting server maybe?
loadCourseContent();

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

