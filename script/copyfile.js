const copyDir = require("copy-dir");
copyDir(
  __dirname.replace("/script", "/src/content"),
  __dirname.replace("/script", "/public"),
  {
    filter: function (stat, filepath, filename) {
      // do not want copy .md files
      if (stat === "file" && filepath.endsWith(".md")) {
        return false;
      }

      return true; // remind to return a true value when file check passed.
    },
  },
  (err, data) => {
    console.log(err, data);
  }
);
