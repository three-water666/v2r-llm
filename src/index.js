import OpenAI from "openai";
import fs from "fs";
import { log } from "./utils.js";

export default async function transform(src, targetPath, apiKey) {
  const source = fs.readFileSync(src, "utf-8");
  const prompt = `Convert the following Vue component to React component:\n\n${source}\n\n`;

  const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: apiKey || process.env.DEEPSEEK_API_KEY
  });

  const spinner = log.loading("Transforming Vue component to React component...");

  try {
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
    spinner.succeed("React component has been generated successfully.");
  } catch (error) {
    spinner.fail("Failed to transform the component.");
    log.error(error.message);
  }
}
