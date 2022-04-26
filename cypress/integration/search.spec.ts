import keywords = require("../fixtures/keywords.json");
import page = require("../locators/page.js");
import item = require("../locators/item.js");

describe("Search for products", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.get(page.search).clear();
    cy.get(page.item);
  });

  it("should search for item and display no results", () => {
    cy.get(page.search).type("NotExistingItem");
    cy.get(page.item).should("have.length", 0);
  });

  keywords.forEach((keyword) => {
    it(`should search for item: ${keyword}`, () => {
      cy.get(page.search).type(keyword);
      cy.get(page.item).should("not.be.empty");
      cy.get(page.item).each(($el, index, list) => {
        cy.wrap($el)
          .get(item.title)
          .first()
          .should(($title) => {
            expect($title.text().toLowerCase()).to.contain(keyword);
          });
      });
    });
  });
});
