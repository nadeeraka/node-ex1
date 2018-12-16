const dir = fn => {
  return path.join(__dirname, "..", "public", fn);
};

exports.getController = (req, res) => {
  res.render("content.ejs", {
    title: "About",
    dis: "This is about page",
    arr: {
      key: [1, 2, 3, 4]
    }
  });
};
exports.getApi = (req, res) => {
  res.render("api");
};

exports.getMain = (req, res) => {
  res.render("main");
};

exports.getNotfound = (req, res) => {
  //res.sendFile(dir("404.html"));
  res.render("404");
};
