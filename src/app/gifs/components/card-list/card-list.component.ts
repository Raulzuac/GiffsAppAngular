import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GIf } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  constructor(private gifsService:GifsService){}

  @Input()
  listaGifs:GIf[] = [];


}
