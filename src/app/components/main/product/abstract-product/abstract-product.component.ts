import {Component, OnChanges, OnDestroy, OnInit, SecurityContext} from '@angular/core';
import {NgCartService} from "../../../../services/ng-cart/ng-cart.service";
import {DomSanitizer} from "@angular/platform-browser";
import {SnackbarService} from "../../../../services/snackbar/snackbar.service";
import {Product} from "../../../../types/ngCart.model";
import {Subscription} from "rxjs/index";
import {UtilitiesService} from "../../../../services/utility/utilities.service";

/*
*  Abstract Class for all the Product components
* */

@Component({
  selector: 'app-abstract-product',
  template: ``,
  styles: []
})
export class AbstractProductComponent implements OnInit, OnChanges, OnDestroy {

  favoriteList: any = [];
  cartList: any = [];
  favoriteListSubscription: Subscription;

  constructor(public ngCartService: NgCartService,
              public sanitizer: DomSanitizer,
              public snackBar: SnackbarService,
              public utilitiesService: UtilitiesService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.favoriteListSubscription = this.ngCartService.getFavoriteList().subscribe(result => {
      this.favoriteList = result;
    });
  }

  /* Sanitize the image url */
  getSanitizedImg(imgSrc) {
    return this.sanitizer.sanitize(SecurityContext.URL, imgSrc);
  }

  /*
  *  Get Currency in regional format
  * */
  getCurrency(price) {
    return this.utilitiesService.getCurrency(price);
  }

  /* Check whether the product is marked as favorite */
  isProductFavorite(id) {
    return this.favoriteList && this.favoriteList.includes(id);
  }

  /* Check or uncheck product as Favorite */
  updateFavorite(id, add) {
    this.favoriteList = this.ngCartService.getStoredList('favoriteList');
    if (this.favoriteList.includes(id)) {
      if (!add) {
        this.favoriteList.splice(this.favoriteList.indexOf(id), 1);
      }
    } else {
      if (add) {
        this.favoriteList.push(id);
      }
    }
    this.ngCartService.setFavoriteList(this.favoriteList);
    this.ngCartService.storeList('favoriteList', this.favoriteList);
  }

  /*
  *  Add or delete product from the cart
  * */
  updateCart(product: Product, add: boolean) {
    this.cartList = this.ngCartService.getStoredList('cartList');
    const index = this.cartList.findIndex(item => item._id == product._id);
    let item = this.cartList[index];

    if (index >= 0) {
      if (add) {
        /* Adding or increasing quantity of existing product in cart*/
        if (item.quantity < product.quantity) {
          item.quantity++;
          this.cartList[index] = item;

          this.snackBar.open('success', {
            translate: true,
            translateData: {"productName": product.name},
            data: 'snackBarSuccess.cartAdd'
          })
        } else {
          /* If quantity in cart reaches max quantity limit of a product info snackbar is shown
          *   here quantity in productList is taken as max limit
          * */
          this.snackBar.open('info', {
            translate: true,
            translateData: {"productName": product.name, "quantity": product.quantity},
            data: 'snackBarInfo.maxQuant'
          }, {
            translate: true,
            data: 'snackBarTitle.maxQuant'
          })
        }
      } else {
        /* Delete Product from the cart*/
        this.cartList.splice(index, 1);
      }
    } else {
      if (add) {
        /* Add new product to cart*/
        this.cartList.push({
          _id: product._id,
          quantity: 1
        });

        this.snackBar.open('success', {
          translate: true,
          translateData: {"productName": product.name},
          data: 'snackBarSuccess.cartAdd'
        })
      }
    }

    this.ngCartService.setCartList(this.cartList);
    this.ngCartService.storeList('cartList', this.cartList);
  }

  ngOnDestroy() {
    this.favoriteListSubscription.unsubscribe();
  }
}
