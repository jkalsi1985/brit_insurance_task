Description of the task

The purpose of this task is to implement two scenarios:
1) Search for "IFRS 17"
2) Extract Bermuda office address from Contact page

The project was implement on a Mac (Chrome) using Cypress in Javascript because makes it easier to test UI, easy to debug to tests and you can inspect elements at run time. Cypress only supports Javascript which I'm familiar with.

Pre-requisites

- node (https://nodejs.org/en/download)
- cypress (https://docs.cypress.io/guides/getting-started/installing-cypress)

Instructions to run automation tests

- On a Mac
  - run `npm install` to install dependencies
  - use the command `npm run tests`

Comments/Improvements

- Check responsiveness:

* Use `cy.viewport(550, 750)` to test different screen resolution and different devices
* Accessibility testing - this will be manual testing with voiceOver, text-to-speech etc
* Find workaround finding element to click on search menu bar and validate result in drop down menu
* Finding workaround for testing the hoover search menu bar

Please note: Test Scenarios are listed in test test scenarios_for_contact_page.md and test scenarios_for_search_page.md
