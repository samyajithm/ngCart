import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './components/common/footer/footer.component';
import {HeaderComponent} from './components/common/header/header.component';
import {ProductListComponent} from './components/main/product/abstract-product/product-list/product-list.component';
import {ShopViewComponent} from './components/main/shop-view/shop-view.component';
import {CommonModule} from '@angular/common';
import {NgCartService} from './services/ng-cart/ng-cart.service';
import {CartPopoverComponentView} from './components/main/cart-popover-view/cart-popover-view.component';
import {ProductComponent} from './components/main/product/product.component';
import {ProductGridComponent} from './components/main/product/abstract-product/product-grid/product-grid.component';
import {AbstractProductComponent} from './components/main/product/abstract-product/abstract-product.component';
import {DynamicPopoverComponent} from './components/common/dynamic-popover/dynamic-popover.component';
import {ToastrModule} from "ngx-toastr";
import {LoadingComponent} from './components/common/loading/loading.component';
import {FooterPageComponent} from './components/common/footer/footer-page/footer-page.component';
import { FavoritePopoverComponent } from './components/main/favorite-popover/favorite-popover.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    ShopViewComponent,
    CartPopoverComponentView,
    ProductComponent,
    ProductGridComponent,
    AbstractProductComponent,
    DynamicPopoverComponent,
    LoadingComponent,
    FooterPageComponent,
    FavoritePopoverComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot({
      autoDismiss: true,
      preventDuplicates: true,
      newestOnTop: true,
      timeOut: 100000,
      positionClass: 'toast-top-center',
      closeButton: true,
      extendedTimeOut: 0,
      maxOpened: 1
    }),
  ],
  providers: [NgCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}
