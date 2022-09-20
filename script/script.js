const { spawn } = require("node:child_process");
const fileWatch = spawn("node", ["file-watch.js"]);
const projectStart = spawn("npx", ["next", "start"]);

fileWatch.stderr.on("data", (data) => {
  console.error(`fileWatch stderr: ${data}`);
});

fileWatch.on("close", (code) => {
  if (code !== 0) {
    console.log(`fileWatch process exited with code ${code}`);
  }
  projectStart.stdin.end();
});

projectStart.stdout.on("data", (data) => {
  console.log(data.toString());
});

projectStart.stderr.on("data", (data) => {
  console.error(`projectStart stderr: ${data}`);
});

projectStart.on("close", (code) => {
  if (code !== 0) {
    console.log(`projectStart process exited with code ${code}`);
  }
});
