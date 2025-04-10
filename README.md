English | [中文文档](./README-zh_CN.md)

# 🌟 v2r-llm: The Magic Tool to Convert Vue Components to React Components 🪄

Welcome to the **v2r-llm** project! This is a magical CLI tool that can convert your Vue components into React components, and this conversion process is powered by a powerful large model! ✨

## Project Introduction

This project is inspired by the [vue-to-react](https://github.com/dwqs/vue-to-react) project. The code is assisted by **GitHub Copilot**, and the conversion process is supported by LLM. Thanks to these AI tools, we can easily achieve the conversion from Vue to React!

## Default Service and Model

- Default Service: `https://api.deepseek.com`
- Default Model: `deepseek-chat`

## Quick Start

If you use the default service and model, you need a **DeepSeek** **apiKey**. See the official website for application methods. Other services and models are also supported. See [transform command parameters](#transform-command-parameters) for details.

```bash
npm install -g v2r-llm
npx v2r-llm transform -i <input-vue-file> -o <output-directory> -n <output-filename> [-k <apiKey>]
```

Suppose you have a Vue component file `demo.vue`, you can convert it like this:

```bash
npx v2r-llm transform -i ./demo.vue -o ./ -n demo.js -k your-api-key
```

### Transform Command Parameters

You can use the `v2r-llm transform` command to convert Vue components to React components.

- `-i, --input <file>`: Path to the input Vue component file
- `-o, --output <dir>`: Path to the output React component directory
- `-n, --name <filename>`: Name of the output React component file
- `-k, --key <apiKey>`: (Optional) API key for authentication, can also be read from configuration
- `-b, --baseURL <url>`: (Optional) Base URL for the API, defaults to `https://api.deepseek.com`
- `-m, --model <modelName>`: (Optional) Model name for processing, defaults to `deepseek-chat`

### Config Command Parameters

You can use the `v2r-llm config` command to configure parameters, so you don't need to input `-b`, `-k`, and `-m` every time you run the transform command, or input `-k` every time when using the default service and model. For example:

```bash
# Set API key
v2r-llm config set apiKey your-api-key

# Set base URL
v2r-llm config set baseURL https://api.example.com

# Set model name
v2r-llm config set model your-model-name

# View current configuration
v2r-llm config list
```

After configuration, you can run the transform command without specifying these parameters:

```bash
npx v2r-llm transform -i ./demo.vue -o ./ -n demo.js
```

Of course, you can still use `-b`, `-k`, and `-m` for command-line configuration, which takes precedence over `v2r-llm config` settings.

## Local Development

```bash
git clone git@github.com:three-water666/v2r-llm.git
cd v2r-llm
npm install
node ./bin/v2r-llm.js transform -i ./demo/demo.vue -o ./demo/ -n demo.js -k your-api-key
```

## Acknowledgements

Special thanks to the following AI tools for their support:

- **GitHub Copilot**: A great helper for coding
- **DeepSeek**: Powerful large model service
- **ChatGPT**: Reliable chat tool

We hope you enjoy this project and that it brings convenience to your development work! If you have any questions or suggestions, feel free to submit an issue or pull request. Happy coding! 😄
