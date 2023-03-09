# Open AI Chatbot

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)

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

- New Chat can be created, takes to the new page.

- Saved Chats can be deleted

- Prompt to Chat button is enabled only when a value is entered.

- OpenAI model are viewed as selection Dropdown

- Model selection placement supports responsive view.

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
