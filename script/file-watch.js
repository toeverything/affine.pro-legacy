const path = require("path");
const fs = require("fs/promises");
const chokidar = require("chokidar");
const copyDir = require("copy-dir");
const util = require("./util");

const rootDir = path.resolve(__dirname, "../src/content");

chokidar.watch(rootDir).on("all", async (event, dir) => {
  if (event === "unlink") {
    await fs.unlink(
      path.resolve(__dirname, "../", dir.replace(rootDir, "./public/content"))
    );
    return;
  }

  await copyDir(
    path.resolve(dir),
    path.resolve(__dirname, "../", dir.replace(rootDir, "./public/content")),
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
      if (err) {
        console.log(err);
      }
    }
  );
});
