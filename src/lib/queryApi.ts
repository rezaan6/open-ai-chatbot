import openai from "./openAI"; // Ensure this import matches your OpenAI SDK setup

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.choices[0].message.content;
  } catch (err:any) {
    return `OpenAI was unable to find an answer for that! (Error: ${err.message})`;
  }
};

export default query;