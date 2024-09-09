import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lego } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiLegoService {
  url = 'https://66df599dde4426916ee45e63.mockapi.io/api/lego/';
  http: HttpClient = inject(HttpClient);
  constructor() { }
  getAllLegos(): Observable<Lego[]> {
    return this.http.get<Lego[]>(this.url);
  }
  getOne(id: string): Observable<Lego> {
    return this.http.get<Lego>(this.url + id);
  }
  createOne(newLego: Lego) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Lego>(this.url, newLego, { headers });
  }
}
