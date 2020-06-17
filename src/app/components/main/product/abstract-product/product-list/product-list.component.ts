import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../../types/ngCart.model";
import {DomSanitizer} from "@angular/platform-browser";
import {NgCartService} from "../../../../../services/ng-cart/ng-cart.service";
import {SnackbarService} from "../../../../../services/snackbar/snackbar.service";
import {AbstractProductComponent} from "../abstract-product.component";
import {UtilitiesService} from "../../../../../services/utility/utilities.service";

/*
*  List view of the product
*  Accepts entire productList as Input
*  used in cart popover
* */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends AbstractProductComponent implements OnInit {

  @Input() productList: Array<Product>;
  @Input() isCart: boolean;

  constructor(public sanitizer: DomSanitizer,
              public ngCartService: NgCartService,
              public snackbar: SnackbarService,
              public utilitiesService: UtilitiesService) {
    super(ngCartService, sanitizer, snackbar, utilitiesService)
  }

  ngOnInit() {
  }

  /* Call delete from extended abstract class */
  deleteCartItem(product) {
    this.updateCart(product, false)
  }
}
