# Getting Started with Create React App

## LOGIN SCREEN WITH END TO END STEPS:

1. CREATE LOGIN SCREEN
   . INSTALL MUI DEPENDENCIES
   CMD: npm install @material-ui/core @material-ui/icons @material-ui/styles

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Please find the below problem statement.
Please do create small project whether it’s on local or on any other online tool likes stackblitz etc I am fine.

Create a react application within login authentication with JWT.
It will have login page which will accept userName and Password.
On the click of Submit button it will send credentials and do the authentication.
Post Authentication it will take user to dashboard page, where it will show list of tasks from below url.
You can show task as list or cards.
You can use material UI.

http://jsonplaceholder.typicode.com/todos

Adding testing framework will help you to create better understand of testing of components.

## ADD THE BELOW CONFIG IN .env file

## START

NODE_ENV = development
MONGO_URI=mongodb+srv://<>:<>@cluster0.sm0nw.mongodb.net/cg-db?authSource=admin&replicaSet=atlas-a6y812-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
PORT = 5000
JWT_SECRET = 'abc123'

## END
