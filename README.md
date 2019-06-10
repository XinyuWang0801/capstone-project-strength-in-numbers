This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

NPM (node package manager) is required to install external dependencies for this project. You can download it at:
https://www.npmjs.com/get-npm

In terms of git management please refer to the git section.

Once you have cloned the project into your remote you will need to install all the required packages in order to start the application:
```
npm install
```

Linting has also been setup in this project to ensure consistent code practices. If you are using VSCode you can install the ESLint extension so you can see the linting errors in the editor - will warn you of potential problems as you write code rather then have to run the script each time to check. [Extension Link](
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).


## Git Guidelines
When implementing new features please create a new branch, this will keep the master branch clean and free from conflicts. Pull requests will then be made to the master branch when pushing a new feature to be deployed.  

## Git Commit Messages

Please try to follow the guidelines when writing the subject for git commits:
> #
> (Feature, Fix, Docs, Style, Refactor, Test, Chore): { Commit message }
> #

> ### Example:
> Feature: Add login button for customers

| Type | Description |
| ------------- | ------------- |
| Feature | A new feature or addition which generally relates to a user story |
| Fix | A fix to an existing piece of code, without major refactors |
| Docs | Annotation or work for documentation inlcuded with the source | 
| Style | Asthetic front end work to resources such as CSS/SCSS or Images |
| Refactor | A rework of an existing piece of code |
| Test | Work done to create, fix or enable tests | 
| Chore | Tidy ups, formatting, things which don't change functionality but improve code quality | 

## ESLint Rules:
The linting rules have been set to follow [Airbnb javascript style guide](https://github.com/airbnb/javascript)

Extra rules have also been added as per the .eslintrc.js file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

