import {Component, OnInit} from '@angular/core';
import {Product} from "../../../types/ngCart.model";
import {Subscription} from "rxjs/index";
import {NgCartService} from "../../../services/ng-cart/ng-cart.service";
import {UtilitiesService} from "../../../services/utility/utilities.service";

@Component({
  selector: 'app-favorite-popover',
  templateUrl: './favorite-popover.component.html',
  styleUrls: ['./favorite-popover.component.scss']
})
export class FavoritePopoverComponent implements OnInit {

  favoriteList: any = [];
  productsInFavorite: Array<any> = [];
  productsList: Array<Product> = [];
  favoriteListSubscription: Subscription;
  productListSubscription: Subscription;
  loading: boolean = true;

  constructor(private ngCartService: NgCartService,
              private utilitiesService: UtilitiesService) {
  }

  ngOnInit() {
    /* Fetch the latest value of favoritetList */
    this.favoriteListSubscription = this.ngCartService.getFavoriteList().subscribe(result => {
      this.favoriteList = result;
      this.favoriteInit();
    });
  }

  /* Fetch the latest value of productsList
 *  map the productList with favoriteList to get the product details of items in Wish List
 *  For reduced memory usage favoriteList will have minimal data as it is stored in sessionStorage
 *  Example: favoriteList in sessionStorage: [1,2,3] -> all the _id's of products
 * */
  favoriteInit() {
    this.productListSubscription = this.ngCartService.getProductList()
      .subscribe((result: Array<Product>) => {
        this.productsList = result;
        this.productsInFavorite = [];

        this.favoriteList.forEach((id) => {

          /* Filtering out the details of the cart items from productList */
          let filteredItem: any = this.utilitiesService.filterBy(id, this.productsList, '_id')[0];
          if (filteredItem) {
            this.productsInFavorite.push(filteredItem);
          }
        });
        this.loading = false;
      }, () => {
        this.productsInFavorite = [];
      });
  }

}
