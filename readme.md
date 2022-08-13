## Environment setup

### React
```sh
npm i react react-dom
```

### Webpack
```sh
npm i webpack webpack-cli webpack-dev-server -D
```

*Plugins*
```sh 
# allows creating default index.html or use own template, generates also file in output folder during build
npm i html-webpack-plugin -D

# allows to access environment variables from .env via process.env
npm i dotenv-webpack -D
```

*Some settings*
```sh
# set path aliases
resolve: {
  alias: {
    core: path.resolve(__dirname, 'src/core'),
    components: path.resolve(__dirname, 'src/components'),
    styles: path.resolve(__dirname, 'src/styles'),
    utils: path.resolve(__dirname, 'src/utils'),
  }
}
``` 
```sh
# add jsconfig.json to make IDE understand aliases and avoid warning "module is not installed"
{ compilerOptions: { 
    "baseUrl": "src" 
  } 
}

```

### Babel
```sh 
npm i babel-loader @babel-core -D
```

*Presets*
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

*Commands*
```sh
prettier --write .
prettier --check .
````
### ESLint
```sh
npm i eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react -D
```

*Commands*
```sh
# verify all files in 'src' folder and make changes if applicable 
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
 
### Husky
> Allows run git hooks (scripts which can be set up to run at certain events in the Git lifecycle)

[how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)
```sh
npm install husky -D

# enable Git hooks
npx husky install

# automatically have Git hooks enabled after install, edit package.json (pkg command available only with npm > 7.2)
npm pkg set scripts.prepare "husky install"

# create a hook (run eslint for all files)
npx husky add .husky/pre-commit "npm run lint"
```

Update husky pre-commit file
```sh
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npm run lint && npm run ts
```
 
### Line-staged
> Allows run Git hooks with husky but only for files which are staged
```sh
npm i lint-staged -D
```
```sh
# add lint-staged configuration to package.json (run eslint for all staged files)
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": "npm run lint"
  }
}
```
```sh
# update husky pre-commit

#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```
### Typescript

*Transpiling*

We'll use Babel for transpiling to generate JS files instead of TSC.  
It means we don't get type checking during transition from TS to JS.

By using babel’s support for TypeScript, we get the ability to work with existing build pipelines and are more likely to have a faster JS emit time because Babel does not type check our code.

TSC will be used manually for a type checking.

```sh
npm i typescript @babel/preset-typescript -D
```
```sh
# update package.json
{
  "presets": ["@babel/preset-typescript"]
}
```
*Webpack config*

```js
// update webpack.config.js to include .ts|.tsx files
module: {
  rules: [
    {
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' },
    }
    //...
},
resolve: {
  // allows leaving extension when importing    
  extensions: ['.tsx', '.ts', '.js']
  //...
}        
```

*Pre-defined Types*

When installing any libraries it is important to install the typing definition for that library.
These definitions can be found at [TypeSearch](https://www.typescriptlang.org/dt/search?search=)
```sh
# add react, react-dom and styled components types 
npm i @types/react @types/react-dom @types/styled-components  -D
```

*ESLint support tools*

We have to install **typescript-eslint** which enables ESLint to run on TypeScript code.
ESLint's default JavaScript parser cannot natively read in TypeScript-specific syntax and its rules don't natively have access to TypeScript's type information.

typescript-eslint:
 - allows ESLint to parse TypeScript syntax
 - creates a set of tools for ESLint rules to be able to use TypeScript's type information
 - provides a large list of lint rules that are specific to TypeScript and/or use that type information
```sh
npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin  -D
```

Update eslintrc config:
```js
{
  // configs 
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  // parse TS to JS
  parser: '@typescript-eslint/parser',
  // typescript-eslint's rules
  plugins: ['@typescript-eslint'],
}
```



### Jest - unit & integration testing

### Playwright - e2e testing