import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs } from '../intefaces/gif.interface';
import { GIf, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apikey:string='uARSSyzOZWgAyNdG06abxiv3wxaAYyuh'
  private _language:string = 'es';
  private _limit:string = '10';
  private _apiEndpoint:string=`https://api.giphy.com/v1/gifs/search?`;
  private _listaQuerys:string[] = [];
  public listGIfs:GIf[] = [];

  constructor(private http:HttpClient) {
    this._listaQuerys= JSON.parse(localStorage.getItem('busquedas')!) || [];
    this.listGIfs = JSON.parse(localStorage.getItem('gifs')!) || [];
  }

  get listaQuerys():string[]{
    return [...this._listaQuerys];
  }



  arreglaLista(query:string){
    query=query.toLowerCase();
    if(this._listaQuerys.includes(query)){
      this._listaQuerys=this._listaQuerys.filter((oldQuerys => oldQuerys!=query));
    }
    this._listaQuerys.unshift(query);
    this._listaQuerys=this._listaQuerys.splice(0,10);

    localStorage.setItem('busquedas',JSON.stringify(this._listaQuerys));

  }

  search(query:string){
    const queryParams = new HttpParams()
    .set('api_key',this._apikey)
    .set('lang',this._language)
    .set('limit',this._limit)
    .set('q',query)

    this.http.get<SearchResponse>(this._apiEndpoint,{params:queryParams})
    .subscribe((response)=>{
      this.listGIfs=response.data
      localStorage.setItem('gifs',JSON.stringify(this.listGIfs));
    });

    this.arreglaLista(query);
  }
}
