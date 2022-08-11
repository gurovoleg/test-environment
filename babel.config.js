const path = require('path');

module.exports = {
  presets: [
    // transpile latest JS code to ES5
    '@babel/preset-env',

    [
      // transpile JSX to JS
      '@babel/preset-react',
      {
        // automatic auto imports the functions that JSX transpiles to. So, it allows not to import React anymore.
        runtime: 'automatic',
      },
    ],
    // transpile TS to JS
    '@babel/preset-typescript',
  ],

  // adds support for server-side rendering, minification of styles, and a nicer debugging experience(!!important!! adds component name to classes).
  plugins: ['babel-plugin-styled-components']
};
