const path = require("path");
const util = require("./util");
const fs = require("fs-extra");

const copyDir = require("copy-dir");
const mkdir = fs.mkdirSync;
const readdir = fs.readdir;
const rootDir = path.resolve(process.cwd(), "./src/content/blog");

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
