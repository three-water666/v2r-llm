import OpenAI from "openai";
import fs from "fs";
import { log } from "./utils.js";

export default async function transform(
  src,
  targetPath,
  apiKey,
  baseURL,
  model
) {
  const source = fs.readFileSync(src, "utf-8");
  const prompt = `Convert the following Vue component to a React component. Only return the React component code without any additional text:\n\n${source}\n\n`;

  const openai = new OpenAI({
    baseURL: baseURL,
    apiKey: apiKey,
  });

  const spinner = log.loading(
    "Transforming Vue component to React component..."
  );

  try {
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant.You are helping a user convert a Vue component to a React component.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reactComponentMd = completion.choices[0].message.content;
    const reactComponent = reactComponentMd
      .match(/```jsx([\s\S]*?)```/)[1]
      .trim();
    fs.writeFileSync(targetPath, reactComponent);
    spinner.succeed("React component has been generated successfully.");
  } catch (error) {
    spinner.fail("Failed to transform the component.");
    log.error(error.message);
  }
}
