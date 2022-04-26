import products = require("../fixtures/products.json");
import page = require("../locators/page.js");
import item = require("../locators/item.js");

describe("Product details Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  products.forEach((product) => {
    it(`should display product details page: ${product}`, () => {
      cy.contains(product).click();
      cy.get(page.productList).should("not.exist");
      cy.get(item.image).should("be.visible");
      cy.get(item.title).first().should("have.text", product);
      cy.get(item.subtitle).should("be.visible");
    });
  });
});
