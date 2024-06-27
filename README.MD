# Project on how to use express to make requests to interact with PRISMA.

### About the project.

This is a basic backend development project that implements prisma and its usage to create models for data and how to create migrations to create database tables and how to connect with the database. The project also implements how to create express HTTP request and interact with the database resources using Prisma. The resources for this project are stored in a Postgres database.


## How to use and run the project.

1.  You can clone the project from github in your device using the `git clone 'git repo link '` to access the program.
2.  Open the program, most preferably with Visual studio to run and make any improvements you need.

3.  Ensure you install all the necessary libraries listed below.
    Install the necessary dependencies (express, dotenv).

- Install express: ```npm install express```


- Install dotenv: ```npm install dotenv```

- Install Prisma: ```npm install prisma```

- To create Prisma migrations: ```npm prisma migrate dev --name "name the migration"```

- If you want, install nodemon: ```npm install nodemon```

4. In your project, poroceed to the file `package.json ` and ensure necessary configurations are made.
   Ensure you have this:

- "start:dev": "nodemon path_to_index.js",
- "start": "node path_to_index.js"
- "type":"module"

5. Ensure you connect your application with the database of your choice. eg. Postgres, MYSQL

6. Run nodemon to make request from the database service.
   On your terminal, enter this command `npm run start:dev ` (`start:dev` - this is the name you provided to your nodemon script in package.json file.)

7. Open an API testing tool such as Insomnia, or Postman. If you do not have any in your device, download and install.

8. Create HTTP requests for GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, POST_PRODUCT, PATCH_PRODUCT, DELETE_PRODUCT. Provide the necessary APIs links to your resources for each requests. Test the requests. The project should run with no errors.

### You made it. Thank you.
