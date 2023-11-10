import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { GIf } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private gifService:GifsService){}

  get getGifs():GIf[]{
    return this.gifService.listGIfs;
  }
}
