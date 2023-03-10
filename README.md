# Open AI Chatbot

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features-wait-until-gifs-load)
- [Open AI API](#open-ai-api)
- [Database Structure](#database-structure)
- [Format Configuration](#format-configuration)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)

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
- [React Hot Toast](https://react-hot-toast.com/)
- [Vercel] (https://vercel.com/docs)

## Features (wait until GIFs load)

- User authentication using Google Sign-In & Sign-Out

![screen-recorder-thu-mar-09-2023-22-03-02 (3)](https://user-images.githubusercontent.com/72515147/224102078-68ed47b7-7fb7-4c31-8692-6a95c4c50345.gif)

- Saved Chats are listed.

![Saved Chat](https://user-images.githubusercontent.com/72515147/224112616-61fa2407-9bf3-4a62-91fd-54cc1d00850f.gif)

- New Chat can be created, takes to the new page.

![New Chat](https://user-images.githubusercontent.com/72515147/224330362-12b32b6a-c8c6-4c52-ad16-79c199fb0753.gif)

- Delete a saved Chats.

![Delete](https://user-images.githubusercontent.com/72515147/224331044-3c715b37-fea8-4706-8be0-4c23dae0312e.gif)

- Prompt to Chat button is enabled only when a value is entered.

![Prompt](https://user-images.githubusercontent.com/72515147/224332434-7c9a2646-ea7e-46c6-b58b-8cdf3450fa78.gif)

- OpenAI model are viewed as selection Dropdown

![Model Selection](https://user-images.githubusercontent.com/72515147/224333259-ba32529a-153b-4188-917a-b5d30416344f.gif)

- Model selection placement supports responsive view.

![Responsive Model Selection](https://user-images.githubusercontent.com/72515147/224337836-3fbc8416-fc37-42ed-a3d2-2b3bd80960f6.gif)

- Toast is displayed 

![Toast](https://user-images.githubusercontent.com/72515147/224338953-9a8b1ff1-9cc9-41ac-ae15-2e5e47b1180c.gif)

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

## Database Structure
```
  .collection("user")
  .doc(session?.user?.email!)
  .collection("chats")
  .doc(chatId)
  .collection("messages")
  .add(message);
      
```

## Format Configuration
```

{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true
}

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

## Environment Variables

- Generate a key from Open AI.
```
OPENAI_API_KEY=
```

- Generate a key from Firebae Web SDK configuration.
```
GOOGLE_ID=
GOOGLE_SECRET=
```

- Generate using command [Secret](https://next-auth.js.org/configuration/options#secret).
```
NEXTAUTH_SECRET=
```

- Generate the service key from firebase and use the link to format it [Text Fixer](https://www.textfixer.com/tools/remove-line-breaks.php), once that is done add is as a value.
```
FIREBASE_SERVICE_ACCOUNT_KEY= 
```



