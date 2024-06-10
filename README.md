# React Template with TypeScript

Front-end template using Vite and Typescript.

## Table of Contents

- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Testing](#testing)

## Technologies

This project utilizes the following technologies:

- [React](https://reactjs.org) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Vite](https://vitejs.dev) - A fast build tool for modern web development.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapidly building custom user interfaces.
- [PostCSS](https://postcss.org) - A tool for transforming CSS with JavaScript plugins.
- [Husky](https://typicode.github.io/husky) - A modern git hook framework.
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on staged git files.
- [ESLint](https://eslint.org) - A pluggable and configurable linter tool for identifying and fixing problems in JavaScript code.
- [Prettier](https://prettier.io) - An opinionated code formatter to enforce consistent code styles.
- [Testing Library](https://testing-library.com) - A set of utilities for testing UI components and behavior.
- [vitest](https://github.com/elmarquez/vitest) - A testing library for Vite projects.

## Getting Started

To get started with this template, you can use `npm` or `yarn`:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

## Scripts

The following scripts are available for development and building:

`dev`: Start a development server with Vite and open the application in your default browser.<br/>
`build`: Build the production version of the application using TypeScript and Vite.<br/>
`lint`: Run ESLint to check and fix TypeScript and React code.<br/>
`preview`: Build and preview the production build locally.<br/>
`prepare`: Install Husky hooks.<br/>
`test`: Run tests once.<br/>
`test:watch`: Run tests in watch mode.<br/>
`coverage`: Generate test coverage report.<br/><br/>
You can run these scripts using npm run or yarn followed by the script name, e.g. npm run dev or yarn build.

## Linting and Formatting

This project is configured with ESLint and Prettier to ensure consistent code style and catch common errors. The `lint` script is set up to automatically fix fixable issues, but some issues may require manual intervention.

You can run the linting and formatting checks using:

```bash
# Lint and format all files
npm run lint

# Fix fixable issues
npm run lint -- --fix

```

## Testing
The project uses `vitest` along with `@testing-library/react` for testing components and behavior. Tests can be found in the `src` directory alongside the components.

To run tests:
```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run coverage

```
