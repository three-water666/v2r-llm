English | [中文文档](./README-zh_CN.md)

# 🌟 v2r-llm: The Magic Tool to Convert Vue Components to React Components 🪄

Welcome to the **v2r-llm** project! This is a magical CLI tool that can convert your Vue components into React components, and this conversion process is powered by a powerful large model! ✨

## Project Introduction

This project is inspired by the [vue-to-react](https://github.com/dwqs/vue-to-react) project. The code is assisted by **GitHub Copilot**, and the conversion process is supported by **DeepSeek**. Thanks to these AI tools, we can easily achieve the conversion from Vue to React!

## Usage

```bash
npm install -g v2r-llm
npx v2r-llm -i <input-vue-file> -o <output-directory> -n <output-filename> [-k <apiKey>]
```

### Parameters

- `-i, --input <file>`: Path to the input Vue component file
- `-o, --output <dir>`: Path to the output React component directory
- `-n, --name <filename>`: Name of the output React component file
- `-k, --key <apiKey>`: (Optional) API key for authentication, can also be read from environment variables

### Example

Suppose you have a Vue component file `demo.vue`, you can convert it like this:

```bash
npx v2r-llm -i ./demo.vue -o ./ -n demo.js -k your-api-key
```

## Local Development

```bash
git clone git@github.com:three-water666/v2r-llm.git
cd v2r-llm
npm install
node ./bin/v2r-llm.js -i ./demo/demo.vue -o ./demo/ -n demo.js -k your-api-key
```

## Acknowledgements

Special thanks to the following AI tools for their support:

- **GitHub Copilot**: A great helper for coding
- **DeepSeek**: Powerful large model service
- **ChatGPT**: Reliable chat tool

We hope you enjoy this project and that it brings convenience to your development work! If you have any questions or suggestions, feel free to submit an issue or pull request. Happy coding! 😄
