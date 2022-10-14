const path = require("path");
const copyDir = require("copy-dir");
const util = require("./util");

copyDir(
  path.resolve(__dirname, "../src/content"),
  path.resolve(__dirname, "../public/content"),
  {
    filter: function (stat, filepath, filename) {
      // do not want copy some source files
      if (stat === "file" && util.filterFileBeforeCopy(filepath)) {
        return false;
      }

      return true; // remind to return a true value when file check passed.
    },
  },
  (err, data) => {
    console.log("Copied", err, data);
  }
);
