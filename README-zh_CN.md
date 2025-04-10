# 🌟 v2r-llm：Vue 组件转 React 组件的魔法工具 🪄

欢迎来到 **v2r-llm** 项目！这是一个神奇的 CLI 工具，可以将你的 Vue 组件转化为 React 组件，但是这个转化过程是由强大的大模型完成的！✨

## 项目介绍

这个项目参考了 [vue-to-react](https://github.com/dwqs/vue-to-react) 项目。代码由 **GitHub Copilot** 辅助完成，转化过程由大模型完成。感谢这些 AI 工具的帮助，让我们能够轻松实现 Vue 组件到 React 组件的转化！

## 默认服务与模型

- 默认服务：`https://api.deepseek.com`
- 默认模型：`deepseek-chat`

## 快速使用

如果使用默认的服务和模型，你需要有 **DeepSeek** 的 **apiKey** ，申请方法见官网。也支持其他服务和模型，具体用法见 **transform 命令参数说明**。

```bash
npm install -g v2r-llm
npx v2r-llm transform -i <input-vue-file> -o <output-directory> -n <output-filename> [-k <apiKey>]
```

假设你有一个 Vue 组件文件 `demo.vue`，你可以这样转化它：

```bash
npx v2r-llm transform -i ./demo.vue -o ./ -n demo.js -k your-api-key
```

### transform 命令参数说明

你可以通过 v2r-llm transform 命令来实现 Vue 组件到 React 组件的转化。

- `-i, --input <file>`: 输入的 Vue 组件文件路径
- `-o, --output <dir>`: 输出的 React 组件文件夹路径
- `-n, --name <filename>`: 输出的 React 组件文件名
- `-k, --key <apiKey>`: （可选）用于认证的 API 密钥，也可以从配置中读取
- `-b, --baseURL <url>`: （可选）API 的基础 URL，默认为 `https://api.deepseek.com`
- `-m, --model <modelName>`: （可选）用于处理的模型名称，默认为 `deepseek-chat`

### config 命令参数说明

你可以通过 `v2r-llm config` 命令来配置参数，这样在使用其他服务和模型时执行转换命令就不需要每次都输入 `-b`、`-k` 和 `-m` 参数，或者使用默认服务和模型时每次都输入 `-k` 参数。例如：

```bash
# 设置 API 密钥
v2r-llm config set apiKey your-api-key

# 设置基础 URL
v2r-llm config set baseURL https://api.example.com

# 设置模型名称
v2r-llm config set model your-model-name

# 查看当前配置
v2r-llm config list
```

配置完成后，执行转换命令时会自动使用已配置的参数：

```bash
npx v2r-llm transform -i ./demo.vue -o ./ -n demo.js
```

当然你仍然可以使用 `-b`、`-k` 和 `-m` 进行命令行配置，其优先级高于 `v2r-llm config` 的配置。

## 本地开发

```bash
git clone git@github.com:three-water666/v2r-llm.git
cd v2r-llm
npm install
node ./bin/v2r-llm.js transform -i ./demo/demo.vue -o ./demo/ -n demo.js -k your-api-key
```

## 致谢

特别感谢以下 AI 工具的支持：

- **GitHub Copilot**：代码编写好帮手
- **DeepSeek**：强大的大模型服务
- **ChatGPT**：得力的聊天工具

希望你能喜欢这个项目，并且它能为你的开发工作带来便利！如果你有任何问题或建议，欢迎提交 issue 或 pull request。Happy coding! 😄
