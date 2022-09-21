const path = require("path");

function filterFileBeforeCopy(filepath) {
  const filterExtnames = [".md", ".ts"];
  return filterExtnames.includes(path.extname(filepath));
}

module.exports = {
  filterFileBeforeCopy,
};
