// -- This command enter what user want to search for--
Cypress.Commands.add("searchForTerm", (searchTerm) => {
  cy.visit(
    Cypress.env("baseUrl") + "/search?k=" + searchTerm.replace(" ", "+")
  );
});

// -- This command to navigate Contact page --
Cypress.Commands.add("navigateToContactPage", () => {
  cy.visit(Cypress.env("contactUrl"));
});
