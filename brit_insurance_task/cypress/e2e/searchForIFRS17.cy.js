import { searchResultPage } from "../support/pageObjects";

describe("Search for IFRS 17", () => {
  it("search for IFRS 17 and validate the result from search result page", () => {
    cy.visit(
      Cypress.env("baseUrl") + "/search?k=" + "IFRS 17".replace(" ", "+")
    );
    cy.url().should("contain", "/search?k=IFRS+17");
    cy.get(searchResultPage.searchResults)
      .should("be.visible")
      .should("have.lengthOf", 3);

    // Assert the news section
    cy.get(searchResultPage.resultTitle).eq(0).should("have.text", "News");

    cy.get(searchResultPage.resultTag)
      .eq(0)
      .should(
        "have.text",
        "Interim results for the six months ended 30 June 2022"
      );

    cy.get(searchResultPage.subText)
      .eq(0)
      .should(
        "have.text",
        "A strong underwriting performance and significant growth."
      );

    // Assert culture section for Gavin Wilkinson
    cy.get(searchResultPage.resultTitle).eq(1).should("have.text", "Culture");

    cy.get(searchResultPage.resultTag)
      .eq(1)
      .should("have.text", "Gavin Wilkinson");

    cy.get(searchResultPage.subText)
      .eq(1)
      .should("have.text", "Group Chief Financial Officer");

    // Assert culture section for Gavin Wilkinson
    cy.get(searchResultPage.resultTitle).eq(2).should("have.text", "Culture");

    cy.get(searchResultPage.resultTag).eq(2).should("have.text", "John King");

    cy.get(searchResultPage.subText)
      .eq(2)
      .should("have.text", "Group Executive Underwriter");
  });
});
