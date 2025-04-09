import chalk from "chalk";
import ora from "ora";

const log = function (msg) {
  console.log(msg);
};

log.info = function (msg) {
  console.log(chalk.blue(msg));
};

log.error = function (msg) {
  console.log(chalk.red(msg));
};

log.success = function (msg) {
  console.log(chalk.green(msg));
};

log.loading = function (msg) {
  const spinner = ora(msg).start();
  return spinner;
};

export { log };
