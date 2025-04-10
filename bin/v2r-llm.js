#!/usr/bin/env node

import { program } from "commander";
import { log } from "../src/utils.js";
import path from "path";
import fs from "fs";
import inquirer from "inquirer";
import transform from "../src/index.js";
import { getConfig, setConfig, deleteConfig } from "../src/config.js";

function resolveConfig(options) {
  const baseURL =
    options.baseURL || getConfig("baseURL") || "https://api.deepseek.com";
  const model = options.model || getConfig("model") || "deepseek-chat";
  const apiKey = options.key || getConfig("apiKey");

  if (!apiKey) {
    log.error(
      "API key is required. Use '-k' option or set it via 'config set apiKey <value>'."
    );
    process.exit(1);
  }

  return { baseURL, model, apiKey };
}

program
  .command("config <action> [key] [value]")
  .description("Manage configuration (set, get, delete, list)")
  .action((action, key, value) => {
    if (action === "set") {
      if (!key || !value) {
        log.error("Both key and value are required for 'set' action.");
        process.exit(1);
      }
      setConfig(key, value);
      log.info(`Configuration '${key}' set to '${value}'.`);
    } else if (action === "get") {
      const config = getConfig(key);
      if (key) {
        log.info(config ? `${key}: ${config}` : `No value found for '${key}'.`);
      } else {
        log.info(config);
      }
    } else if (action === "delete") {
      if (!key) {
        log.error("Key is required for 'delete' action.");
        process.exit(1);
      }
      deleteConfig(key);
      log.info(`Configuration '${key}' deleted.`);
    } else if (action === "list") {
      const config = getConfig();
      log.info("Current configuration:");
      log.info(config);
    } else {
      log.error("Invalid action. Use 'set', 'get', 'delete', or 'list'.");
      process.exit(1);
    }
  });

program
  .command("transform")
  .description("Transform a Vue component to a React component")
  .requiredOption("-i, --input <file>", "the input path for vue component")
  .requiredOption("-o, --output <dir>", "the output path for react component")
  .requiredOption("-n, --name <filename>", "the output file name")
  .option("-k, --key <apiKey>", "the API key for authentication")
  .option("-b, --baseURL <url>", "the base URL for API")
  .option("-m, --model <modelName>", "the model name for processing")
  .action((options) => {
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

    const targetPath = path.resolve(
      process.cwd(),
      path.join(dist, options.name)
    );

    const { baseURL, model, apiKey } = resolveConfig(options);

    if (fs.existsSync(targetPath)) {
      inquirer
        .prompt([
          {
            type: "confirm",
            message: `The file ${targetPath} already exists, do you want to overwrite it?`,
            name: "ok",
          },
        ])
        .then(({ ok }) => {
          if (ok) {
            transform(src, targetPath, apiKey, baseURL, model);
          } else {
            process.exit(1);
          }
        });
    } else {
      transform(src, targetPath, apiKey, baseURL, model);
    }
  });

program.parse(process.argv);
