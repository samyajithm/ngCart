import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgCartService} from "../../../services/ng-cart/ng-cart.service";
import {Product} from "../../../types/ngCart.model";
import {Subscription} from "rxjs/index";
import {UtilitiesService} from "../../../services/utility/utilities.service";
import {SnackbarService} from "../../../services/snackbar/snackbar.service";

/*
*  Popover component for cart from the toolbar
* */

@Component({
  selector: 'app-cart-popover-view',
  templateUrl: './cart-popover-view.component.html',
  styleUrls: ['./cart-popover-view.component.scss']
})
export class CartPopoverComponentView implements OnInit, OnDestroy {

  cartList: any = [];
  productsInCart: Array<Product> = [];
  productsList: Array<Product> = [];
  cartListSubscription: Subscription;
  productListSubscription: Subscription;
  loading: boolean = true;
  subTotal: any = 0;

  constructor(private ngCartService: NgCartService,
              private utilitiesService: UtilitiesService,
              private snackBar: SnackbarService) {
  }

  ngOnInit() {
    /* Fetch the latest value of cartList */
    this.cartListSubscription = this.ngCartService.getCartList().subscribe(result => {
      this.cartList = result;
      this.cartInit();
    });
  }

  /* Fetch the latest value of productsList
  *  map the productList with cartList to get the product details of items in cart
  *  For reduced memory usage CartList will have minimal data as it is stored in sessionStorage
  *  Example: cartList in sessionStorage: [{_id:1, quantity:1},{_id:2, quantity:3}]
  * */
  cartInit() {
    this.productListSubscription = this.ngCartService.getProductList()
      .subscribe((result: Array<Product>) => {
        this.productsList = result;
        this.productsInCart = [];
        this.subTotal = 0;
        this.cartList.forEach((item) => {

          /* Filtering out the details of the cart items from productList */
          let filteredItem: any = this.utilitiesService.filterBy(item._id, this.productsList, '_id')[0];
          if (filteredItem) {
            filteredItem.quantityInCart = item.quantity;
            this.productsInCart.push(filteredItem);

            /* Handler to convert price to Number*/
            let price: number = Number(filteredItem.price) || 0;

            this.updateSubtotal(item.quantity * price);
          }
        });
        this.loading = false;
      }, () => {
        this.productsInCart = [];
        this.subTotal = 0;
      });
  }

  /* Calculates Total of all the items in the cart*/
  updateSubtotal(amount) {
    this.subTotal += amount;
  }

  /* Call currency func from service */
  getCurrency(price) {
    return this.utilitiesService.getCurrency(price);
  }

  /* Clears out cartList*/
  checkout() {
    this.ngCartService.storeList('cartList', []);
    this.ngCartService.setCartList([]);
    this.snackBar.open('success', {
      translate: true,
      data: 'snackBarSuccess.checkout'
    })
  }

  ngOnDestroy() {
    this.cartListSubscription.unsubscribe();
    this.productListSubscription.unsubscribe();
  }
}
