import { bermudaContactDetails } from "../support/pageObjects";

describe("Extract Bermuda Office", () => {
  it("validate bermuda office address and contact", () => {
    cy.navigateToContactPage();
    cy.get(bermudaContactDetails.bermudaOfficeComponentTitle)
      .should("be.visible")
      .should("contain", "Bermuda Office");
    cy.get(bermudaContactDetails.bermudaOfficeLocationCity).should("contain", "Pembroke");

    cy.get(bermudaContactDetails.bermudaOfficeLocationAddress)
      .should("contain", "Ground Floor, Chesney House")
      .should("contain", "The Waterfront, 96 Pitts Bay Road,")
      .should("contain", "Pembroke, Hamilton HM 08, Bermuda");

    cy.get(bermudaContactDetails.bermudaOfficeLocationContacts).should("contain", "+1 441 278 0660");
  });
});
