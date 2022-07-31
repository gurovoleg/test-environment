Environment setup:

1. npm i react react-dom

2. Webpack
npm i webpack webpack-cli webpack-dev-server -D

- Plugins:
npm i html-webpack-plugin -D
npm i dotenv-webpack -D

- set path aliases in config. Add jsconfig.json with { compilerOptions: { "baseUrl": "src" } }

3. Babel
npm i babel-loader @babel-core -D

Presets:
npm i @babel/preset-env @babel/preset-react @babel/preset-typescript -D

4. Prettier
npm i prettier -D

Commands:
prettier --write .
prettier --check .

5. ESLint
npm i eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react -D

Commands:
eslint ./src --fix

6. Styled-components
npm i styled-components

// adds support for server-side rendering, minification of styles, and a nicer debugging experience(adds component name to classes).
npm i babel-plugin-styled-components -D

// improves development experience of styled-components
// Note: This transformer will be useful to you only when you are transpiling your TS code using actual TS compiler,
// like tsc ts-loader or awesome-typescript-loader. If your TS code is transpiled using babel-plugin-transform-typescript,
// you should use babel-plugin-styled-components instead.
npm i typescript-plugin-styled-components -D

// a set of utilities for testing Styled Components with Jest.
// This package improves the snapshot testing experience and provides a brand new matcher to make expectations on the style rules
npm i jest-styled-components -D