const express = require("express");
const app = express();
const router = require("./routes/routes");

app.set("view engine", "ejs");
app.use(router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`'App listening on port ${PORT}!'`);
});
