const path = require("path");

const dir = fn => {
  return path.join(__dirname, "..", "public", fn);
};

module.exports = dir;
