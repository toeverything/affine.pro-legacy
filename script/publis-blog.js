let shell = require("shelljs");

shell.exec("git add .");
shell.exec('git commit -m "update blog"');
shell.exec("git push");
