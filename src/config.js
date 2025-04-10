import fs from "fs";
import path from "path";
import os from "os";

const CONFIG_FILE = path.resolve(os.homedir(), ".v2r-llm-config.json");

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

export function listConfig() {
  if (!fs.existsSync(CONFIG_FILE)) {
    return "No configuration found.";
  }
  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
  return Object.entries(config)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}
