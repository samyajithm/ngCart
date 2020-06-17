import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgCartService} from "../../../services/ng-cart/ng-cart.service";
import {Subscription} from "rxjs/index";
import {Router} from "@angular/router";

/*
*  Component for header
* */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartCount: number = 0;
  favoriteCount: number = 0;
  cartListSubscription: Subscription;

  constructor(private ngCartService: NgCartService,
              private router: Router) {
  }

  ngOnInit() {
    // Subscribing to cartList to get the count of items in the cart by managing the state (State Management)
    this.ngCartService.getCartList()
      .subscribe(result => {
        this.cartCount = 0;
        if (result) {
          result.forEach(item => {
            // Sum of quantities of all the products in cart
            this.cartCount += item.quantity;
          })
        }
      });

    // Subscribing to favoriteList to get the count of items in the Wish List by managing the state (State Management)
    this.ngCartService.getFavoriteList()
      .subscribe(result => {
        this.favoriteCount = 0;
        if (result) {
          this.favoriteCount = result.length;
        }
      })
  }

  navigate() {
    this.router.navigate(['/shop']);
  }

  ngOnDestroy() {
    this.cartListSubscription.unsubscribe();
  }

}
