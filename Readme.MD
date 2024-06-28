# GUVI - DAY 41

## Password Reset Flow - Backend

### How to run the project on your machine:

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

### Dependencies used

1. express

```
npm install express
```

2. nodemon

```
npm install nodemon --save-dev
```

3. dotenv

```
npm install dotenv
```

4. mongoose

```
npm install mongoose
```

5. nodemailer

```
npm install nodemailer
```

6. cors

```
npm install cors
```

7. bcrypt

```
npm install bcrypt
```

### About the Task.

1. The task is to create a feature of forgetting and resetting the password for a user.
2. We have to create the routes in connection with the mongodb server.
3. We use express.js library in NodeJS to run a javascript application as a server.

### Setup.

1. We create a new project using the npm package manager in node.js.
2. We run the following command to create a new project.

```
    npm init
```

3. We specify the details required for initializing the project asked in the terminal.
4. We install the `express` library by using installation command from the npm package manager.
5. We create a javascript file named `index.js` which is the root of the project.
6. We add a package called as `nodemon` to help us automate the development process. It restarts the server every time it detects changes in the code.
7. We use the `dotenv` package to declare environment variables for the server.
8. We change the `package.json` file to include start and dev parameter to make the script run from the command `npm run dev`.

### Folder Structure

1. Models.

   > - This folder contains the database schemas for the collections in our database.

2. Controllers.

   > - This folder contains the controllers for our application.
   > - The controllers are used to perform all the functions and operations.
   > - The controllers recieve the request from the client.
   > - We define the controller operations for both our entities in seperate files.

3. Routes.

   > - This folder contains the routes for our application.
   > - The routes are the API Endpoints.
   > - Routes are created using the router from express library.
   > - Student and mentor routes are defined seperately.

4. Utils.

   > - This folder is a utility helper for working with configuration files.
   > - We declare a file, which retrieves the environment variables from the dotenv file and exports them for further usage.

5. Helpers.
   > - This folder contains functions that help in performing sub-tasks like, generatingAuthString in our case.
   > - These functions provide us with reusability.

### Solution.

1. In the [index.js](./index.js) file, we establish the connection to our database, and create a server.
2. We create an express application, app, in the [app.js](./app.js) file.
3. Using the `dotenv` package, we declare secretive information as environment variables to not be exposed.
4. These values are extracted in the [config.js](./utils/config.js) file.
5. We create a transporter, for sending mail in the [transporter.js](./utils/transporter.js) file
6. Models are drafted for our entities, and schemas are defined using the `mongoose` library.
7. After schemas are defined, we create controllers for our application.
8. These controllers are the entry points of our server, that recieve data from the client.
9. Controllers are objects of function names as key and the asynchronous functions as their value.
10. Controllers are defined in its own folder. [Controllers](./controllers/)
11. Now, we declare endpoints for our APIs in the routes directory.
12. We use the router method in the express library to define our routes.
13. Routes are defined in the routes folder. [Routes](./routes/)
14. The API Endpoints are discussed in detail, below:

    1. API to Generate Auth String.

       > - Endpoint: /users/forgot
       > - This is a POST request that accepts the email of the user in request body.
       > - We check whether the user exists in the database using the email.
       > - If not, we send an error response saying user does not exist.
       > - We generate a random string using `random()` method.
       > - We add it to the database using the `save()` method.
       > - Using the `nodemailer` package, we send an email to the user with a link to reset their password.
       > - A success message is sent as response.

    2. API to verify the Auth String.

       > - Endpoint: /users/verify/:authString
       > - This is a GET request that accepts the auth string in URL params.
       > - We check whether the auth string exists in the database.
       > - If not, we send an error message as response.
       > - Else, a success message is sent as response.

    3. API to reset the password.

       > - Endpoint: /users/reset
       > - This is a POST request that accepts the email and password in request body.
       > - We check whether the email is valid in the database.
       > - If not, we send an error message as response.
       > - Else, the password is hashed using the `bcrypt` library.
       > - The password is stored in the database.
       > - A success message is sent as response once updated.
