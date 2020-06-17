# NgCart

A simple E-Commerce Angular 8 application 

## Dependencies

 * Angular-Cli: 8.3.27
 * Typescript: 3.5.3
 * Node: 11.15.0
 * bootstrap: 4.5.0
 * [Angular Material: 8.2.3](https://www.npmjs.com/package/@angular/material)
 * [ngx-translate: 12.1.2](https://www.npmjs.com/package/@ngx-translate/core)
 * [ngx-toaster: 11.3.3](https://www.npmjs.com/package/ngx-toastr)
 

## Features
  * Home page with list of products.
  * Add items to Cart.
  * Hover over cart icon to view items in the cart.
  * Each item in quart will have a subtotal and grand total. On clicking checkout a mock of successful order is shown.
  * Cart icon show a badge with number of items in cart.
  * Mark items as Favorite.
  * Hover over Favorite icon to view wish list in a popover.
  * Clicking on links in footer will show route change and dummy pages.
  * Translation support is added for localization/Internationalization.
  * Toaster is added to let user know state of the action performed.
  * 'Quantity' key is considered as max number of quantity a product can be added to cart. A info toaster will be shown when it exceeds the limit and the product will not be added to cart.
  * State is maintained after the refresh.

## Development server

* Navigate to `\ngCart` and Run `npm install`.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


## Demo 

[Demo](https://samyajithm.github.io/ngCart/shop)
