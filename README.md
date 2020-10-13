## Pet Foods Experts Admin Application :dog: :cat:

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

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: DONT DO THIS! - this is a one-way operation. Once you `eject`, you can’t go back!**

We're using create-react-app on this project to manage the dependencies related to React. We have a small front-end team and on the last project we spent a lot more time than we should have trying to update libraries and keep them in sync.

If you want to extend the configuration for this application, please take a look at libraries such as [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) or [craco](https://www.npmjs.com/package/@craco/craco)

### `npm run lint`

Runs ESLint on each file within the codebase for any errors. These rules are specified within the `.eslintrc.js` file.

### `npm run format`

Runs Prettier on each file within the codebase and formats it based on the rules supplied within the `.prettierrc.js` file.
