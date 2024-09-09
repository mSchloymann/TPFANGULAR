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
];
