const path = require("path");

const chokidar = require("chokidar");
const copyDir = require("copy-dir");
const util = require("./util");

const fs = require("fs-extra");

const mkdir = fs.mkdirSync;
const readdir = fs.readdir;

let rootDir = path.resolve(__dirname, "../src/content/blog");

//to get year and month of the post createTime
async function getDirName(dir) {
  const subDirs = await readdir(dir);
  const files = await subDirs.map((subDir) => {
    const res = path.resolve(dir, subDir);
    return res;
  });
  return files;
}
mkdir(path.resolve(__dirname, "../public/content/blog"), { recursive: true });
getDirName(rootDir).then((value) => {
  value.forEach(async (dir) => {
    const subDirs = await readdir(dir);
    const files = await subDirs.map((subDir) => {
      const res = path.resolve(dir, subDir);
      return res.slice(rootDir.length + 1);
    });

    files.forEach((file) => {
      copyDir(
        path.resolve(__dirname, `../src/content/blog/${file}`),
        path.resolve(__dirname, "../public/content/blog"),
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
    });
  });
});

chokidar.watch(rootDir).on("all", async (event, dir) => {
  if (event === "unlink") {
    const subDir = dir
      .slice(0, rootDir.length + 1)
      .concat(dir.slice(rootDir.length + 9));
    await fs.unlink(
      path.resolve(
        __dirname,
        "../",
        subDir.replace(rootDir, "./public/content")
      )
    );
    return;
  }
});
