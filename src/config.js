import fs from "fs";
import path from "path";

const CONFIG_FILE = path.resolve(process.cwd(), ".v2r-llm-config.json");

export function getConfig(key) {
  if (!fs.existsSync(CONFIG_FILE)) {
    return null;
  }
  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
  return key ? config[key] : config;
}

export function setConfig(key, value) {
  let config = {};
  if (fs.existsSync(CONFIG_FILE)) {
    config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
  }
  config[key] = value;
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

export function deleteConfig(key) {
  if (!fs.existsSync(CONFIG_FILE)) {
    return;
  }
  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
  delete config[key];
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}