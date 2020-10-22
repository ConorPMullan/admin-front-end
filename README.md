## Pet Foods Experts Admin Application :dog: :cat: :rabbit: :hamster:

Welcome to the repository for the PFE admin application! :wave:

This project uses the following technologies and tooling:

- React
- TypeScript
- Jest
- React Testing Library
- ESLint
- Prettier

## Testing

Please ensure that any additions to the codebase have any relevant tests added with them.

The test should be within the folder alongside the component and named after the folder (e.g - `MyComponent.test.tsx`)

Our testing strategy is mainly integration and unit testing using Jest and React Testing Library.

See this [blog post by Kent C. Dodds](https://kentcdodds.com/blog/write-tests) for the reasoning behind this decision.

## Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run testAll`

Launches the test runner and runs all of the tests within the codebase.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: DONT DO THIS! - this is a one-way operation. Once you `eject`, you can’t go back!**

We're using create-react-app on this project to manage the dependencies related to React. We have a small front-end team and on the last project we spent a lot more time than we should have trying to update libraries and keep them in sync.

If you want to extend the configuration for this application, please take a look at [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) and the `config-overrides.js` file.

### `npm run lint`

Runs ESLint on each file within the codebase for any errors. These rules are specified within the `.eslintrc.js` file.

### `npm run format`

Runs Prettier on each file within the codebase and formats it based on the rules supplied within the `.prettierrc.js` file.

## VS Code Settings

These settings are for configuring VS Code to work with our ESLint and Prettier configurations.

First, please ensure that you have the VSCode ESLint(https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and Prettier(https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions installed.

Within VS Code, click the cog :gear: icon in the bottom left corner of the application and then select Settings.

- First search for "Code Actions On Save"
- Select "Edit in settings.json"
- Insert the following rules into the configuration

```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
    "eslint.validate": ["javascript"]
```

- Navigate bcak to Settings and search for "Format On Save"
- Tick the checkbox for the option "Editor: Format On Save"
- Your editor should be setup to work with Prettier and VSCode :smile:
