# 🌟 v2r-llm：Vue 组件转 React 组件的魔法工具 🪄

欢迎来到 **v2r-llm** 项目！这是一个神奇的 CLI 工具，可以将你的 Vue 组件转化为 React 组件，但是这个转化过程是由强大的大模型完成的！✨

## 项目介绍

这个项目参考了 [vue-to-react](https://github.com/dwqs/vue-to-react) 项目。代码由 **GitHub Copilot** 辅助完成，转化过程由 **DeepSeek** 提供支持。感谢这些 AI 工具的帮助，让我们能够轻松实现 Vue 到 React 的转化！

## 使用方法

```bash
npm install -g v2r-llm
npx v2r-llm -i <input-vue-file> -o <output-directory> -n <output-filename> [-k <apiKey>]
```

### 参数说明

- `-i, --input <file>`: 输入的 Vue 组件文件路径
- `-o, --output <dir>`: 输出的 React 组件文件夹路径
- `-n, --name <filename>`: 输出的 React 组件文件名
- `-k, --key <apiKey>`: （可选）用于认证的 API 密钥，也可以从环境变量中读取

### 示例

假设你有一个 Vue 组件文件 `demo.vue`，你可以这样转化它：

```bash
npx v2r-llm -i ./demo.vue -o ./ -n demo.js -k your-api-key
```

## 本地开发

```bash
git clone git@github.com:three-water666/v2r-llm.git
cd v2r-llm
npm install
node ./bin/v2r-llm.js -i ./demo/demo.vue -o ./demo/ -n demo.js -k your-api-key
```

## 致谢

特别感谢以下 AI 工具的支持：

- **GitHub Copilot**：代码编写好帮手
- **DeepSeek**：强大的大模型服务
- **ChatGPT**：得力的聊天工具

希望你能喜欢这个项目，并且它能为你的开发工作带来便利！如果你有任何问题或建议，欢迎提交 issue 或 pull request。Happy coding! 😄
