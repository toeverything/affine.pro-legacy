const chokidar = require("chokidar");
const copyDir = require("copy-dir");
const fs = require("fs");
chokidar.watch("./src/content").on("all", async (event, path) => {
  if (event === "unlink") {
    await fs.unlink(
      __dirname.replace("/script", "") + path.replace("src/content", "/public"),
      () => {}
    );
    return;
  }
  await copyDir(
    __dirname.replace("script", "") + path,
    __dirname.replace("/script", "") + path.replace("src/content", "/public"),
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
      if (err) {
        console.log(err);
      }
    }
  );
});
