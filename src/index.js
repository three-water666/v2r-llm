import OpenAI from "openai";
import fs from "fs";
import { log } from "./utils.js";

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: '<DeepSeek API Key>'
});

export default async function transform(src, targetPath) {
  const source = fs.readFileSync(src, "utf-8");
  const prompt = `Convert the following Vue component to React component:\n\n${source}\n\n`;

  const completion = await openai.chat.completions.create({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.You are helping a user convert a Vue component to a React component.'
      },
      {
        role: 'user',
        content: prompt
      }
    ]
  });

  const reactComponent = completion.choices[0].message.content;
  fs.writeFileSync(targetPath, reactComponent);
  log.success(`React component has been generated at ${targetPath}`);
}
