# Beer Tap Dispenser

## Index

- <a href="#description">Description</a>
- <a href="#funcionalities">Functionalities</a>
- <a href="#technologies">Technologies</a>
- <a href="#howtorun">How to run</a>
- <a href="#tests">Tests</a>
- <a href="#extra">Extras</a>
- <a href="#nextsteps">Next Steps</a>
- <a href="#organization">Directories Organization</a>
- <a href="#author">Author</a>


## Description <a name="description"></a>

This project is an API for managing and monitoring beverage dispensers at events. The API provides features that allow administrators to create, update, and delete dispensers, as well as track the services performed by each dispenser. Event attendees can easily serve themselves from the dispensers, while the system automatically calculates beverage consumption based on the time the tap is open, the volume of beverage dispensed, and the beverage price set.

One of the key functionalities is the generation of detailed reports, which administrators can use to evaluate the performance of the dispensers at the end of the event. These reports provide valuable insights into the total number of services performed by each dispenser, the total revenue generated, total dispenser running time, and more. With this information at hand, organizers can make informed decisions and enhance the event experience for participants.

With the dispenser management API, administrators have a powerful tool to provide a self-service beverage experience efficiently and transparently, ensuring the success of the event and the satisfaction of attendees.

## Functionalities <a name="functionalities"></a>

### Admin

Admin will have total control on the dispensers and will be able to generate final report.

- [x] Create Admin
- [x] Login Admin
- [x] Admin Details
- [x] Update Admin
- [x] Delete Admin

### Dispensers

    Dispensers will be created and managed by admin, who will set flow rate and beverage price for each dispenser.

- [x] Create Dispensers
- [x] List Dispensers
- [x] Update Dispensers
- [x] Delete Dispensers
- [x] Open Dispenser Tap
- [x] Close Dispenser Tap

### Services Registered

    Services represents whenever a dispenser tap is operated.

- [x] List services
- [x] Delete single service
- [x] Delete all services

### Report

- [x] Generate report

After all the events are concluded, the owner (admin) will be able to generate a csv report to analyse how was the perfomance of the dispensers.

The report will display the following:

- [x] Dispenser id
- [x] Dispenser name
- [x] Total revenue for each report
- [x] Indication if dispenser is below or above avarage
- [x] Total time each dispenser has run
- [x] Total quantity of operations

## Technologies <a name="technologies"></a>

- [x] NodeJs - Backend
- [x] PostgreSQL - Database
- [x] Github - Code version control

### Dependencies

1. Prisma - ORM
2. Typescript
3. json2csv - Generates the report
4. bcryptjs
5. cors
6. env
7. express
8. swagger

## How to run

### Open terminal and run:

```bash
$ git clone https://github.com/jamessonseren/beer_tap_dispenser.git
```

### Access API directory:

```bash
cd beer_tap_dispenser
``` 

### Install dependencies

```bash
$ npm i
```

or

```bash
$ yarn
```

### Create SQL Database

In this project it was used PostgreSQL.

There is no need to create the table.

### Crate .env file in current directory

This file will host the following variables:

- DATABASE_URL="Insert database details to connect. 

For example:
DATABASE_URL="postgresql://postgres:db-password@localhost:5432/beerDispenser?schema=public"

- JWT_SECRET

Go to https://www.md5hashgenerator.com/ and create a hash password

Get MD5 hash.

For example:
JWT_SECRET=cc3a0280e4fc1415930899896574e118

- PORT

Choose a PORT to run server

For example:
PORT=3333

### Run Prisma Migrations
```bash
$ npx prisma migrate dev
```

or

```bash
$ yarn prisma migrate dev
```

It will create the tables for this project.

Set a name for the migration.

### Run the API

```bash
$ npm run dev
```

or

```bash
$ yarn dev
```

Now the api should be running normally and console will display the following message:

"Server running on port 3333"

PORT will depend on the definition in .env

### Open localhost

http://localhost:3333


## Tests

This project was tested and documented with Swagger.io

To test, run path <strong>/api-docs</strong>

for exemple: http://localhost:3333/api-docs

All routes available will be display.

Some routes can only be requested with admin authentication. Make sure to create an admin and login first.

## Extras

This project requires two environment variables:

1. DATABASE_URL
2. JWT_SECRET

Make sure to insert them before running the project.

## Next Steps

- [] Dashboard for analysing the report
- [] New report for the dispensers
- [] Admin password recovery
- [] Create Dockerfile

## Directories Organization <a name="organization"></a>

The organization of the project folders was carefully planned to ensure a clear and modular structure. All the logic of the system is concentrated in the "src" directory, where we find three main directories: "Controller", "Service", and "Middleware".

The main processes and functionalities of the system are handled in the "Service" and "Controller" directories. In "Service", each entity of the project has a specific directory, such as "Admin", "Dispenser", "Report", and "Service Register". Each of these directories contains classes that implement the business logic related to these entities.

On the other hand, the controllers are responsible for receiving information from the frontend, such as the dispenser or administrator ID, for example. Upon obtaining this data, the controller calls the corresponding function of the related service class, which is responsible for executing all the business logic in conjunction with the database.

After data processing, the controller returns the properly processed information from the service. This approach makes the code more organized and easier to understand since each process is properly separated into its respective layers.

Additionally, the definition of API routes is also done clearly in "routes.ts," where each controller function is mapped to a specific route and an appropriate request method. Some methods require administrator authentication, such as creating dispensers, listing, deletion, and generating reports, ensuring the security of the system.

This modular structure allows for more efficient maintenance and scalability of the project, making it more organized and facilitating the work of other developers who may work on the code. The clear separation of responsibilities for each component makes the project more robust and easier to continue and evolve over time.

## Author <a name="author"></a>

Hello, my name is Jamesson Seren and I am a Fullstack Developer.
This project was made as part of a tech skills challenge.

I really enjoyed making this challenge because it made me think in so many different possibilities to solve some issues. There is much more to upgrade and I have made it in a way to be very easy to understand its logic.

I really hope you have enjoy it and contact me in Linkedin if you have any more question about this project.

https://www.linkedin.com/in/jamesson-seren/