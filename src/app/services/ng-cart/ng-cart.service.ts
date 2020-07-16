import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs/index";
import {environment} from "../../../environments/environment";

@Injectable()
export class NgCartService {

  productList = new BehaviorSubject<any>([]);
  cartList = new BehaviorSubject<any>(this.getStoredList('cartList'));
  favoriteList = new BehaviorSubject<any>(this.getStoredList('favoriteList'));
  serverUrl = environment.server ? environment.server : '';

  constructor(public http: HttpClient) {
  }

  /* Fetch product from api or url */
  getProducts() {
    const url = this.serverUrl + '/products';
    return this.http.get(url);
  }

  /* Set list of products */
  setProductList(data) {
    this.productList.next(data);
  }

  getProductList() {
    return this.productList.asObservable();
  }

  /* Set list of cart items */
  setCartList(data) {
    this.cartList.next(data);
  }

  getCartList() {
    return this.cartList.asObservable();
  }

  /* Set list of favorite items */
  setFavoriteList(data) {
    this.favoriteList.next(data);
  }

  getFavoriteList() {
    return this.favoriteList.asObservable();
  }

  /* Store items into sessionStorage */
  getStoredList(key: string) {
    const list = sessionStorage.getItem(key);
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  /* Fetch items from sessionStorage */
  storeList(key: string, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

}
