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
  const files = await Promise.all(
    subDirs.map((subDir) => {
      const res = path.resolve(dir, subDir);
      return res;
    })
  );
  return files;
}
mkdir(path.resolve(__dirname, "../public/content"));
mkdir(path.resolve(__dirname, "../public/content/blog"));
getDirName(rootDir).then((value) => {
  value.forEach(async (year) => {
    const subDirs = await readdir(year);
    const files = await Promise.all(
      subDirs.map((subDir) => {
        const res = path.resolve(year, subDir);
        return res.slice(rootDir.length + 1);
      })
    );
    files.forEach((month) => {
      copyDir(
        path.resolve(__dirname, `../src/content/blog/${month}`),
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
    const newDir = dir
      .slice(0, rootDir.length + 1)
      .concat(dir.slice(rootDir.length + 9));
    await fs.unlink(
      path.resolve(
        __dirname,
        "../",
        newDir.replace(rootDir, "./public/content")
      )
    );
    return;
  }
  // await copyDir(
  //   path.resolve(dir),
  //   path.resolve(__dirname, "../", dir.replace(rootDir, "./public/content")),
  //   {
  //     cover: true,
  //     filter: function (stat, filepath, filename) {
  //       // do not want copy some source files
  //       if (stat === "file" && util.filterFileBeforeCopy(filepath)) {
  //         return false;
  //       }

  //       return true; // remind to return a true value when file check passed.
  //     },
  //   },
  //   (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   }
  // );
});
