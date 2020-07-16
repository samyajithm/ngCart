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
  * Each item in cart will have a subtotal and grand total. On clicking checkout a mock of successful order is shown.
  * Cart icon show a badge with number of items in cart.
  * Mark items as Favorite.
  * Hover over Favorite icon to view wish list in a popover.
  * Clicking on links in footer will show route change and dummy pages.
  * Translation support is added for localization/Internationalization.
  * Toaster is added to let user know state of the action performed.
  * 'Quantity' key is considered as max number of quantity a product can be added to cart. A info toaster will be shown when it exceeds the limit and the product will not be added to cart.
  * State is maintained after the refresh.

## Backend connection
  * Navigate to `environment.ts | environment.prod.ts` accordingly
  * Change the value of the server to instance uri of backend application
      * To run the backend app locally, clone the node.js app from [repo](https://github.com/samyajithm/ngShop.git) and follow the steps from Readme.md
      
      Sample server value in `environment` file
      ```typescript
        export const environment = {
          production: false,
          server: "http://localhost:3000"
        };         
      ```  
      * To connect to backend app hoisted in glitch online server (http://ngshop.glitch.me/products)
      
      Sample server value in `environment` file
      ```typescript
        export const environment = {
          production: false,
          server: "https://ngShop.glitch.me"
        };         
      ```  
      
## Development server

* Navigate to `\ngCart` and Run `npm install`.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


## Demo 

[Demo](https://samyajithm.github.io/ngCart/shop)

**Note**: [Demo](https://samyajithm.github.io/ngCart/shop) instance is connected to node.js app hoisted in (http://ngshop.glitch.me) and MongoDb hoisted in MongoDB atlas.

[POSTMAN COLLECTION](https://documenter.getpostman.com/view/11998783/T1DiGg6m)
