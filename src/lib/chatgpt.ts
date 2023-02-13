import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default openai;
