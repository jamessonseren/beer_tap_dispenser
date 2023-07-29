# Beer Tap Dispenser

## Index

- <a href="#funcionalities">Functionalities</a>
- <a href="#technologies">Technologies</a>
- <a href="#howtorun">How to run</a>
- <a href="#tests">Tests</a>

## Description

This project was developed by Jamesson Seren Software Engineer.

## Project Functionalities

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

## Technologies 

- [x] NodeJs - Backend
- [x] PostgreSQL - Database
- [x] Github - Code version

### Dependencies

1. Prisma - ORM
2. Typescript
3. json2csv - Generates the report
4. bcryptjs
5. cors
6. env
7. express
8. swagger

## How to run the project

```bash
$ npm run dev

or

$ yarn dev
```

## Tests

This project was tested and documented with Swagger.io

To test run to the path <strong>/api-docs</strong>

for exemple: http://localhost:3333/api-docs