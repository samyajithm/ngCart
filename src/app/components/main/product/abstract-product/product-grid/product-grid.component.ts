import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../../types/ngCart.model';
import {DomSanitizer} from '@angular/platform-browser';
import {NgCartService} from "../../../../../services/ng-cart/ng-cart.service";
import {SnackbarService} from "../../../../../services/snackbar/snackbar.service";
import {AbstractProductComponent} from "../abstract-product.component";
import {UtilitiesService} from "../../../../../services/utility/utilities.service";

/*
* Grid view of the product
* Accept single product as Input
* used in home page
* */

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent extends AbstractProductComponent implements OnInit {

  @Input() product: Product;
  isFavorite: boolean;

  constructor(public sanitizer: DomSanitizer,
              public ngCartService: NgCartService,
              public snackbar: SnackbarService,
              public utilitiesService: UtilitiesService) {
    super(ngCartService, sanitizer, snackbar, utilitiesService);
  }

  ngOnInit() {
    this.productInit()
  }

  /* Detect, if product is favorite or not
  *  Calls function from extended class
  * */
  productInit() {
    this.isFavorite = this.isProductFavorite(this.product.id);
  }

  /*
  *   Add Items to cart
  *   Calls function from extended class
  * */
  addToCart() {
    this.updateCart(this.product, true);
  }

  /* Update favorite
  * */
  updateFav(productId, value) {
    this.isFavorite = value;
    this.updateFavorite(productId, value);
  }

}
