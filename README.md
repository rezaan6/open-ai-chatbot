# Open AI Chatbot

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features-wait-until-gifs-load)

## Description

This chatbot is a complete solution for those looking to create a feature-rich chatbot with user authentication and data storage capabilities. The chatbot uses [OpenAI's language model](https://openai.com/language-models/) to generate responses to user inputs and presents them in a sleek and intuitive interface built using [Next.js](https://nextjs.org/) and styled with [TailwindCSS](https://tailwindcss.com/).

User authentication is managed through [Google Sign-In](https://developers.google.com/identity/sign-in/web/sign-in), allowing users to easily sign in to the chatbot using their existing Google account. The chatbot also integrates with [Firebase](https://firebase.google.com/), a popular real-time database platform, to store and retrieve user data such as chat history and user preferences.
This chatbot is written in [TypeScript](https://www.typescriptlang.org/), a statically typed superset of JavaScript, providing improved type checking and code reliability.

By using Next.js, TailwindCSS, Firebase, Google Sign-In, and TypeScript, this chatbot offers a robust and scalable solution for those looking to create a feature-rich chatbot.

## Tech Stack

- [React](https://reactjs.org/)
- [Nextjs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [Nextauth](https://next-auth.js.org/)
- [Prettier](https://prettier.io/)

## Features (wait until GIFs load)

- User authentication using Google Sign-In & Sign-Out

![screen-recorder-thu-mar-09-2023-22-03-02 (3)](https://user-images.githubusercontent.com/72515147/224102078-68ed47b7-7fb7-4c31-8692-6a95c4c50345.gif)

- Saved Chats are listed.

![Saved Chat](https://user-images.githubusercontent.com/72515147/224112616-61fa2407-9bf3-4a62-91fd-54cc1d00850f.gif)



- New Chat can be created, takes to the new page.

- Saved Chats can be deleted

- Prompt to Chat button is enabled only when a value is entered.

- OpenAI model are viewed as selection Dropdown

- Model selection placement supports responsive view.

## Open AI API
- `openAI.ts`

This code is used to set up the OpenAI API in a project and provides a convenient way to access the API's functionality throughout the application. The API key is stored as an environment variable to keep it secure and prevent it from being hard-coded in the codebase.

```
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;

```

- `queryApi.ts`

This code demonstrates how to use the OpenAI API to generate a response to a user's input in a chat application. The query function can be used to get a response from the OpenAI model for any given prompt and model, making it a reusable component in the application.

```
import openai from "./openAI";

const query = async (prompt: string, chatId: string, model: string) => {
  return await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => {
      return res.data.choices[0].text;
    })
    .catch((err) => `OpenAI was unable to find an answer for that! (Error: ${err.message}`);
};

export default query;

```

## Folder Structure
```
.
|-- README.md
|-- firebaseStore.ts
|-- firebaseStoreAdmin.ts
|-- next-env.d.ts
|-- next.config.js
|-- package.json
|-- postcss.config.js
|-- public
|   |-- favicon.ico
|   |-- google.png
|   |-- next.svg
|   |-- openAI.png
|   |-- thirteen.svg
|   `-- vercel.svg
|-- serviceAccountKey.json
|-- src
|   |-- app
|   |   |-- chat
|   |   |   `-- [id]
|   |   |       `-- page.tsx
|   |   |-- head.tsx
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components
|   |   |-- Chat.tsx
|   |   |-- ChatInput.tsx
|   |   |-- ChatRow.tsx
|   |   |-- ClientProvider.tsx
|   |   |-- Login.tsx
|   |   |-- Message.tsx
|   |   |-- ModelSelection.tsx
|   |   |-- NewChat.tsx
|   |   |-- SessionProvider.tsx
|   |   `-- SideBar.tsx
|   |-- lib
|   |   |-- openAI.ts
|   |   `-- queryApi.ts
|   |-- pages
|   |   `-- api
|   |       |-- askQuestion.ts
|   |       |-- auth
|   |       |   `-- [...nextauth].ts
|   |       `-- getEngines.ts
|   `-- styles
|       `-- globals.css
|-- tailwind.config.js
|-- tsconfig.json
|-- typings.d.ts
|-- yarn-error.log
`-- yarn.lock
```
