## Environment setup

### React
```sh
npm i react react-dom
```

### Webpack
```sh
npm i webpack webpack-cli webpack-dev-server -D
```

Plugins
```sh 
# allows creating default index.html or use owm template, generates also file in output folder during build
npm i html-webpack-plugin -D

# allows to access environment variables from .env via process.env
npm i dotenv-webpack -D
```
 
Set path aliases in config. Add jsconfig.json with { compilerOptions: { "baseUrl": "src" } }

### Babel
```sh 
npm i babel-loader @babel-core -D
```

Presets:
```sh
# transpile latest JS code to ES5
npm i @babel/preset-env -D

# transpile JSX to JS
npm i @babel/preset-react -D

# transpile TS to JS
npm i @babel/preset-typescript -D
```

### Prettier
```sh
npm i prettier -D
```

Commands:
```sh
prettier --write .
prettier --check .
````
### ESLint
```sh
npm i eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react -D
```

Commands:
```sh
eslint ./src --fix
````

### Styled-components
```sh 
npm i styled-components
```

```sh
# adds support for server-side rendering, minification of styles, and a nicer debugging experience(adds component name to classes).
npm i babel-plugin-styled-components -D
```


```sh
# improves development experience of styled-components
# Note: This transformer will be useful to you only when you are transpiling your TS code using actual TS compiler,
# like tsc ts-loader or awesome-typescript-loader. If your TS code is transpiled using babel-plugin-transform-typescript,
# you should use babel-plugin-styled-components instead.
npm i typescript-plugin-styled-components -D
```
```sh
# a set of utilities for testing Styled Components with Jest.
# This package improves the snapshot testing experience and provides a brand new matcher to make expectations on the style rules
npm i jest-styled-components -D
```
 
### Husky - allows to run git hooks (scripts which can be set up to run at certain events in the GIT lifecycle)
[how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)
```sh
npm install husky -D

# enable Git hooks
npx husky install

# automatically have Git hooks enabled after install, edit package.json (pkg command available only with npm > 7.2)
npm pkg set scripts.prepare "husky install"

# create a hook
npx husky add .husky/pre-commit "npm run lint"
```
 
### Line-staged - allows to run GIT hooks with husky but only for files which are staged.

### Typescript

### Jest - unit & integration testing

### Playwright - e2e testing