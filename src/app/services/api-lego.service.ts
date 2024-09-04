import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lego } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiLegoService {
  url = 'https://66cd09ed8ca9aa6c8cc94f65.mockapi.io/api/Lego';
  http: HttpClient = inject(HttpClient);
  constructor() { }
  getAllLegos(): Observable<lego[]> {
    return this.http.get<lego[]>(this.url);
  }
  getOne(id: string): Observable<lego> {
    return this.http.get<lego>(this.url + id);
  }
  createOne(newLego: lego) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<lego>(this.url, newLego, { headers });
  }
}

// import { inject, Injectable } from '@angular/core';
// import { IHero } from '../types/types';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   url = 'https://66562e799f970b3b36c48e76.mockapi.io/heroes/';
//   http: HttpClient = inject(HttpClient);
//   constructor() {}
//   getAllHeroes(): Observable<IHero[]> {
//     return this.http.get<IHero[]>(this.url);
//   }
//   getOne(id: string): Observable<IHero> {
//     return this.http.get<IHero>(this.url + id);
//   }
// }