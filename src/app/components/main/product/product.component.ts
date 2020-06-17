import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Product} from '../../../types/ngCart.model';
import {BehaviorSubject} from 'rxjs/index';

/*
*  Decider wrapper for type of product view
*
* */

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() productsList: Array<Product>;
  @Input() gridView?: boolean;
  @Input() isCart?: boolean;
  latestProductList = new BehaviorSubject([]);

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.latestProductList.next(this.productsList);
  }
}
