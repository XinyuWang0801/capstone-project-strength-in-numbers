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


## Git Setup

It is recommended that you setup a separate remote from the cloned repository, this allows you to have a local repository that does not need to track the main repository. 

To do this, first clone the main repository: 
```
git clone git@github.com:ScientistCoco/COMP3900-Strength-In-Numbers.git
```

Then run the command:
```
git remote -v 
```
This will show you the urls of the remotes you are tracking locally. At this moment you should only see:
```
origin        git@github.com:ScientistCoco/COMP3900-Strength-In-Numbers.git (fetch)
origin        git@github.com:ScientistCoco/COMP3900-Strength-In-Numbers.git (push)
```
Rename the **origin** repository to have a different name, 'upstream' is usually the preferred name. This is the name for the main repository from where you will pull nad keep a clone of your fork updated. To do this run the command:
```
git remote rename origin upstream
```

Now on the homepage of the git project we will make a fork from the main repository. To do this, click the button labelled **Fork** which is located right next to **Star** and **Watch**. Now you have your own copy of a repository, so lets setup our local to track this:
```
git remote add origin <ssh link>
```
The ssh link will be in some form: git@github.com:<Your username>/COMP3900-Strength-In-Numbers.git

You can check that the remote has been setup properly by running the command:
```
git remote -v
```
Which will output:
```
upstream        git@github.com:ScientistCoco/COMP3900-Strength-In-Numbers.git (fetch)
upstream        git@github.com:ScientistCoco/COMP3900-Strength-In-Numbers.git (push)

origin        git@github.com:<Your username>/COMP3900-Strength-In-Numbers.git (fetch)
origin        git@github.com:<Your username>/COMP3900-Strength-In-Numbers.git (push)
```

Now you can freely push to your repository without worrying about affecting the main repository.

## Git Commit Messages

Please try to follow the guidelines when writing the subject for git commits:
> #
> (Feature, Fix, Docs, Style, Refactor, Test, Chore): { Commit message }
> #

> ### Example:
> Feature: Add login button for customers

More info:
<br>
| **Type** | **Description** |
| -- | -- |
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

