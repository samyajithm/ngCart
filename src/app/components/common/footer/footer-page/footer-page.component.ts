import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/*
*  Dummy component as placeholder for about and contact pages
* */

@Component({
  selector: 'app-footer-page',
  template: `
    <div>
      <mat-card>
        <mat-card-title>{{title | translate}}</mat-card-title>
        <mat-card-content>{{data | translate}}</mat-card-content>
      </mat-card>
    </div>`,
  styles: [`div, .mat-card {
    width: 100%;
    height: 100%;
    box-shadow: none;
  }`]
})

export class FooterPageComponent implements OnInit, DoCheck {

  context: string = '';
  title: string = '';
  data: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  /*
  *  doCheck will detect all the changes along with route params changes
  *  used to assign
  * */
  ngDoCheck(): void {
    if (this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.data['context']) {
      if (this.context != this.activatedRoute.snapshot.data['context']) {
        this.title = this.activatedRoute.snapshot.data['title'];
        this.data = this.activatedRoute.snapshot.data['data'];
      }
    }
  }
}
