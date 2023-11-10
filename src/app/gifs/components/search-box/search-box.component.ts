import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gifs } from '../../intefaces/gif.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('textSearch')input!: ElementRef<HTMLInputElement>;

  constructor(private gifService:GifsService){}

  buscador():void{
    if(this.input.nativeElement.value=='')return;
    this.gifService.search(this.input.nativeElement.value);

    this.input.nativeElement.value='';
  }
}
