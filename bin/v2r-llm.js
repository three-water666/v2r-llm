#!/usr/bin/env node

const { program } = require("commander");
const { log } = require("../src/utils");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const transform = require("../src/index");

program
  .option("-i, --input <file>", "the input path for vue component")
  .option("-o, --output <dir>", "the output path for react component")
  .option("-n, --name <filename>", "the output file name")
  .parse();

const options = program.opts();

if (!options.input || !options.output || !options.name) {
  program.help();
}

const src = path.resolve(process.cwd(), options.input);
const dist = path.resolve(process.cwd(), options.output);

if (!fs.existsSync(src)) {
  log.error(`${src} is not exist`);
  process.exit(1);
}

if (!fs.existsSync(dist)) {
  log.error(`${dist} is not exist`);
  process.exit(1);
}

const targetPath = path.resolve(process.cwd(), path.join(dist, options.name));

if (fs.existsSync(targetPath)) {
  inquirer
    .createPromptModule([
      {
        type: "confirm",
        message: `The file ${targetPath} already exists, do you want to overwrite it?`,
        name: "ok",
      },
    ])
    .then(({ ok }) => {
      if (ok) {
        transform();
      } else {
        process.exit(1);
      }
    });
} else {
  transform();
}
