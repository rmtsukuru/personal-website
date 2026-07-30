import express from "express";

import router from "./routes/main.js";
import { injectGlobals } from "./middleware.js";

const PORT = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('assets'));
app.use(injectGlobals);
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

