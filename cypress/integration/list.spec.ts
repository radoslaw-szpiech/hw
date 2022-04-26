import page = require("../locators/page.js");
import item = require("../locators/item.js");

describe("Product list Page", () => {
  before(() => {
    cy.visit("/");
  });

  it("should display main elements", () => {
    cy.get(page.logo).should("be.visible");
    cy.get(page.search).should("be.visible");
    cy.get(page.item).should("not.be.empty");
  });

  it("should display product details", () => {
    cy.get(".list-item").first().as("item");
    cy.get("@item").get(item.image).should("be.visible");
    cy.get("@item").get(item.title).first().should("be.visible");
    cy.get("@item").get(item.subtitle).should("be.visible");
    // more validations should be added there, but as we have
    // repetitive classes here (e.g. .title), it would be unnecessary complex,
    // it would be much easier to add specific identifiers in source code
    // and then use them here
  });
});
