import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
