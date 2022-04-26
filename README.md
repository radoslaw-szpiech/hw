# Printify Homework

## How to setup & run

0. Run Printify homework application (by default it's run on `localhost:4200`, so the same is used in test)

1. Have `node` & `npm` installed.
2. Run `npm install`.
3. Run `npm run open` to open cypress GUI and run tests from there
4. Run `npm test` to quickly see results.

## Description

It is a brief example of test automation basing on simple web app delivered by Printify. I was mainly focused to cover most important functionalities which are displaying products and searching for them. Please, see my notes that I prepared during the implementation below.

## Notes

### Issues / bugs
- Home, About and Contacts buttons redirects to the same page.
- Price of items is changing after each event or page refresh (so basically even after typing single character in search input field).
- It happens that price “with Printify Premium” (which I assume should be lower than original) is higher than original one.
- "Unisex Jersey Long Sleeve Tee” redirects to other item details - one of the tests is failing because of this issue.
- “Men's Specter Tank Top” is listed twice, with different image.
- Search functionality only works for titles.
- X button is always visible and refreshing page when clicked even if there’s no text in search field
- Search is case insensitive..... well, it's not really a bug, it's a good thing actually ;)

### Lack of functionalities
- No registration/login mechanism
- No adding to cart/proceeding with order
- (it is only FE part of application, so these two should not be a surprise)

### DOM
- Lots of elements on page have ng attributes set to `[Object object]` which means that property is not resolved correctly
- Price class is named `title`, which may cause troubles during test automation
- it would be useful to have some `ng-data` attribute that contains item id

### Mobile view
- Items are located too far to the left - there is almost no margin 
- item details view - details could be placed on the bottom of the view instead of squeezing them between the picture and screen border

