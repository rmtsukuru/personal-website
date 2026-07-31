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

export {
  injectGlobals,
}

