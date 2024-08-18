# React + TypeScript + Vite on FSD for Aura

Test assignment for Aura which covering few parts:

-   Authentication
-   Home screen with 3 buttons
-   Search financial data
-   Upload data form with validation
-   Ai chatbot

## About application

-   The architecture was inspired by [Feature-Sliced Design](https://feature-sliced.design/)

-   For global state management and async operations was used [RTK Query](https://redux-toolkit.js.org/)

-   For styling were used Scss and [Material UI](https://mui.com/)

-   Before start use .env variables as shown below

```.env
VITE_FINANCIAL_API_KEY=
VITE_AI_API_KEY=
```

-   **Note:** The AI service has message limits which can be exceeded.
-   To start the application locally, run:
-   **Node version for locally start - 20.10.0**

```bash
pnpm i
pnpm vite
```

-   Credits for login

```
username = johndoe@mail.com
password = 123456789
```
