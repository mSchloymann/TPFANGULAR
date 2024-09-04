// import { AsyncPipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { ContactoComponent } from "./contacto/contacto.component";
// import { HomeComponent } from './home/home.component';
// import { Observable } from 'rxjs';
// import { lego } from './types/types';
// import { ApiLegoService } from './services/api-lego.service';
// import { DetalleComponent } from './detalle/detalle.component';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, RouterLink, RouterLinkActive, ContactoComponent, HomeComponent, AsyncPipe, DetalleComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit{
//   public legoResult$!: Observable<lego[]>;
//   title = 'EcommerceLego';
//   constructor(private apiLego: ApiLegoService) {}
//   ngOnInit(): void {
//     this.legoResult$ = this.apiLego.getAll();
//   }
// }

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}