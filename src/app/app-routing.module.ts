import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopViewComponent} from './components/main/shop-view/shop-view.component';
import {FooterPageComponent} from "./components/common/footer/footer-page/footer-page.component";


const routes: Routes = [
  {
    path: 'shop',
    component: ShopViewComponent,
    data: {
      /* Translation keys in i18n */
      title: 'title.shop',
      data: 'subtitle.shop',
      context: 'shop'
    }
  }, {
    path: 'about',
    component: FooterPageComponent,
    data: {
      title: 'title.about',
      data: 'subtitle.about',
      context: 'about'
    }
  }, {
    path: 'contact',
    component: FooterPageComponent,
    data: {
      title: 'title.contact',
      data: 'title.contact',
      context: 'contact'
    }
  }, {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'shop',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
