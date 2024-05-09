# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Plan

### MVP
- Tasks
- List of Tasks
- Screen
  - Main Screen
    - Has an input to write the task
    - A plus button to add it
    - A list of the active tasks
      - Comple task button
    - A list of Complete tasks
- Persistance
  - Client side persistance
- Progress Tracking
  - How many have been completed
  - How many still to do

### V2
- Searchability
  - Be able to search task by a string
- Priority (sorting)
  - Task have priority
  - Sort by highest priority
- Tagging System
  - Users can Create own tags and attach them to tasks
  - Create a new page for tags
    - Should display all available tasks
    - Has an input with a plus button
  - Itegrate into Tasks
- Progress Tracking
  - Create tasks bar
  - Create a new page to show completed tasks
    - Tasks completed per day/week.

### V3
- Create Server
  - Using Nodejs
- Create Database
  - Using Postgres
