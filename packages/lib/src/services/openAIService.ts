// packages/lib/src/services/openAIService.ts
// Example of using openai Node library to generate text completions or chat completions.

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Must be set as an env var
});

const openai = new OpenAIApi(configuration);

export async function generateStory(prompt: string): Promise<string> {
  try {
    // Using ChatGPT with gpt-3.5-turbo, or we can upgrade to GPT-4, etc.
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    });

    return response.data.choices[0]?.message?.content || '';
  } catch (error) {
    console.error(error);
    throw new Error('OpenAI story generation failed');
  }
}
