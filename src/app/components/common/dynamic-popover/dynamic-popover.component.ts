import {Component, OnInit} from '@angular/core';

/*
*  Generic Component for
*  Dropdown Menu and
*  to mimic Popover
* */

@Component({
  selector: 'app-dynamic-popover',
  templateUrl: './dynamic-popover.component.html',
  styles: []
})
export class DynamicPopoverComponent implements OnInit {
  closeMenu;

  constructor() {
  }

  ngOnInit() {
  }

  /* Opens dropdown menu on mouseEnter */
  mouseEnter(trigger) {
    if (this.closeMenu) {
      clearTimeout(this.closeMenu);
    }
    trigger.openMenu();
  }

  /* Close menu on mouseClick outside the container*/
  mouseLeave(trigger) {
    this.closeMenu = setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }
}
