import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'contacto', component: ContactoComponent, title: 'Contacto'},
    { path: 'detalle/:id', component: DetalleComponent, title: 'Detalle'},
    { path: '', redirectTo: '/detalle', pathMatch: 'full'},
    
    { path: '**', component: NotFoundComponent },
];

// import { Routes } from '@angular/router';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes-list/heroes-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroComponent } from './hero/hero.component';

// export const routes: Routes = [
//   { path: 'crisis-list', title: 'Crisis', component: CrisisListComponent },
//   { path: 'heroes-list', title: 'Heroes', component: HeroesListComponent },
//   { path: 'heroes-list/:id', title: 'Hero', component: HeroComponent },
//   { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent },
// ];