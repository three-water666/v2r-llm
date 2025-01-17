import chalk from "chalk";

const log = function (msg) {
  console.log(msg);
};

log.error = function (msg) {
  console.log(chalk.red(msg));
};

log.success = function (msg) {
  console.log(chalk.green(msg));
};

export { log };
