import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgCartService} from '../../../services/ng-cart/ng-cart.service';
import {Product, ProductResponse} from '../../../types/ngCart.model';
import {finalize} from 'rxjs/internal/operators';
import {SnackbarService} from "../../../services/snackbar/snackbar.service";
import {LoadingService} from "../../../services/loading/loading.service";
import {Subscription} from "rxjs/index";
import {ActivatedRoute} from "@angular/router";

/*
*  Home page or the shopping page
* */

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit, OnDestroy {

  productsList: Array<Product> = [];
  loading: boolean = true;
  getProductSubscription: Subscription;
  title: string = '';
  data: string = '';

  constructor(private ngCartService: NgCartService,
              private snackbar: SnackbarService,
              private loadingService: LoadingService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data['context']) {
      this.title = this.activatedRoute.snapshot.data['title'];
      this.data = this.activatedRoute.snapshot.data['data'];
    }
    this.getProducts();
  }

  /* function call from the service to fetch async data */
  getProducts() {
    this.loadingService.startLoading();

    this.getProductSubscription = this.ngCartService.getProducts()
      .pipe(finalize(() => {

        this.ngCartService.setProductList(this.productsList);
        this.loading = false;
        this.loadingService.stopLoading();

      }))
      .subscribe((result: ProductResponse) => {

        if (result && result.data) {
          this.productsList = result.data;
        }

      }, () => {

        this.snackbar.open("error", {
          translate: true,
          data: 'snackBarError.fetchProduct'
        })
      });
  }

  ngOnDestroy() {
    this.getProductSubscription.unsubscribe();
  }

}
